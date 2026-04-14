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

const useCases = [
  {
    industry: "電商經營",
    pillClass: "bg-[#0071e3]/10 text-[#0071e3]",
    before:
      "蝦皮有新訂單 → 手動抄到 Excel。客戶 LINE 問有貨嗎 → 去蝦皮後台查庫存再回覆。每月底三個平台手動對帳。",
    after:
      "AI 自動同步蝦皮/LINE/官網訂單與庫存，客戶問就自動回覆即時庫存，月底自動產出對帳報表。",
  },
  {
    industry: "會計 / 稅務",
    pillClass: "bg-[#0071e3]/10 text-[#0071e3]",
    before:
      "做了報價單 PDF 給客戶，客戶說「數字改成 XX 呢？」回去改 Excel、重算、重新輸出、重新寄。來回三次一個下午沒了。",
    after:
      "做一個互動式網頁：客戶自己拉桿調營收，圖表即時算稅額。客戶自己調到滿意，直接成交。",
  },
  {
    industry: "房仲業",
    pillClass: "bg-[#30d158]/10 text-[#30d158]",
    before:
      "Excel 算投報率手動給客戶看。物件介紹只有文字和靜態照片。帶看影片不會拍也不會剪。",
    after:
      "客製化物件分析頁：輸入總價/貸款/租金，即時算投報率。AI 自動生成物件介紹影片和社群素材。",
  },
  {
    industry: "行銷 / 自媒體",
    pillClass: "bg-[#7850ff]/10 text-[#7850ff]",
    before:
      "想做影片行銷但不會 Premiere。社群素材用 Canva 免費版湊合。每篇貼文花 2 小時手動排版。",
    after:
      "AI 虛擬人像直接生成產品介紹影片。批量製作社群素材，品牌視覺自動一致。一篇貼文 10 分鐘搞定。",
  },
  {
    industry: "客服 / LINE OA",
    pillClass: "bg-[#30d158]/10 text-[#30d158]",
    before:
      "LINE 訊息手動回到半夜。客戶問重複問題每次都要重新打字。假日沒人顧，訊息堆到下週一。",
    after:
      "LINE Bot 自動分流：常見問題秒回、複雜問題轉人工。24 小時不漏接，假日也能自動回覆。",
  },
  {
    industry: "管顧 / 事務所",
    pillClass: "bg-[#ff6568]/10 text-[#ff6568]",
    before:
      "企業診斷報告用 Word 一家一家改。提案簡報 PPT 每次都從零開始。想幫客戶做數位轉型但自己也不會。",
    after:
      "模板化報告生成：header/footer 固定，中間依客戶資料自動產出。還能幫客戶建互動式數據儀表板。",
  },
];

const marketStats = [
  {
    value: "92%",
    valueClass: "gradient-text-gold",
    label: "台灣中小企業僅粗淺了解 AI",
    source: "-- 經濟部調查",
  },
  {
    value: "99%",
    valueClass: "gradient-text",
    label: "的人在「撞牆期」就放棄",
    source: "-- AI 使用者旅程研究",
  },
  {
    value: "80/20",
    valueClass: "text-white",
    label: "AI 做了 80%，最後 20% 完成不了",
    source: "-- 全球開發者社群共識",
  },
  {
    value: "$0",
    valueClass: "gradient-text-gold",
    label: "學費 vs 外包網站 NT$30,000+",
    source: "-- 政府全額補助",
  },
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-semibold tracking-[0.1em] uppercase text-hero-muted">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              經濟部認證
            </span>
            {/* Badge: 24hr 完整課程 */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-semibold tracking-[0.1em] uppercase text-hero-muted">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              24hr 完整課程
            </span>
            {/* Badge: 學費 $0 */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-semibold tracking-[0.1em] uppercase text-hero-muted">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
              學費 $0
            </span>
            {/* Badge: 開課時間 */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[12px] font-semibold tracking-[0.1em] text-accent">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" />
              </svg>
              4 月最後一週開課（平日班）
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-black tracking-[-0.03em] text-white leading-[1.08]"
            style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 5rem)" }}
          >
            你的 AI 只會聊天？
            <br />
            <span className="gradient-text-gold">讓它真正動手做事。</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-hero-muted sm:text-lg">
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
              <p className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                24小時
              </p>
              <p className="mt-0.5 text-[13px] text-hero-muted">完整課程</p>
            </div>
            <div>
              <p className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                4天x6hr
              </p>
              <p className="mt-0.5 text-[13px] text-hero-muted">密集實戰</p>
            </div>
            <div>
              <p className="gradient-text-gold text-4xl font-black tracking-[-0.03em]">
                $0
              </p>
              <p className="mt-0.5 text-[13px] text-hero-muted">政府全額補助</p>
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
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#ff6568]">
              PROBLEM
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-light-text sm:text-4xl">
              這些煩惱，你中了幾個？
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[24px] border border-border-light bg-white p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#ff6568]/5">
                  <svg className="h-5 w-5 text-[#ff6568]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </span>
                <p className="text-[15px] leading-relaxed text-[#6e6e73]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. USE CASES -- Before / After scenarios                     */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
              USE CASES
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-light-text sm:text-4xl">
              各行各業，AI 都能幫上忙
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#6e6e73] leading-relaxed">
              不管你是什麼行業，學完後都能立刻應用在工作上。
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-border-light bg-light-bg p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]"
              >
                {/* Industry pill */}
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.1em] uppercase ${uc.pillClass}`}
                >
                  {uc.industry}
                </span>

                {/* Before section */}
                <div className="mt-4 rounded-xl bg-[#ff6568]/5 p-4">
                  <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#ff6568]">
                    以前
                  </p>
                  <p className="text-[13px] leading-relaxed text-[#6e6e73]">
                    {uc.before}
                  </p>
                </div>

                {/* Arrow divider */}
                <div className="flex justify-center py-2">
                  <svg
                    className="h-6 w-6 text-[#6e6e73]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* After section */}
                <div className="rounded-xl bg-[#30d158]/5 p-4">
                  <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#30d158]">
                    學完之後
                  </p>
                  <p className="text-[13px] leading-relaxed text-[#6e6e73]">
                    {uc.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. DATA -- Market statistics                                 */}
      {/* ============================================================ */}
      <section className="bg-hero-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">
              DATA
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              數據會說話
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {marketStats.map((stat, i) => (
              <div key={i} className="glow-card rounded-[24px] p-6 text-center will-change-transform">
                <p className={`text-5xl font-black tracking-[-0.03em] ${stat.valueClass}`}>
                  {stat.value}
                </p>
                <p className="mt-3 text-[13px] leading-snug text-hero-muted">
                  {stat.label}
                </p>
                <p className="mt-1 text-[12px] text-hero-muted/60">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. HIGHLIGHTS -- Why us                                      */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
              WHY US
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-light-text sm:text-4xl">
              為什麼選這堂課？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#6e6e73] leading-relaxed">
              這不是聽完就忘的講座，是讓你立刻帶走成品的實戰工作坊。
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-transparent bg-light-bg p-8 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:border-[#0071e3]/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#0071e3]/10 text-[#0071e3] mb-6">
                  {h.icon}
                </div>
                <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#1d1d1f]">{h.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. INSTRUCTOR PREVIEW -- Quote + stats                       */}
      {/* ============================================================ */}
      <section className="bg-light-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
              INSTRUCTOR
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-light-text sm:text-4xl">
              講師親身驗證，不是紙上談兵
            </h2>
          </div>

          <div className="mt-14">
            <div className="mx-auto max-w-3xl rounded-[24px] border border-border-light bg-white p-8 sm:p-12 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]">
              <blockquote className="text-xl font-bold leading-relaxed text-light-text sm:text-2xl">
                &ldquo;我現在同時是兩間公司的負責人，做三份工作，維持不動產投資人的身份，還在大學和政府計畫擔任講師。
                <span className="gradient-text-gold">
                  一天只工作四小時，一週工作四天。90% 的工作都是用口述完成的。
                </span>
                &rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0071e3] to-[#005bb5] text-xl font-black text-white">
                  戴
                </div>
                <div>
                  <p className="text-[17px] font-bold tracking-[-0.02em] text-[#1d1d1f]">戴豪廷</p>
                  <p className="text-[13px] text-[#6e6e73]">
                    AI 自動化講師 / 兩間公司負責人
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-[#0071e3]">2</p>
                  <p className="mt-1 text-[12px] text-[#6e6e73]">
                    間公司負責人
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-[#0071e3]">3</p>
                  <p className="mt-1 text-[12px] text-[#6e6e73]">
                    份工作同時進行
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-[#0071e3]">4hr</p>
                  <p className="mt-1 text-[12px] text-[#6e6e73]">
                    每日工作時數
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-[#0071e3]">90%</p>
                  <p className="mt-1 text-[12px] text-[#6e6e73]">
                    口述完成工作
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/instructors"
                  className="inline-flex cursor-pointer items-center gap-1 text-[13px] font-semibold text-[#0071e3] transition-colors duration-300 hover:text-[#0077ed]"
                >
                  看完整講師介紹
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. OUTCOMES -- What you take home                            */}
      {/* ============================================================ */}
      <section className="bg-hero-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0077ed]">
              OUTCOMES
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              上完課你會帶走什麼？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-hero-muted leading-relaxed">
              不是證書，是可以立刻用在工作上的成品。
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o.num}
                className="glow-card rounded-[24px] p-6 will-change-transform"
              >
                <div className="flex items-start gap-5">
                  <span className="gradient-text text-5xl font-black leading-none select-none tracking-[-0.03em]">
                    {o.num}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[17px] font-bold tracking-[-0.02em] text-white">{o.label}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-hero-muted">{o.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8. COST COMPARISON                                           */}
      {/* ============================================================ */}
      <section className="bg-light-bg py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
              COST
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-light-text sm:text-4xl">
              算一筆帳
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Option A -- 工讀生 */}
            <div className="rounded-[24px] border border-border-light bg-white p-8 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]">
              <p className="text-[13px] font-medium text-[#6e6e73]">請一個工讀生</p>
              <p className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#1d1d1f] sm:text-4xl">
                NT$8,000
                <span className="text-lg font-normal text-[#6e6e73]">/月</span>
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-[#6e6e73]">
                每天 4 小時，會請假、會犯錯
              </p>
            </div>

            {/* Option B -- AI 工具 */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0071e3] to-[#005bb5] p-8 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,113,227,0.3)]">
              {/* 推薦 badge */}
              <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-0.5 text-[12px] font-semibold text-white backdrop-blur-sm">
                推薦
              </span>
              <p className="text-[13px] font-medium text-white/80">AI 工具訂閱</p>
              <p className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                NT$1,200
                <span className="text-lg font-normal text-white/80">/月</span>
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-white/80">
                全年無休、不請假、不犯人為錯誤
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-[#6e6e73]">
            學會之後，兩個 AI 訂閱加起來每月約 NT$1,200（約 $40 美金），就能取代大量重複性工作。
            <strong className="text-[#1d1d1f]"> 而這堂課本身——學費 $0。</strong>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9. FINAL CTA                                                 */}
      {/* ============================================================ */}
      <section
        className="py-20 sm:py-28"
        style={{ background: "radial-gradient(ellipse at center, #1a1a4e 0%, #080F1A 60%)" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mx-auto max-w-2xl font-black leading-[1.15] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
          >
            兩天翻過最陡的坡，
            <br />
            <span className="gradient-text">之後一馬平川。</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-hero-muted sm:text-lg">
            政府出錢讓你學，學費 $0。但你帶走的是一個全新的工作方式。
          </p>
          <div className="mt-10">
            <CTAButton size="lg" variant="primary" label="免費報名" />
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] text-hero-muted">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-[#30d158]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              經濟部補助
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-[#30d158]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              名額有限
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-[#30d158]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
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
