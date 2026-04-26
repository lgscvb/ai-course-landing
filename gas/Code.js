/**
 * AI 數位素養課程 - 報名表後端
 * 部署模式：Web App（Anyone, Anonymous）
 *
 * 預設 SHEET_ID 和 NOTIFY_EMAIL 已在下方常數。
 * 要改用其他 Sheet 或收件人，去 Apps Script 編輯器 → 專案設定（齒輪）→
 * 指令碼屬性 新增 SHEET_ID / NOTIFY_EMAIL（會覆蓋常數預設值）。
 */

// 預設值（由工具鏈自動建立；可被 Script Properties 覆蓋）
const DEFAULT_SHEET_ID = '1oRMLo5chl5fJhYuX7Dmbwyr5Nq0PQpaxbR-rmOjHK1c';
const DEFAULT_NOTIFY_EMAIL = 'lgscvbatter@gmail.com';

const SHEET_NAME = '報名';
const REQUIRED_FIELDS = ['name', 'email', 'phone', 'version', 'problem'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^09\d{8}$|^\+?886\s?9\d{8}$/;

/**
 * 前端 POST 入口。
 * 為了避開 CORS preflight，前端會用 `Content-Type: text/plain`，body 是 JSON 字串。
 */
function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || '{}');

    // Honeypot
    if (payload.company_website) {
      return jsonResponse({ ok: true, bot: true });
    }

    const errors = validate(payload);
    if (errors.length) {
      return jsonResponse({ ok: false, errors }, 400);
    }

    const row = appendRow(payload);
    notifyByEmail(payload);

    return jsonResponse({ ok: true, row });
  } catch (err) {
    console.error('doPost error', err);
    return jsonResponse({ ok: false, error: String(err && err.message || err) }, 500);
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    service: 'ai-course-landing enrollment endpoint',
    hint: 'POST JSON here',
  });
}

/* ─── helpers ───────────────────────────────────────── */

function validate(p) {
  const errs = [];
  for (const k of REQUIRED_FIELDS) {
    if (!p[k] || String(p[k]).trim() === '') errs.push(`${k} required`);
  }
  if (p.email && !EMAIL_RE.test(String(p.email).trim())) {
    errs.push('email invalid');
  }
  if (p.phone && !PHONE_RE.test(String(p.phone).replace(/\s|-/g, ''))) {
    errs.push('phone invalid');
  }
  if (p.problem && String(p.problem).trim().length < 10) {
    errs.push('problem too short');
  }
  if (p.version && !['12hr', '24hr'].includes(p.version)) {
    errs.push('version invalid');
  }
  return errs;
}

function appendRow(p) {
  const sheetId = getProp('SHEET_ID', DEFAULT_SHEET_ID);
  const ss = SpreadsheetApp.openById(sheetId);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      '時間', '姓名', 'Email', '手機', '公司', '版本', '想解決的問題',
      '來源', '送出時間(ISO)', 'User-Agent',
    ]);
    sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  const row = [
    new Date(),
    p.name || '',
    p.email || '',
    p.phone || '',
    p.company || '',
    p.version || '',
    p.problem || '',
    p.source || '',
    p.submitted_at || '',
    p.user_agent || '',
  ];
  sheet.appendRow(row);
  return sheet.getLastRow();
}

function notifyByEmail(p) {
  const to = getProp('NOTIFY_EMAIL', DEFAULT_NOTIFY_EMAIL);
  if (!to) return;
  const subject = `[AI課程報名] ${p.name} / ${p.version}`;
  const body = [
    '新的 AI 數位素養課程報名：',
    '',
    `姓名：${p.name}`,
    `Email：${p.email}`,
    `手機：${p.phone}`,
    `公司：${p.company || '(未填)'}`,
    `版本：${p.version}`,
    `來源：${p.source || '(未填)'}`,
    '',
    '想解決的問題：',
    p.problem,
    '',
    `送出時間：${p.submitted_at || new Date().toISOString()}`,
  ].join('\n');

  MailApp.sendEmail({ to, subject, body });
}

function getProp(key, fallback) {
  const v = PropertiesService.getScriptProperties().getProperty(key);
  if (v) return v;
  if (fallback === undefined) {
    throw new Error(`Missing Script Property: ${key}`);
  }
  return fallback;
}

function jsonResponse(obj, status) {
  // Apps Script ContentService 不能設 HTTP status code；status 傳回在 JSON body 內
  const body = Object.assign({ status: status || 200 }, obj);
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ─── manual test helper（clasp push 後在編輯器按執行） ─── */

function _testAppend() {
  const fake = {
    name: '測試用戶',
    email: 'test@example.com',
    phone: '0912345678',
    company: '測試公司',
    version: '12hr',
    problem: '想要測試報名系統是否能正常運作並寫入試算表。',
    source: 'Google 搜尋',
    submitted_at: new Date().toISOString(),
    user_agent: 'manual-test',
  };
  const row = appendRow(fake);
  console.log('appended row', row);
}
