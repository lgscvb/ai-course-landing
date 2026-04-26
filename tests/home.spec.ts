import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders hero with main headline", async ({ page }) => {
    await page.goto("/");

    // H1 「你的 AI 只會聊天？」 應可見
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("你的 AI 只會聊天？");
    await expect(h1).toContainText("讓它真正動手做事。");
  });

  test("primary CTA links to /enroll", async ({ page }) => {
    await page.goto("/");

    // 「免費報名」CTA -- 第一顆 hero 區的 CTAButton (Link a tag)
    const cta = page.getByRole("link", { name: /免費報名/ }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/enroll");

    // 點下去 URL 應變成 /enroll
    await cta.click();
    await expect(page).toHaveURL(/\/enroll(\/)?$/);
  });

  test("renders at least 4 use case cards in INDUSTRIES section", async ({
    page,
  }) => {
    await page.goto("/");

    // useCases 陣列共 6 個，每張卡片都有 industry pill；用 USE CASES section heading 定位
    const heading = page.getByRole("heading", {
      name: "各行各業，AI 都能幫上忙",
    });
    await expect(heading).toBeVisible();

    // 各行各業關鍵字（至少 4 個會在頁面上）
    const industries = ["電商經營", "會計 / 稅務", "房仲業", "行銷 / 自媒體"];
    for (const name of industries) {
      await expect(page.getByText(name, { exact: true }).first()).toBeVisible();
    }
  });

  test("DATA section shows 4 stat values", async ({ page }) => {
    await page.goto("/");

    // 用「數據會說話」的 H2 確認 section 存在
    await expect(
      page.getByRole("heading", { name: "數據會說話" })
    ).toBeVisible();

    // 4 個 stat label（值會 CountUp 動態變化，比較可靠的是 label 與 source 文字）
    const labels = [
      "台灣中小企業僅粗淺了解 AI",
      "的人在「撞牆期」就放棄",
      "AI 做了 80%，最後 20% 完成不了",
      "學費 vs 外包網站 NT$30,000+",
    ];
    for (const label of labels) {
      await expect(page.getByText(label).first()).toBeVisible();
    }

    // 80/20 是 static 顯示，CountUp 不會覆蓋
    await expect(page.getByText("80/20").first()).toBeVisible();
  });

  test("page is long enough (>2500px) to contain footer", async ({ page }) => {
    await page.goto("/");
    // 等內容渲染穩定
    await page.waitForLoadState("networkidle");

    const bodyHeight = await page.evaluate(
      () => document.body.scrollHeight
    );
    expect(bodyHeight).toBeGreaterThan(2500);

    // 滾到底，confirm footer (公司資訊 / Copyright 等) 可達
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // Footer.tsx 有 contentinfo role
    const footer = page.locator("footer").first();
    await expect(footer).toBeVisible();
  });
});
