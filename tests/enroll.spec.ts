import { test, expect, Page } from "@playwright/test";

/* ---------- helpers ---------- */
/**
 * 注意：頁面 Field component 的 <label> 與 <input> 沒有 htmlFor 關聯，
 * 所以不能用 getByLabel。改用 placeholder / type / name attribute 鎖定。
 */

function nameInput(page: Page) {
  return page.getByPlaceholder("王小明");
}
function emailInput(page: Page) {
  return page.getByPlaceholder("you@example.com");
}
function phoneInput(page: Page) {
  return page.getByPlaceholder("0912345678");
}
function companyInput(page: Page) {
  return page.getByPlaceholder("例如：自營工作室、某某有限公司");
}
function problemTextarea(page: Page) {
  // textarea placeholder 開頭為「例如：每天要把蝦皮訂單」
  return page.getByPlaceholder(/每天要把蝦皮訂單/);
}

async function fillValidForm(page: Page) {
  await nameInput(page).fill("王小明");
  await emailInput(page).fill("test@example.com");
  await phoneInput(page).fill("0912345678");
  await companyInput(page).fill("Lico Studio");
  // version radios 用 sr-only input；點外層 label 文字
  await page.getByText("12hr 版", { exact: false }).first().click();
  await problemTextarea(page).fill(
    "想自動化每天蝦皮訂單同步到 Excel 的流程，每天大概要花 2 小時手動抄。"
  );
}

async function submitForm(page: Page) {
  await page.getByRole("button", { name: /送出報名/ }).click();
}

/* ---------- specs ---------- */

test.describe("Enroll page", () => {
  test("renders all required form fields", async ({ page }) => {
    await page.goto("/enroll");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "免費報名"
    );

    // 必填欄位
    await expect(nameInput(page)).toBeVisible();
    await expect(emailInput(page)).toBeVisible();
    await expect(phoneInput(page)).toBeVisible();
    await expect(problemTextarea(page)).toBeVisible();

    // 兩個 version radio 都該渲染
    await expect(page.getByText("12hr 版").first()).toBeVisible();
    await expect(page.getByText("24hr 版").first()).toBeVisible();
    expect(
      await page.locator('input[type="radio"][name="version"]').count()
    ).toBe(2);
  });

  test("does not show errors before first submit attempt", async ({ page }) => {
    await page.goto("/enroll");

    // attempted=false 時 inline errors 不應出現
    await expect(page.getByText("請填寫姓名")).toHaveCount(0);
    await expect(page.getByText("Email 格式不正確")).toHaveCount(0);
    await expect(page.getByText(/請填台灣手機/)).toHaveCount(0);
    await expect(page.getByText(/請選擇想上哪個版本/)).toHaveCount(0);
    await expect(page.getByText(/請描述想解決的工作問題/)).toHaveCount(0);
  });

  test("honeypot field exists in DOM with off-screen positioning", async ({
    page,
  }) => {
    await page.goto("/enroll");
    const honey = page.locator('input[name="company_website"]');
    await expect(honey).toHaveCount(1);

    // 直接驗 inline style（Playwright 對 aria-hidden + width 1px 的元素 toBeHidden 行為不一致，
    // 改用 style props 確認確實 off-screen）
    const style = await honey.evaluate((el) => {
      const s = (el as HTMLInputElement).style;
      return {
        position: s.position,
        left: s.left,
        opacity: s.opacity,
        width: s.width,
        height: s.height,
      };
    });
    expect(style.position).toBe("absolute");
    expect(style.left).toBe("-9999px");
    expect(style.opacity).toBe("0");
    expect(style.width).toBe("1px");
    expect(style.height).toBe("1px");
  });

  test("submitting empty form shows inline errors and does NOT call API", async ({
    page,
  }) => {
    await page.goto("/enroll");

    let apiCalled = false;
    await page.route("**/api/register", async (route) => {
      apiCalled = true;
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, id: 1 }),
      });
    });

    await submitForm(page);

    // 至少應該看到必填錯誤
    await expect(page.getByText("請填寫姓名")).toBeVisible();
    await expect(page.getByText("Email 格式不正確")).toBeVisible();
    await expect(page.getByText(/請填台灣手機/)).toBeVisible();
    await expect(page.getByText(/請選擇想上哪個版本/)).toBeVisible();
    await expect(page.getByText(/請描述想解決的工作問題/)).toBeVisible();

    // 給點時間，確認絕對沒打到 API
    await page.waitForTimeout(300);
    expect(apiCalled).toBe(false);

    // 仍在 /enroll
    await expect(page).toHaveURL(/\/enroll(\/)?$/);
  });

  test("successful submit redirects to /enroll/thanks", async ({ page }) => {
    await page.goto("/enroll");

    await page.route("**/api/register", async (route) => {
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, id: 1 }),
      });
    });

    await fillValidForm(page);
    await submitForm(page);

    await page.waitForURL(/\/enroll\/thanks/, { timeout: 10_000 });
    await expect(page).toHaveURL(/\/enroll\/thanks/);
  });

  test("duplicate enrollment (409) shows duplicate error message", async ({
    page,
  }) => {
    await page.goto("/enroll");

    await page.route("**/api/register", async (route) => {
      await route.fulfill({
        status: 409,
        contentType: "application/json",
        body: JSON.stringify({
          ok: false,
          error: "duplicate_enrollment",
        }),
      });
    });

    await fillValidForm(page);
    await submitForm(page);

    // 仍應留在 /enroll，並顯示 duplicate 文字
    // 注意 /enroll 頁面有多個 alert（Field 的 inline error 也是 alert），用 .first() 過濾掉沒展開的
    const submitAlert = page.locator(
      'div[role="alert"]:has-text("已經報名過")'
    );
    await expect(submitAlert).toBeVisible();
    await expect(page).toHaveURL(/\/enroll(\/)?$/);
  });
});
