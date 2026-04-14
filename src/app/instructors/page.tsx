import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "講師介紹",
  description: "兩位講師、兩個專長：AI 自動化 x AI 多媒體，合計 24 小時密集實戰。",
};

const instructors = [
  {
    name: "戴豪廷",
    role: "AI 自動化 / Claude Code 實戰",
    hours: "12 小時（Day 1-2）",
    color: "indigo",
    quote:
      "我現在同時是兩間公司的負責人，做三份工作，維持不動產投資人的身份，還在大學和政府計畫擔任講師。一天只工作四小時，一週工作四天。90% 的工作都是用口述完成的。",
    credentials: [
      "兩間公司負責人（科技 + 不動產）",
      "大學講師 / 政府計畫講師",
      "Claude Code 深度使用者 — 日常工作 90% 靠口述",
      "一天工作 4 小時、一週工作 4 天",
    ],
    teaches: [
      "Claude Code 安裝與環境設定",
      "AI 五感框架（Chat / CLI / Browser / Webhook / DB）",
      "企業網站從零到部署上線",
      "知識庫建置（Obsidian + AI）",
      "LINE OA 自動回覆 / 多平台同步",
      "學員自帶案件現場實作",
    ],
    resources: [
      { label: "Claude Code 教學網站", url: "https://claude-code-tutorial-one.vercel.app/" },
      { label: "Quick Start 安裝包", url: "https://github.com/lgscvb/claude-code-quickstart" },
    ],
  },
  {
    name: "王琮瑋（Tobias）",
    role: "AI 多媒體 / 影片生成 / 設計",
    hours: "12 小時（Day 3-4）",
    color: "purple",
    quote:
      "AI 不只是文字工具，它也能幫你拍影片、做設計、產出行銷素材。你不需要學 Premiere，不需要學 Photoshop——AI 就是你的創意團隊。",
    credentials: [
      "AI 多媒體創作專家",
      "影片生成 / 虛擬人像技術實踐者",
      "Canva 深度使用者",
      "Workation Lab 網絡合作講師",
    ],
    teaches: [
      "AI 影片生成工具實戰",
      "虛擬人像（AI Avatar）製作",
      "Canva AI 深度應用",
      "社群行銷素材批量製作",
      "短影音製作（TikTok / Reels / Shorts）",
      "品牌視覺一致性設計",
    ],
    resources: [],
  },
];

export default function InstructorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">講師介紹</h1>
          <p className="text-lg text-indigo-200 max-w-2xl">
            兩位講師、兩個專長。前半程教你用 AI 自動化工作流程，後半程教你用 AI 做影片和設計。
          </p>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">
          {instructors.map((inst, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Profile card */}
              <div className="lg:col-span-2">
                <div className={`rounded-2xl p-8 text-white ${index === 0 ? "bg-gradient-to-br from-indigo-600 to-indigo-800" : "bg-gradient-to-br from-purple-600 to-purple-800"}`}>
                  <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center text-3xl font-black mb-6">
                    {inst.name.charAt(0)}
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{inst.name}</h2>
                  <p className="text-sm opacity-80 mb-1">{inst.role}</p>
                  <p className="text-sm opacity-80 mb-6">{inst.hours}</p>
                  <ul className="space-y-2">
                    {inst.credentials.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm opacity-90">
                        <svg className="h-4 w-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  {inst.resources.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-3">教學資源</p>
                      <div className="space-y-2">
                        {inst.resources.map((r, i) => (
                          <a
                            key={i}
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm hover:underline opacity-90 hover:opacity-100"
                          >
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            {r.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-3">
                {/* Quote */}
                <blockquote className="border-l-4 border-indigo-300 pl-6 mb-8">
                  <p className="text-lg text-gray-700 italic leading-relaxed">&ldquo;{inst.quote}&rdquo;</p>
                </blockquote>

                {/* What they teach */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">教學內容</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {inst.teaches.map((t, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${index === 0 ? "bg-indigo-600" : "bg-purple-600"}`}>
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Claude Code */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">為什麼教 Claude Code？</h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">AI 時代的槍械</h3>
              <p className="text-gray-600 leading-relaxed">
                冷兵器時代訓練一個士兵要好幾年。槍械出現後，普通人——不分性別、不分體格——擁有了同等戰鬥力。
                Claude Code 就是 AI 時代的槍械。它讓沒有程式背景的人，擁有了跟工程師同等的軟體產出能力。
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">矽谷的選擇</h3>
              <p className="text-gray-600 leading-relaxed">
                Meta、Microsoft、Google 的開發團隊都選用 Claude Code（而非自家產品）。
                前 Google VP、前 Workday CTO Peter Bailis 離開高管職位加入 Anthropic。
                當矽谷最聰明的人都選同一個工具——這就是你該學的工具。
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">言出法隨、手出萬物</h3>
              <p className="text-gray-600 leading-relaxed">
                Claude Code 不是在對話框裡預覽——它是真的在你的電腦上建檔案、寫程式、部署網站、操作資料庫。
                你說什麼，它就做什麼。這不是口號，是你上完課的日常。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">跟對的人學，少走三年彎路</h2>
          <p className="text-indigo-200 mb-8">24 小時，兩位講師帶你從零到能用 AI 工作。</p>
          <CTAButton size="lg" />
        </div>
      </section>
    </>
  );
}
