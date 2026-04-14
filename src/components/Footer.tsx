import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <span className="font-bold text-white text-sm">AI 數位素養實戰班</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              經濟部產業人才投資方案補助課程。讓非工程師也能用 AI 真正動手做事。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">課程資訊</h3>
            <ul className="space-y-2.5">
              <li><Link href="/syllabus" className="text-sm hover:text-white transition-colors duration-200 cursor-pointer">課程大綱</Link></li>
              <li><Link href="/instructors" className="text-sm hover:text-white transition-colors duration-200 cursor-pointer">講師介紹</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white transition-colors duration-200 cursor-pointer">常見問題</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">教學資源</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="https://claude-code-tutorial-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5">
                  Claude Code 教學網站
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/lgscvb/claude-code-quickstart" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5">
                  Quick Start 安裝包
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} AI 數位素養實戰班. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
