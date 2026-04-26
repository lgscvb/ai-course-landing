"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
  sub: string;
  color: "blue" | "purple";
}

const items: TOCItem[] = [
  { id: "dai", label: "戴豪廷", sub: "Day 1-2 / AI 自動化", color: "blue" },
  {
    id: "wang",
    label: "王琮瑋",
    sub: "Day 3-4 / AI 多媒體",
    color: "purple",
  },
];

/**
 * Sticky table of contents for /instructors.
 *
 * Desktop (≥lg): vertical sidebar, sticks to top:6rem.
 * Mobile  (<lg): horizontal sticky bar at top, scrollable chip list.
 *
 * Active state driven by IntersectionObserver scroll-spy with the same
 * upper-middle band (-30% top / -60% bottom) used on the syllabus TOC.
 */
export default function InstructorsTOC() {
  const [active, setActive] = useState<string>("dai");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ---- Desktop: sticky sidebar ---- */}
      <aside className="hidden lg:block">
        <nav
          aria-label="講師介紹章節導覽"
          className="sticky top-24"
        >
          <p className="text-[12px] font-semibold tracking-[0.1em] text-[#6e6e73] uppercase mb-4">
            INSTRUCTORS
          </p>
          <ul className="space-y-1 border-l border-border-light">
            {items.map((it) => {
              const isActive = active === it.id;
              const accent =
                it.color === "blue" ? "#0071e3" : "#7850ff";
              return (
                <li key={it.id} className="relative">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 bottom-1.5 w-[2px] -translate-x-[1px] rounded-full"
                      style={{ background: accent }}
                    />
                  )}
                  <a
                    href={`#${it.id}`}
                    className={`block pl-4 py-2 text-[13px] leading-tight transition-colors duration-200 ${
                      isActive
                        ? "font-semibold"
                        : "text-[#6e6e73] hover:text-[#1d1d1f]"
                    }`}
                    style={isActive ? { color: accent } : undefined}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="block font-bold">{it.label}</span>
                    <span
                      className={`block text-[12px] mt-0.5 ${
                        isActive ? "" : "text-[#aeaeb2]"
                      }`}
                    >
                      {it.sub}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* ---- Mobile: horizontal sticky chip bar ---- */}
      <div className="lg:hidden sticky top-[52px] z-30 -mx-6 mb-8 bg-light-bg/85 backdrop-blur-[12px] border-b border-border-light">
        <nav
          aria-label="講師介紹章節導覽"
          className="overflow-x-auto no-scrollbar"
        >
          <ul className="flex items-center gap-2 px-6 py-3 whitespace-nowrap">
            {items.map((it) => {
              const isActive = active === it.id;
              const accent =
                it.color === "blue" ? "#0071e3" : "#7850ff";
              return (
                <li key={it.id} className="flex-shrink-0">
                  <a
                    href={`#${it.id}`}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[#6e6e73] bg-white border border-border-light hover:text-[#1d1d1f]"
                    }`}
                    style={
                      isActive
                        ? { background: accent }
                        : undefined
                    }
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span>{it.label}</span>
                    <span
                      className={`text-[12px] font-normal ${
                        isActive ? "text-white/85" : "text-[#aeaeb2]"
                      }`}
                    >
                      {it.sub}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
