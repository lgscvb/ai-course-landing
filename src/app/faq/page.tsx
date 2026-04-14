"use client";

import { useState } from "react";
import CTAButton from "@/components/CTAButton";

const faqs = [
  {
    q: "我完全不會寫程式，能上這堂課嗎？",
    a: "可以！這堂課就是為非工程師設計的。講師 90% 的工作都是用口述完成，不需要打一行程式碼。課程重點不在寫程式，而是教你「看懂電腦世界的遊戲規則」，讓 AI 聽得懂你要什麼。",
  },
  {
    q: "學費真的是 $0 嗎？有什麼隱藏費用？",
    a: "真的是 $0。這是經濟部「產業人才投資方案」全額補助的課程。唯一的花費是課後如果你要使用 AI 工具，Claude Pro 訂閱費約 NT$600/月（約 $20 美金），但這不是課程收費。",
  },
  {
    q: "需要自備什麼設備？",
    a: "一台筆電就夠了（Mac 或 Windows 都可以）。課前會提供 Quick Start 安裝包，照著步驟安裝即可。如果安裝有問題，課堂上講師會現場協助。",
  },
  {
    q: "上完課之後如果卡住怎麼辦？",
    a: "課程提供完整的教學網站和操作手冊可以帶回去參考。如果遇到更複雜的需求，我們也提供企業 AI 導入諮詢服務，協助你把 AI 真正落地到工作流程中。",
  },
  {
    q: "這跟其他 AI 課程有什麼不同？",
    a: "大部分 AI 課程教你「怎麼跟 ChatGPT 聊天」，我們教你「怎麼讓 AI 真正動手做事」。不是在對話框裡預覽，是真的在你的電腦上建檔案、寫程式、部署網站。而且你上完課會帶走實際可用的成品，不只是一張證書。",
  },
  {
    q: "4 天都要到嗎？可以只上部分天數嗎？",
    a: "建議 4 天都參加以獲得完整學習體驗。Day 1-2（AI 自動化）和 Day 3-4（AI 多媒體）是兩個獨立模組，各 12 小時。出席率需達 80% 以上（產投計畫規定）。",
  },
  {
    q: "我是老闆，可以派員工來上嗎？",
    a: "當然可以！產業人才投資方案本來就鼓勵在職人士進修。而且員工學會之後，能直接把 AI 應用在公司業務上，投資報酬率非常高。",
  },
  {
    q: "上課地點在哪裡？",
    a: "詳細上課地點與時間會在報名確認後通知。請先填寫報名表單，我們會盡快與您聯繫。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">常見問題</h1>
          <p className="text-lg text-indigo-200 max-w-2xl">
            有疑問？這裡整理了最常被問到的問題。如果找不到答案，歡迎直接聯繫我們。
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            不是 AI 不夠聰明，<br />是你不知道怎麼跟它說話。
          </h2>
          <p className="text-lg text-indigo-200 mb-10 max-w-2xl mx-auto">
            24 小時學會讓 AI 真正動手做事。學費 $0，名額有限。
          </p>
          <CTAButton size="lg" variant="primary" />
        </div>
      </section>
    </>
  );
}
