import Link from "next/link";

export const metadata = {
  title: "報名成功",
};

const NEXT_STEPS = [
  {
    num: "01",
    title: "24 小時內收到確認信",
    desc: "講師親自回信，附上課地點、時間、攜帶物品清單。沒收到請先檢查垃圾信匣。",
  },
  {
    num: "02",
    title: "加入 LINE OA 課前群",
    desc: "群組內會同步補助資格審核進度、課前預習資源、課後學員交流。",
  },
  {
    num: "03",
    title: "準備好自己的 MacBook 或 Windows 筆電",
    desc: "不用預裝任何軟體，課程第一小時會帶你一起把 Claude Code 安裝好。",
  },
];

export default function ThanksPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080F1A] pt-32 pb-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at top, #1a1a4e 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Check icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#30d158]/10 ring-8 ring-[#30d158]/5">
            <svg
              className="h-8 w-8 text-[#30d158]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#30d158]">
            ENROLLMENT RECEIVED
          </p>
          <h1 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            報名送出成功！
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-hero-muted sm:text-lg">
            感謝你的報名，我們已收到資料。
            <br className="hidden sm:inline" />
            講師會在 24 小時內親自回信確認。
          </p>
        </div>
      </section>

      {/* ─── Next steps ──────────────────────────────────── */}
      <section className="bg-light-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
              WHAT&apos;S NEXT
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-light-text sm:text-4xl">
              接下來會發生什麼
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {NEXT_STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-[24px] border border-border-light bg-white p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]"
              >
                <span className="gradient-text text-5xl font-black leading-none tracking-[-0.03em] select-none">
                  {step.num}
                </span>
                <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-light bg-white px-6 py-3 text-[14px] font-medium text-[#1d1d1f] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              回首頁
            </Link>
            <Link
              href="/syllabus"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[#0077ed] hover:scale-[1.025]"
            >
              先看課程大綱
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
