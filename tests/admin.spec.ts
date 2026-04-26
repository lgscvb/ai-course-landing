import { test, expect } from "@playwright/test";

const SAMPLE_ROWS = [
  {
    id: 1,
    created_at: "2026-04-25 10:30:00",
    name: "王小明",
    email: "wang@example.com",
    phone: "0912345678",
    company: "Lico Studio",
    version: "12hr",
    problem: "想自動化蝦皮訂單同步流程",
    source: "Facebook / IG",
    status: "new",
  },
  {
    id: 2,
    created_at: "2026-04-25 11:15:00",
    name: "李小華",
    email: "lee@example.com",
    phone: "0922333444",
    company: null,
    version: "24hr",
    problem: "想做互動式報價網頁給客戶",
    source: null,
    status: "contacted",
  },
];

async function mockAdminOk(page: import("@playwright/test").Page) {
  await page.route("**/api/admin?**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        count: SAMPLE_ROWS.length,
        rows: SAMPLE_ROWS,
      }),
    });
  });
}

test.describe("Admin page", () => {
  test("renders stats and table rows from mocked /api/admin", async ({
    page,
  }) => {
    await mockAdminOk(page);

    await page.goto("/admin");

    // Stats 4 個
    const statLabels = ["總報名數", "12hr 班", "24hr 班", "未聯絡"];
    for (const lbl of statLabels) {
      await expect(page.getByText(lbl, { exact: true })).toBeVisible();
    }

    // Table 兩列：兩個姓名
    const table = page.locator("table");
    await expect(table).toBeVisible();
    await expect(table.getByText("王小明")).toBeVisible();
    await expect(table.getByText("李小華")).toBeVisible();

    // version pills
    await expect(table.getByText("12hr").first()).toBeVisible();
    await expect(table.getByText("24hr").first()).toBeVisible();
  });

  test("clicking 重新整理 triggers another /api/admin request", async ({
    page,
  }) => {
    await mockAdminOk(page);

    await page.goto("/admin");
    // 等首次載入完成
    await expect(page.getByText("王小明")).toBeVisible();

    // 之後點重新整理，預期再打一次 /api/admin
    const reqPromise = page.waitForRequest(
      (req) =>
        req.url().includes("/api/admin") && req.method() === "GET"
    );
    await page.getByRole("button", { name: "重新整理" }).click();
    const req = await reqPromise;
    expect(req.url()).toContain("/api/admin");
  });

  test("匯出 CSV anchor has correct href", async ({ page }) => {
    await mockAdminOk(page);

    await page.goto("/admin");
    const csvLink = page.getByRole("link", { name: /匯出 CSV/ });
    await expect(csvLink).toBeVisible();
    await expect(csvLink).toHaveAttribute("href", "/api/admin?format=csv");
  });

  test("401 from /api/admin shows 需要管理員帳密 error", async ({ page }) => {
    await page.route("**/api/admin?**", async (route) => {
      await route.fulfill({
        status: 401,
        contentType: "application/json",
        body: JSON.stringify({ ok: false, error: "unauthorized" }),
      });
    });

    await page.goto("/admin");

    // 頁面有多個 role=alert（含 Next.js __next-route-announcer__），用內含特定文字 scope
    const errorAlert = page.locator(
      'div[role="alert"]:has-text("需要管理員帳密")'
    );
    await expect(errorAlert).toBeVisible();
  });
});
