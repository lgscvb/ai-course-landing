import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg text-white">AI 數位素養實戰班</span>
            </div>
            <p className="text-sm leading-relaxed">
              經濟部產業人才投資方案補助課程。<br />
              讓非工程師也能用 AI 真正動手做事。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">課程資訊</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/syllabus" className="hover:text-white transition-colors">課程大綱</Link></li>
              <li><Link href="/instructors" className="hover:text-white transition-colors">講師介紹</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">常見問題</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">教學資源</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://claude-code-tutorial-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Claude Code 教學網站
                </a>
              </li>
              <li>
                <a href="https://github.com/lgscvb/claude-code-quickstart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Quick Start 安裝包
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AI 數位素養實戰班. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
