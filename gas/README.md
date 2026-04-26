# Apps Script 後端 — 報名表收單（已棄用）

> ⚠️ **DEPRECATED（2026-04-20）**
>
> 此目錄為早期實驗的後端方案，**已停用**。正式後端改用 Cloudflare Pages Functions + D1，程式碼在 [`functions/api/`](../functions/api/)、schema 在 [`migrations/`](../migrations/)。
>
> 棄用原因：Google Sheet 跨帳號擁有權、Apps Script Web App 的 access level 設定卡關、Drive API 啟用流程過長。CF 路線同源同部署、無 OAuth 障礙、e2e 全綠。
>
> 目錄保留當歷史參考，**請勿在新流程引用**。

前端 `/enroll` 表單送出後，打到這個 Apps Script Web App，會把資料寫到 Google Sheet 並寄通知信。

## 一次性設定

### 1. 裝 clasp

```bash
npm install -g @google/clasp
```

### 2. 啟用 Apps Script API

打開 <https://script.google.com/home/usersettings>，把「Google Apps Script API」切到 **On**。

### 3. 準備 Google Sheet

手動建一個空的 Google Sheet，複製網址中的 ID（`/d/<這段>/edit`）。
程式第一次執行時會自動建立「報名」分頁並加上標題列。

### 4. clasp 登入 + 建立專案

在本目錄（`gas/`）下：

```bash
cd gas/
clasp login                              # 開瀏覽器 OAuth
clasp create --type standalone --title "AI 課程報名 - 後端"
```

`clasp create` 會產出 `.clasp.json`（這個檔案**不要 commit**，已在 .gitignore 內）。

### 5. 推程式碼

```bash
clasp push -f
```

### 6. 設定 Script Properties（金鑰不進 git）

打開 Apps Script 編輯器：

```bash
clasp open-script
```

左側齒輪「專案設定」→ **指令碼屬性**，新增兩筆：

| 屬性名稱 | 值 |
|----------|-----|
| `SHEET_ID` | 剛剛建的 Google Sheet ID |
| `NOTIFY_EMAIL` | 收報名通知的信箱（可逗號分隔多個） |

### 7. 第一次授權（執行測試函式）

編輯器頂端的函式選單選 `_testAppend` → 按「執行」→ Google 會跳 OAuth 授權（你需要同意 Spreadsheet + Mail scope）→ 執行後去 Google Sheet 看有沒有出現「測試用戶」那一列。

### 8. 部署 Web App

`clasp deploy --description "v1"` 或編輯器右上角「部署 → 新增部署」：

- 類型：**網頁應用程式**
- 執行者：**我（你的帳號）**
- 誰可以存取：**任何人**（匿名可打）

部署完成會給你一個 URL，形如：
```
https://script.google.com/macros/s/AKfyc...xyz/exec
```

### 9. 設定前端環境變數

在 Cloudflare Pages dashboard → 本專案 → Settings → Environment variables：

```
NEXT_PUBLIC_ENROLL_ENDPOINT = https://script.google.com/macros/s/AKfyc...xyz/exec
```

本機開發時，在專案根目錄建 `.env.local`：

```
NEXT_PUBLIC_ENROLL_ENDPOINT=https://script.google.com/macros/s/AKfyc...xyz/exec
```

## 後續改動流程

```bash
cd gas/
# 改 Code.js...
clasp push -f
# 如果改了 doPost 的邏輯，需要「管理部署 → 新增版本」才會生效
clasp deploy --description "v2"
```

## CORS 備忘

Apps Script Web App 不支援 OPTIONS preflight。
前端因此用 `Content-Type: text/plain;charset=utf-8`、body 裡塞 JSON 字串，
後端 `JSON.parse(e.postData.contents)` 解析。不要改回 `application/json`，否則瀏覽器會送 preflight 直接 fail。

## 驗證 checklist

- [ ] Sheet 自動建了「報名」分頁且有標題列
- [ ] `_testAppend` 執行後 Sheet 多一列
- [ ] 部署 URL 用 curl 打，回 `{"ok":true, ...}`：
  ```bash
  curl -X POST "$ENDPOINT" \
    -H 'Content-Type: text/plain;charset=utf-8' \
    -d '{"name":"curl測試","email":"c@x.com","phone":"0912345678","version":"12hr","problem":"用 curl 測試從命令列送出報名看會不會寫進試算表。"}'
  ```
- [ ] 對應的 `NOTIFY_EMAIL` 收到通知信
- [ ] 前端 `/enroll` 頁填完能送出，跳 `/enroll/thanks`
