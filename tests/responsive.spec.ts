import { test, expect } from "@playwright/test";

/**
 * Header responsive behavior:
 *  - desktop (≥768): 水平 nav links 顯示，漢堡按鈕隱藏
 *  - mobile (<768): 漢堡按鈕顯示，水平 nav 連結隱藏；點漢堡顯示 dropdown
 *
 * 用 viewport 來判斷 desktop / mobile，與 project 名對齊。
 */

test.describe("Site Header responsive", () => {
  test("desktop shows horizontal nav, hamburger hidden", async ({
    page,
    viewport,
  }) => {
    test.skip(
      !viewport || viewport.width < 768,
      "desktop-only viewport check"
    );

    await page.goto("/");

    const header = page.locator("header").first();
    await expect(header).toBeVisible();

    // 桌機 nav links（每一個都應 visible）
    const navLabels = ["課程大綱", "講師介紹", "常見問題"];
    for (const label of navLabels) {
      const link = header.getByRole("link", { name: label }).first();
      await expect(link).toBeVisible();
    }

    // 漢堡按鈕在 md:hidden -- 桌機應 hidden
    const hamburger = header.getByRole("button", { name: /menu/i });
    await expect(hamburger).toBeHidden();
  });

  test("mobile shows hamburger, hides desktop nav, toggles dropdown", async ({
    page,
    viewport,
  }) => {
    test.skip(
      !viewport || viewport.width >= 768,
      "mobile-only viewport check"
    );

    await page.goto("/");

    const header = page.locator("header").first();
    await expect(header).toBeVisible();

    // 漢堡可見
    const hamburger = header.getByRole("button", { name: /menu/i });
    await expect(hamburger).toBeVisible();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // 預設 mobile dropdown 內的 nav links 不可見
    // 我們檢查一個會出現在桌機 nav 但 mobile 在 dropdown 裡的標籤是否被「桌機水平 nav」隱藏
    // 桌機那組 nav 容器 class: hidden md:flex；mobile dropdown 預設 isOpen=false 不渲染
    const visibleNavLinksBefore = await header
      .getByRole("link", { name: "課程大綱" })
      .count();
    // 桌機水平 nav 在 mobile 應 display:none，但 mobile dropdown 預設 closed → DOM 內不渲染
    // 所以「課程大綱」這個 link 在 mobile 預設下：要嘛 0 個（dropdown 沒展開）、要嘛 1 個但 hidden
    if (visibleNavLinksBefore > 0) {
      await expect(
        header.getByRole("link", { name: "課程大綱" }).first()
      ).toBeHidden();
    }

    // 點漢堡 → dropdown 出現
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");

    // mobile dropdown 內的 nav links 應可見
    await expect(
      header.getByRole("link", { name: "課程大綱" }).first()
    ).toBeVisible();
    await expect(
      header.getByRole("link", { name: "講師介紹" }).first()
    ).toBeVisible();
    await expect(
      header.getByRole("link", { name: "常見問題" }).first()
    ).toBeVisible();

    // 再點一次漢堡 → 收起來
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });
});
