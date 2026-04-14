"use client";

import { useState } from "react";
import CTAButton from "@/components/CTAButton";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  SVG helpers                                                        */
/* ------------------------------------------------------------------ */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-light-text-secondary transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function QuestionIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Accordion item                                                     */
/* ------------------------------------------------------------------ */

function FAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-border-light">
      <h3>
        <button
          id={buttonId}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full cursor-pointer items-center justify-between py-6 text-left transition-colors duration-200"
        >
          <span className="pr-8 text-lg font-bold text-light-text group-hover:text-primary transition-colors duration-200">
            {q}
          </span>
          <ChevronIcon open={open} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-light-text-secondary leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FAQPage() {
  return (
    <>
      {/* ---- Page Header ---- */}
      <section className="bg-hero-bg pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-primary-light uppercase mb-3">
            FAQ
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            常見問題
          </h1>
          <p className="text-lg text-hero-muted max-w-2xl leading-relaxed">
            有疑問？這裡整理了最常被問到的問題。
            <br className="hidden sm:block" />
            如果找不到答案，歡迎直接聯繫我們。
          </p>

          {/* Decorative icon */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-hero-card flex items-center justify-center">
              <QuestionIcon className="h-5 w-5 text-primary-light" />
            </div>
            <span className="text-sm text-hero-muted">
              {faqs.length} 個常見問題
            </span>
          </div>
        </div>
      </section>

      {/* ---- FAQ Accordion ---- */}
      <section className="bg-light-bg py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-border-light">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            不是 AI 不夠聰明，
            <br />
            是你不知道怎麼跟它說話。
          </h2>
          <p className="text-indigo-100 mb-10 max-w-lg mx-auto leading-relaxed">
            24 小時學會讓 AI 真正動手做事。學費 $0，名額有限。
          </p>
          <CTAButton
            size="lg"
            variant="primary"
            label="免費報名"
            className="bg-white text-primary hover:bg-slate-50 font-bold shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
