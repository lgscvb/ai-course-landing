"use client";

import Link from "next/link";
import { useState } from "react";

const GOOGLE_FORM_URL = "#";

const navItems = [
  { label: "\u8AB2\u7A0B\u5927\u7DB1", href: "/syllabus" },
  { label: "\u8B1B\u5E2B\u4ECB\u7D39", href: "/instructors" },
  { label: "\u5E38\u898B\u554F\u984C", href: "/faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-3 sm:mx-6 lg:mx-8">
        <nav className="mx-auto max-w-5xl rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-lg shadow-black/5 px-5 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            {/* ---- Logo ---- */}
            <Link
              href="/"
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
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
              <span className="font-bold text-light-text text-sm tracking-tight">
                AI {"\u5BE6\u6230\u73ED"}
              </span>
            </Link>

            {/* ---- Desktop nav ---- */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-light-text-secondary hover:text-light-text rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-sm shadow-orange-500/20"
              >
                {"\u514D\u8CBB\u5831\u540D"}
                {/* Heroicons: arrow-right (mini) */}
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
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

            {/* ---- Mobile hamburger ---- */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="h-5 w-5 text-light-text"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  /* Heroicons: x-mark */
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  /* Heroicons: bars-2 */
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* ---- Mobile dropdown ---- */}
          {isOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-border-light">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 px-2 text-sm font-medium text-light-text-secondary hover:text-light-text rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {"\u514D\u8CBB\u5831\u540D"}
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
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
          )}
        </nav>
      </div>
    </header>
  );
}
