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
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "帶走成品",
    desc: "不只學觀念——上完課帶走公司網站、知識管理系統、AI 操作手冊。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "不用寫程式",
    desc: "用嘴巴說、AI 動手做。講師 90% 的工作都靠口述完成。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
];

const outcomes = [
  { num: "01", label: "企業官網", desc: "從零到上線，有網址、別人打得開的正式網站。" },
  { num: "02", label: "知識管理系統", desc: "Obsidian + AI 建立公司知識庫，讓知識不再只在老闆腦袋裡。" },
  { num: "03", label: "AI 自動回覆", desc: "LINE OA 智慧分流、自動回覆客戶，24 小時不漏接。" },
  { num: "04", label: "AI 影片製作", desc: "虛擬人像、影片生成、社群素材，不用拍也不用剪。" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/*  1. HERO -- Full viewport dark                                */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden pt-32 pb-24"
        style={{ background: "radial-gradient(ellipse at top, #1a1a4e 0%, #080F1A 50%)" }}
      >
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Trust badge row */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            {/* Badge: 經濟部認證 */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-hero-muted">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              經濟部認證
            </span>
            {/* Badge: 24hr 完整課程 */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-hero-muted">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              24hr 完整課程
            </span>
            {/* Badge: 學費 $0 */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-hero-muted">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
              學費 $0
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-black tracking-tight text-white leading-[1.08]"
            style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 5rem)" }}
          >
            你的 AI 只會聊天？
            <br />
            <span className="gradient-text-gold">讓它真正動手做事。</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted sm:text-xl">
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
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                24小時
              </p>
              <p className="mt-0.5 text-sm text-hero-muted">完整課程</p>
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                4天x6hr
              </p>
              <p className="mt-0.5 text-sm text-hero-muted">密集實戰</p>
            </div>
            <div>
              <p className="gradient-text-gold text-4xl font-black tracking-tight">
                $0
              </p>
              <p className="mt-0.5 text-sm text-hero-muted">政府全額補助</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. PAIN POINTS                                               */}
      {/* ============================================================ */}
      <section className="bg-light-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              PROBLEM
            </p>
            <h2 className="text-3xl font-black tracking-tight text-light-text sm:text-4xl">
              這些煩惱，你中了幾個？
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
                  <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </span>
                <p className="text-[0.95rem] leading-relaxed text-light-text-secondary">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. HIGHLIGHTS -- Why us                                      */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              WHY US
            </p>
            <h2 className="text-3xl font-black tracking-tight text-light-text sm:text-4xl">
              為什麼選這堂課？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-light-text-secondary">
              這不是聽完就忘的講座，是讓你立刻帶走成品的實戰工作坊。
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-2xl border border-transparent bg-light-bg p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                  {h.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-light-text">{h.title}</h3>
                <p className="mt-2 leading-relaxed text-light-text-secondary">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. OUTCOMES -- What you take home                            */}
      {/* ============================================================ */}
      <section className="bg-hero-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
              OUTCOMES
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              上完課你會帶走什麼？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-hero-muted">
              不是證書，是可以立刻用在工作上的成品。
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o.num}
                className="glow-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-5">
                  <span className="gradient-text text-5xl font-black leading-none select-none">
                    {o.num}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-white">{o.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-hero-muted">{o.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. COST COMPARISON                                           */}
      {/* ============================================================ */}
      <section className="bg-light-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              COST
            </p>
            <h2 className="text-3xl font-black tracking-tight text-light-text sm:text-4xl">
              算一筆帳
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Option A -- 工讀生 */}
            <div className="rounded-2xl border border-border-light bg-white p-8">
              <p className="text-sm font-medium text-light-text-secondary">請一個工讀生</p>
              <p className="mt-3 text-3xl font-black tracking-tight text-light-text sm:text-4xl">
                NT$8,000
                <span className="text-lg font-normal text-light-text-secondary">/月</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-light-text-secondary">
                每天 4 小時，會請假、會犯錯
              </p>
            </div>

            {/* Option B -- AI 工具 */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-indigo-700 p-8 text-white">
              {/* 推薦 badge */}
              <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
                推薦
              </span>
              <p className="text-sm font-medium text-white/80">AI 工具訂閱</p>
              <p className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                NT$1,200
                <span className="text-lg font-normal text-white/80">/月</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                全年無休、不請假、不犯人為錯誤
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-light-text-secondary">
            學會之後，兩個 AI 訂閱加起來每月約 NT$1,200（約 $40 美金），就能取代大量重複性工作。
            <strong className="text-light-text"> 而這堂課本身——學費 $0。</strong>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. FINAL CTA                                                 */}
      {/* ============================================================ */}
      <section
        className="py-20 sm:py-28"
        style={{ background: "radial-gradient(ellipse at center, #1a1a4e 0%, #080F1A 60%)" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mx-auto max-w-2xl font-black leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
          >
            兩天翻過最陡的坡，
            <br />
            <span className="gradient-text">之後一馬平川。</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-hero-muted">
            政府出錢讓你學，學費 $0。但你帶走的是一個全新的工作方式。
          </p>
          <div className="mt-10">
            <CTAButton size="lg" variant="primary" label="免費報名" />
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-hero-muted">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              經濟部補助
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              名額有限
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              現場帶走成品
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
