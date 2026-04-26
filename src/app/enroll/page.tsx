"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  version: "12hr" | "24hr" | "";
  problem: string;
  source: string;
  company_website: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  version: "",
  problem: "",
  source: "",
  company_website: "",
};

const VERSIONS = [
  { value: "12hr" as const, title: "12hr 版", desc: "2 天 × 6hr，快速入門" },
  { value: "24hr" as const, title: "24hr 版", desc: "4 天 × 6hr，完整實戰" },
];

const SOURCES = [
  "Facebook / IG",
  "LINE 群組",
  "Google 搜尋",
  "朋友推薦",
  "講師社群",
  "其他",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^09\d{8}$|^\+?886\s?9\d{8}$/;

export default function EnrollPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "請填寫姓名";
    if (!EMAIL_RE.test(form.email)) e.email = "Email 格式不正確";
    if (!PHONE_RE.test(form.phone.replace(/\s|-/g, "")))
      e.phone = "請填台灣手機（09 開頭或 +886）";
    if (!form.version) e.version = "請選擇想上哪個版本";
    if (form.problem.trim().length < 10)
      e.problem = "請描述想解決的工作問題（至少 10 字）";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setAttempted(true);
    setError(null);
    if (!isValid) return;
    if (form.company_website) {
      // honeypot tripped — silent success
      router.push("/enroll/thanks");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.replace(/\s|-/g, ""),
          company: form.company.trim(),
          version: form.version,
          problem: form.problem.trim(),
          source: form.source || "",
          user_agent: navigator.userAgent,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: string[];
      };

      if (res.ok && data.ok) {
        router.push("/enroll/thanks");
        return;
      }

      if (res.status === 409 || data.error === "duplicate_enrollment") {
        setError(
          "這個 Email 已經報名過同一個版本了。請直接 LINE 私訊講師確認狀態。"
        );
      } else if (data.errors?.length) {
        setError(`資料有誤（${data.errors.join(", ")}），請檢查後重送。`);
      } else {
        setError(`送出失敗（HTTP ${res.status}），請稍後重試。`);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? `網路錯誤：${err.message}，請稍後重試。`
          : "送出失敗，請稍後重試。"
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#aeaeb2] outline-none transition-colors duration-200";
  const inputIdle = "border-border-light focus:border-[#0071e3]";
  const inputError = "border-[#ff6568] focus:border-[#ff6568]";

  const fieldCls = (key: keyof FormState) =>
    `${inputBase} ${attempted && errors[key] ? inputError : inputIdle}`;

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080F1A] pt-32 pb-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at top, #1a1a4e 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal delay={0}>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">
              FREE ENROLLMENT
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
              免費報名
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-hero-muted sm:text-lg">
              經濟部產業人才投資方案全額補助。
              <br className="hidden sm:inline" />
              填完表單後，講師 24 小時內回覆，確認上課時間與地點。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Form ─────────────────────────────────────────── */}
      <section className="bg-light-bg py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[24px] border border-border-light bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.07)] sm:p-10"
          >
            {/* 姓名 */}
            <Field label="姓名" required error={attempted ? errors.name : undefined}>
              <input
                type="text"
                autoComplete="name"
                className={fieldCls("name")}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="王小明"
              />
            </Field>

            {/* Email */}
            <Field
              label="Email"
              required
              error={attempted ? errors.email : undefined}
            >
              <input
                type="email"
                autoComplete="email"
                inputMode="email"
                className={fieldCls("email")}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
              />
            </Field>

            {/* 手機 */}
            <Field
              label="手機"
              required
              error={attempted ? errors.phone : undefined}
              hint="台灣手機，09 開頭 10 碼"
            >
              <input
                type="tel"
                autoComplete="tel-national"
                inputMode="tel"
                className={fieldCls("phone")}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="0912345678"
              />
            </Field>

            {/* 公司（選填） */}
            <Field label="公司 / 組織" hint="選填">
              <input
                type="text"
                autoComplete="organization"
                className={fieldCls("company")}
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="例如：自營工作室、某某有限公司"
              />
            </Field>

            {/* 版本 */}
            <Field
              label="想上哪個版本"
              required
              error={attempted ? errors.version : undefined}
            >
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {VERSIONS.map((v) => {
                  const checked = form.version === v.value;
                  return (
                    <label
                      key={v.value}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                        checked
                          ? "border-[#0071e3] bg-[#0071e3]/5 shadow-[0_6px_20px_rgba(0,113,227,0.12)]"
                          : "border-border-light bg-white hover:border-[#0071e3]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="version"
                        value={v.value}
                        checked={checked}
                        onChange={() => update("version", v.value)}
                        className="sr-only"
                      />
                      <p
                        className={`text-[15px] font-bold tracking-[-0.02em] ${
                          checked ? "text-[#0071e3]" : "text-[#1d1d1f]"
                        }`}
                      >
                        {v.title}
                      </p>
                      <p className="mt-1 text-[13px] text-[#6e6e73]">
                        {v.desc}
                      </p>
                    </label>
                  );
                })}
              </div>
            </Field>

            {/* 想解決的工作問題 */}
            <Field
              label="想用 AI 解決的工作問題"
              required
              hint="越具體越好，講師會根據內容調整課程內容重點"
              error={attempted ? errors.problem : undefined}
            >
              <textarea
                rows={4}
                className={fieldCls("problem")}
                value={form.problem}
                onChange={(e) => update("problem", e.target.value)}
                placeholder="例如：每天要把蝦皮訂單手動抄到 Excel，想自動化同步；或：想做互動式報價網頁給客戶自己試算..."
              />
            </Field>

            {/* 來源 */}
            <Field label="怎麼知道這門課的？" hint="選填，幫助我們優化宣傳管道">
              <select
                className={fieldCls("source")}
                value={form.source}
                onChange={(e) => update("source", e.target.value)}
              >
                <option value="">請選擇</option>
                {SOURCES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            {/* Honeypot (隱形欄位擋爬蟲) */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={form.company_website}
              onChange={(e) => update("company_website", e.target.value)}
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
              }}
              aria-hidden="true"
            />

            {/* 送出錯誤 */}
            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-[#ff6568]/30 bg-[#ff6568]/5 px-4 py-3 text-[13px] text-[#ff6568]"
              >
                {error}
              </div>
            )}

            {/* 送出按鈕 */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_6px_20px_rgba(0,113,227,0.25)] transition-all duration-200 hover:bg-[#0077ed] hover:scale-[1.015] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#0071e3]/50 disabled:hover:scale-100"
            >
              {submitting ? (
                <>
                  <Spinner />
                  送出中…
                </>
              ) : (
                <>
                  送出報名
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[12px] text-[#6e6e73]">
              送出即表示同意我們透過 Email / 電話聯繫你確認上課資訊。
              我們不會把你的資料給第三方。
            </p>
          </form>

          {/* 下方備援 */}
          <div className="mt-8 text-center text-[13px] text-[#6e6e73]">
            表單送不出？直接加講師 LINE：
            <Link
              href="https://line.me/"
              className="ml-1 font-semibold text-[#0071e3] hover:text-[#0077ed]"
              target="_blank"
              rel="noopener noreferrer"
            >
              @hourjungle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Shared bits ─────────────────────────────────────── */

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-[14px] font-semibold text-[#1d1d1f]">
          {label}
          {required && <span className="ml-1 text-[#ff6568]">*</span>}
        </label>
        {hint && !error && (
          <span className="text-[12px] text-[#aeaeb2]">{hint}</span>
        )}
      </div>
      {children}
      {error && (
        <p className="mt-1.5 text-[12px] text-[#ff6568]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
