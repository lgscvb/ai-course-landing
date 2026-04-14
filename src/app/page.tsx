import CTAButton from "@/components/CTAButton";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const painPoints = [
  "買了 ChatGPT 只會聊天，不知道怎麼用在工作上？",
  "AI 問你「技術棧是什麼」，你完全沒概念？",
  "蝦皮、LINE、官網三個平台手動對帳到崩潰？",
  "想做影片行銷，但不會拍也不會剪？",
];

const highlights = [
  {
    title: "學費 $0",
    desc: "經濟部產業人才投資方案全額補助，報名零門檻。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "帶走成品",
    desc: "不只學觀念——上完課帶走公司網站、知識管理系統、AI 操作手冊。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "不用寫程式",
    desc: "用嘴巴說、AI 動手做。講師 90% 的工作都靠口述完成。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
];

const outcomes = [
  { label: "企業官網", desc: "從零到上線，有網址、別人打得開" },
  { label: "知識管理系統", desc: "Obsidian + AI 建立公司知識庫" },
  { label: "AI 自動回覆", desc: "LINE OA 智慧分流、自動回覆客戶" },
  { label: "AI 影片製作", desc: "虛擬人像、影片生成、社群素材" },
];

/* ------------------------------------------------------------------ */
/*  Inline SVG helpers                                                 */
/* ------------------------------------------------------------------ */

function AlertIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/*  1. Hero                                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-dark-bg pt-28 pb-20 sm:pb-28 lg:pb-32">
        {/* subtle grid texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              經濟部全額補助
            </span>

            {/* Headline */}
            <h1
              className="font-black tracking-tight text-white leading-[1.1]"
              style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)" }}
            >
              你的 AI 只會聊天？
              <br />
              <span className="text-cta">讓它真正動手做事。</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              24 小時實戰課程，非工程師也能學會用 AI 自動化業務流程、建立網站、製作影片。
              <br />
              <strong className="text-white">政府出錢、免費上課、現場帶走成品。</strong>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton size="lg" variant="primary" label="免費報名" />
              <CTAButton size="lg" variant="secondary" label="看課程大綱" href="/syllabus" />
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
              {[
                { value: "24小時", label: "完整課程" },
                { value: "4天x6小時", label: "密集實戰" },
                { value: "學費$0", label: "政府全額補助" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. Pain Points                                               */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-black tracking-tight text-text"
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
          >
            這些煩惱，你中了幾個？
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
                  <AlertIcon />
                </span>
                <p className="text-[0.95rem] leading-relaxed text-text-secondary">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. Highlights                                                */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-black tracking-tight text-text"
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
          >
            為什麼選這堂課？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-secondary">
            這不是聽完就忘的講座，是讓你立刻帶走成品的實戰工作坊。
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-white p-8 text-center transition-shadow duration-200 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  {h.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-text">{h.title}</h3>
                <p className="mt-2 leading-relaxed text-text-secondary">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. Outcomes                                                  */}
      {/* ============================================================ */}
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-black tracking-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
          >
            上完課你會帶走什麼？
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cta/20 text-lg font-black text-cta">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{o.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. Cost Comparison                                           */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary-light to-blue-50 p-8 sm:p-12">
            <h2
              className="font-black tracking-tight text-text"
              style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
            >
              算一筆帳
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Option A */}
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-sm font-medium text-text-muted">請一個工讀生</p>
                <p className="mt-2 text-3xl font-black tracking-tight text-text sm:text-4xl">
                  NT$8,000
                  <span className="text-lg font-normal text-text-muted">/月</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  每天 4 小時，會請假、會犯錯
                </p>
              </div>

              {/* Option B */}
              <div className="rounded-2xl bg-primary p-6 text-white">
                <p className="text-sm font-medium text-blue-200">AI 工具訂閱</p>
                <p className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  NT$1,200
                  <span className="text-lg font-normal text-blue-200">/月</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  全年無休、不請假、不犯人為錯誤
                </p>
              </div>
            </div>

            <p className="mt-8 leading-relaxed text-text-secondary">
              學會之後，兩個 AI 訂閱加起來每月約 NT$1,200（約 $40 美金），就能取代大量重複性工作。
              <strong className="text-text"> 而這堂課本身——學費 $0。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. Final CTA                                                 */}
      {/* ============================================================ */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mx-auto max-w-2xl font-black leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
          >
            兩天翻過最陡的坡，
            <br />
            之後一馬平川。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
            政府出錢讓你學，學費 $0。但你帶走的是一個全新的工作方式。
          </p>
          <div className="mt-10">
            <CTAButton size="lg" variant="primary" label="免費報名" className="bg-cta hover:bg-cta-dark" />
          </div>
        </div>
      </section>
    </>
  );
}
