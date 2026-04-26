@AGENTS.md

# ai-course-landing

## 專案概述

AI 數位素養課程招商 landing page。經濟部產業人才投資方案全額補助（學費 $0）的 AI + Claude Code 實戰工作坊對外招生頁。

**命名歷史注意**：本地資料夾原為 `lico-website` 易與離碼公司官網 repo 混淆，已於 2026-04-20 改名為 `ai-course-landing` 與 GitHub 對齊。CF Pages 專案名至今仍是 `lico-website`（CF 不支援 rename）。

## 重要路徑

| 項目 | 位置 |
|------|------|
| 本地 | `~/Desktop/code/ai-course-landing/` |
| GitHub | `github.com/lgscvb/ai-course-landing` |
| CF Pages 專案 | `lico-website`（歷史命名） |
| 預設部署 URL | `https://lico-website.pages.dev/` |
| 計畫正式網域 | `https://ai.yourspce.org/`（待切 DNS） |
| 上位專案筆記 | `~/Documents/tai/專案/AI數位素養課程/AI數位素養課程-網站改版計畫.md` |

## 技術棧

- Next.js 16.2.3 + React 19.2.4（App Router）— 詳見 AGENTS.md 的 Next.js 16 breaking changes 提醒
- TypeScript 5 strict
- Tailwind CSS v4（透過 `@tailwindcss/postcss`）
- `output: "export"` 靜態匯出 → Cloudflare Pages
- 報名後端：**Cloudflare Pages Functions + D1**（建置中）

## 路由結構

```
/                        招商首頁
/enroll                  自建報名表單
/enroll/thanks           報名成功頁
/admin                   後台列表頁（Basic Auth，待建）
/syllabus                課程大綱
/instructors             講師介紹
/faq                     常見問答

functions/api/register   POST 收單 → 驗證 → insert D1（待建）
functions/api/admin      GET 讀列表 / 匯出 CSV（待建）
```

## 設計系統（Lico Design System）

Tokens 定義在 [src/app/globals.css](src/app/globals.css)，任何新區塊必須沿用：

- **配色**：`--c-bg #f5f5f7` / `--c-blue #0071e3` / `--c-purple #7850ff` / `.gradient-text` 漸層
- **圓角**：24 / 16 / 10 三階
- **陰影**：hover `0 20px 50px rgba(0,0,0,0.11)`
- **Easing**：`cubic-bezier(0.16,1,0.3,1)` 全站統一
- **字體**：Inter + Noto Sans TC
- **風格**：Apple 白底風，不用 emoji（改用 inline SVG Heroicons）
- **動畫**：IntersectionObserver scroll reveal + Hero stagger + card hover + number counter

## 開發指令

```bash
cd ~/Desktop/code/ai-course-landing
npm install
npm run dev          # http://localhost:3000
npm run build        # → out/
npm run lint

# CF Pages Functions + D1 本機完整跑
npx wrangler pages dev ./out --d1 DB=ai-course-enrollments
```

## 部署

**禁本機 `wrangler deploy`**（會在本機留大量 docker image，參考全域 CLAUDE.md）。

```bash
git push origin main    # → CF Pages Builds 自動 build + deploy
```

CF Pages build config：
- Build command：`npm run build`
- Build output：`out/`
- Functions：自動掃 `functions/` 目錄

## 環境變數

`.env.local`（git ignored）本機用；CF Pages dashboard 設 production：

| 變數 | 用途 |
|------|------|
| `ADMIN_PASSWORD` | `/admin` 頁 Basic Auth |
| `NOTIFY_EMAIL` | 報名通知信收件人（接 Resend / CF Email 後用） |

## 相關資源

- **CF API Token**：macOS Keychain `service=cf-api-token-r2, account=lgscvb`。`~/.zshrc` 已動態 export 為 `CLOUDFLARE_API_TOKEN`
- **D1 資料庫**：`ai-course-enrollments`（待建）
- **舊靜態教案站（備查）**：`~/Desktop/code/ai-literacy-syllabus/` — 給合作講師看的教案，非本站範圍
- **gas 殘局**：`gas/` 目錄保留當歷史 reference（Apps Script 後端前一版方案，已棄用）

## 開發規範

- 新區塊必須沿用 Lico DS tokens，不自定顏色 / 圓角 / 陰影
- CTA 按鈕一律 `<Link href="/enroll">` 或 `CTAButton.tsx`，**不寫死 `"#"`**
- 長頁面章節用 `id` + scroll-spy，日後拆子路由時保 URL 穩定
- TypeScript strict，不用 `any`
