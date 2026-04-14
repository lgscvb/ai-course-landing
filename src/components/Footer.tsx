import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-[#aeaeb2]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* ---- 3-column grid ---- */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#0071e3] flex items-center justify-center">
                {/* Heroicons: sparkles */}
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
                  />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-white">
                AI {"\u5BE6\u6230\u73ED"}
              </span>
            </div>
            <p className="text-[13px] text-[#aeaeb2] leading-relaxed max-w-xs">
              {"\u7D93\u6FDF\u90E8\u7522\u696D\u4EBA\u624D\u6295\u8CC7\u65B9\u6848\u88DC\u52A9\u8AB2\u7A0B\u3002\u8B93\u975E\u5DE5\u7A0B\u5E2B\u4E5F\u80FD\u7528 AI \u771F\u6B63\u52D5\u624B\u505A\u4E8B\u3002"}
            </p>
          </div>

          {/* Column 2: Course links */}
          <div>
            <h3 className="text-[13px] font-semibold text-white mb-4">
              {"\u8AB2\u7A0B\u8CC7\u8A0A"}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/syllabus"
                  className="text-[13px] text-[#aeaeb2] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {"\u8AB2\u7A0B\u5927\u7DB1"}
                </Link>
              </li>
              <li>
                <Link
                  href="/instructors"
                  className="text-[13px] text-[#aeaeb2] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {"\u8B1B\u5E2B\u4ECB\u7D39"}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[13px] text-[#aeaeb2] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {"\u5E38\u898B\u554F\u984C"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-[13px] font-semibold text-white mb-4">
              {"\u6559\u5B78\u8CC7\u6E90"}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://claude-code-tutorial-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#aeaeb2] hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5"
                >
                  Claude Code {"\u6559\u5B78\u7DB2\u7AD9"}
                  {/* Heroicons: arrow-top-right-on-square */}
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lgscvb/claude-code-quickstart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#aeaeb2] hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5"
                >
                  Quick Start {"\u5B89\u88DD\u5305"}
                  {/* Heroicons: arrow-top-right-on-square */}
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#aeaeb2]/60">
            &copy; {new Date().getFullYear()} AI{" "}
            {"\u6578\u4F4D\u7D20\u990A\u5BE6\u6230\u73ED"}. All rights
            reserved.
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-[#aeaeb2]/60">
            {/* Heroicons: cpu-chip */}
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 4.5 8.25v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Made with AI
          </span>
        </div>
      </div>
    </footer>
  );
}
