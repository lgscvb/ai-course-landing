import CTAButton from "@/components/CTAButton";

const highlights = [
  {
    icon: "💰",
    title: "學費 $0",
    desc: "經濟部產業人才投資方案全額補助，報名零門檻。",
  },
  {
    icon: "🎯",
    title: "帶走成品",
    desc: "不只學觀念——上完課帶走公司網站、知識管理系統、AI 操作手冊。",
  },
  {
    icon: "🗣️",
    title: "不用寫程式",
    desc: "用嘴巴說、AI 動手做。講師 90% 的工作都靠口述完成。",
  },
];

const painPoints = [
  "買了 ChatGPT 只會聊天，不知道怎麼用在工作上？",
  "AI 問你「技術棧是什麼」，你完全沒概念？",
  "蝦皮、LINE、官網三個平台手動對帳到崩潰？",
  "想做影片行銷，但不會拍也不會剪？",
];

const outcomes = [
  { label: "企業官網", desc: "從零到上線，有網址、別人打得開" },
  { label: "知識管理系統", desc: "Obsidian + AI 建立公司知識庫" },
  { label: "AI 自動回覆", desc: "LINE OA 智慧分流、自動回覆客戶" },
  { label: "AI 影片製作", desc: "虛擬人像、影片生成、社群素材" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm text-indigo-200 backdrop-blur-sm">
              經濟部產業人才投資方案 · 全額補助
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              你的 AI 只會聊天？
              <br />
              <span className="text-amber-400">讓它真正動手做事。</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-indigo-100 leading-relaxed max-w-2xl">
              24 小時實戰課程，非工程師也能學會用 AI 自動化業務流程、建立網站、製作影片。
              <br />
              <strong className="text-white">政府出錢、免費上課、現場帶走成品。</strong>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" variant="primary" />
              <CTAButton size="lg" variant="outline" href="/syllabus" />
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-indigo-200">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                24 小時完整課程
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                4 天 x 6 小時
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                學費 $0
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">這些煩惱，你中了幾個？</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                <span className="mt-0.5 flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">為什麼選這堂課？</h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            這不是聽完就忘的講座，是讓你立刻帶走成品的實戰工作坊。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="card-hover rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <div className="text-5xl mb-4">{h.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="bg-indigo-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white mb-4">上完課你會帶走什麼？</h2>
          <p className="text-center text-indigo-200 mb-12 max-w-xl mx-auto">
            不是證書，是可以立刻用在工作上的成品。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <div className="h-10 w-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 text-lg font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{o.label}</h3>
                <p className="text-sm text-indigo-200 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">算一筆帳</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">請一個工讀生</p>
                <p className="text-3xl font-black text-gray-900">NT$8,000<span className="text-lg font-normal text-gray-500">/月</span></p>
                <p className="text-sm text-gray-500 mt-2">每天 4 小時，會請假、會犯錯</p>
              </div>
              <div className="rounded-xl bg-indigo-600 p-6 text-white shadow-sm">
                <p className="text-sm text-indigo-200 mb-1">AI 工具訂閱</p>
                <p className="text-3xl font-black">NT$1,200<span className="text-lg font-normal text-indigo-200">/月</span></p>
                <p className="text-sm text-indigo-200 mt-2">全年無休、不請假、不犯人為錯誤</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              學會之後，兩個 AI 訂閱加起來每月約 NT$1,200（約 $40 美金），就能取代大量重複性工作。
              <strong className="text-gray-900">而這堂課本身——學費 $0。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            兩天翻過最陡的坡，<br />之後一馬平川。
          </h2>
          <p className="text-lg text-indigo-200 mb-10 max-w-2xl mx-auto">
            政府出錢讓你學，學費 $0。但你帶走的是一個全新的工作方式。
          </p>
          <CTAButton size="lg" variant="primary" />
        </div>
      </section>
    </>
  );
}
