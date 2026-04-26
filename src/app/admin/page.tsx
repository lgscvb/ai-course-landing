"use client";

import { useEffect, useState } from "react";

type Row = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  version: string;
  problem: string;
  source: string | null;
  status: string;
};

type ListResponse = { ok: true; count: number; rows: Row[] };

export default function AdminPage() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin?limit=500", {
        credentials: "include",
        cache: "no-store",
      });
      if (res.status === 401) {
        // Browser 會自動 prompt Basic Auth；prompt 取消後到這裡
        setError("需要管理員帳密。請重新整理頁面後在彈窗輸入。");
        return;
      }
      if (!res.ok) {
        setError(`HTTP ${res.status}`);
        return;
      }
      const data = (await res.json()) as ListResponse;
      setRows(data.rows);
    } catch (e) {
      setError(e instanceof Error ? e.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const total = rows?.length ?? 0;
  const v12 = rows?.filter((r) => r.version === "12hr").length ?? 0;
  const v24 = rows?.filter((r) => r.version === "24hr").length ?? 0;
  const newCount = rows?.filter((r) => r.status === "new").length ?? 0;

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="bg-[#080F1A] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">
                ADMIN
              </p>
              <h1 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                報名後台
              </h1>
              <p className="mt-2 text-[14px] text-hero-muted">
                受 Basic Auth 保護。資料來源：D1 `ai-course-enrollments`
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={load}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-white/10"
              >
                重新整理
              </button>
              <a
                href="/api/admin?format=csv"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#0077ed] hover:scale-[1.025]"
              >
                匯出 CSV
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "總報名數", value: total, color: "text-white" },
              { label: "12hr 班", value: v12, color: "text-accent" },
              { label: "24hr 班", value: v24, color: "text-[#7850ff]" },
              { label: "未聯絡", value: newCount, color: "text-[#30d158]" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
              >
                <p
                  className={`text-3xl font-black tracking-[-0.03em] ${s.color}`}
                >
                  {loading ? "—" : s.value}
                </p>
                <p className="mt-1 text-[12px] text-hero-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Table ────────────────────────────────────── */}
      <section className="bg-light-bg py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {error && (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-[#ff6568]/30 bg-[#ff6568]/5 px-4 py-3 text-[14px] text-[#ff6568]"
            >
              {error}
            </div>
          )}

          {loading && !rows && (
            <div className="rounded-[20px] border border-border-light bg-white p-10 text-center text-[14px] text-[#6e6e73]">
              讀取中…
            </div>
          )}

          {rows && rows.length === 0 && (
            <div className="rounded-[20px] border border-border-light bg-white p-10 text-center text-[14px] text-[#6e6e73]">
              還沒有報名資料。
            </div>
          )}

          {rows && rows.length > 0 && (
            <div className="overflow-x-auto rounded-[20px] border border-border-light bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
              <table className="w-full text-[13px]">
                <thead className="bg-[#f5f5f7] text-[#6e6e73]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">時間</th>
                    <th className="px-4 py-3 text-left font-semibold">姓名</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">手機</th>
                    <th className="px-4 py-3 text-left font-semibold">公司</th>
                    <th className="px-4 py-3 text-left font-semibold">版本</th>
                    <th className="px-4 py-3 text-left font-semibold">問題</th>
                    <th className="px-4 py-3 text-left font-semibold">來源</th>
                    <th className="px-4 py-3 text-left font-semibold">狀態</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.id}
                      className="border-t border-border-light hover:bg-[#0071e3]/[0.02]"
                    >
                      <td className="whitespace-nowrap px-4 py-3 text-[#6e6e73]">
                        {new Date(r.created_at + "Z").toLocaleString("zh-TW", {
                          timeZone: "Asia/Taipei",
                          hour12: false,
                        })}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#1d1d1f]">
                        {r.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-[#0071e3]">
                        <a href={`mailto:${r.email}`}>{r.email}</a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-[#0071e3]">
                        <a href={`tel:${r.phone}`}>{r.phone}</a>
                      </td>
                      <td className="px-4 py-3 text-[#6e6e73]">
                        {r.company || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                            r.version === "12hr"
                              ? "bg-[#0071e3]/10 text-[#0071e3]"
                              : "bg-[#7850ff]/10 text-[#7850ff]"
                          }`}
                        >
                          {r.version}
                        </span>
                      </td>
                      <td className="max-w-md px-4 py-3 text-[#6e6e73]">
                        <span className="line-clamp-2">{r.problem}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-[#6e6e73]">
                        {r.source || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            r.status === "new"
                              ? "bg-[#30d158]/10 text-[#30d158]"
                              : "bg-[#aeaeb2]/10 text-[#6e6e73]"
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
