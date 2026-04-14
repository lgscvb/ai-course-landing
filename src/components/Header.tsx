"use client";

import Link from "next/link";
import { useState } from "react";

const GOOGLE_FORM_URL = "#";

const navItems = [
  { label: "課程大綱", href: "/syllabus" },
  { label: "講師介紹", href: "/instructors" },
  { label: "常見問題", href: "/faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 sm:mx-6 lg:mx-8">
        <nav className="mx-auto max-w-6xl rounded-2xl bg-white/90 backdrop-blur-lg border border-border shadow-sm px-6">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <span className="font-bold text-text text-sm tracking-tight">AI 數位素養實戰班</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 rounded-lg bg-cta px-4 py-2 text-sm font-bold text-white hover:bg-cta-dark transition-colors duration-200 cursor-pointer"
              >
                免費報名
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5 text-text" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 px-2 text-sm font-medium text-text-secondary hover:text-text rounded-lg hover:bg-slate-50 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block w-full rounded-lg bg-cta px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-cta-dark cursor-pointer"
              >
                免費報名
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
