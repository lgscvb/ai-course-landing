"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Optional className passed through to the wrapper. */
  className?: string;
  /** Render as a different element (default span). Use "div" for block flow. */
  as?: "div" | "span" | "li";
  /** IntersectionObserver root margin. */
  rootMargin?: string;
}

/**
 * Scroll-reveal wrapper. Fades + lifts children into view once they cross
 * the viewport. Honors `prefers-reduced-motion` (renders the final state).
 *
 * Implementation notes:
 * - Triggers exactly once (`unobserve` after first intersection).
 * - Uses CSS classes `.reveal` / `.reveal.is-visible` defined in globals.css
 *   so the easing and timing live with the rest of the design tokens.
 * - SSR safe: starts with `is-visible` if `IntersectionObserver` isn't
 *   available (older browsers, RSC) so content is never permanently hidden.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion preference – skip the animation entirely.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin]);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  const cls = ["reveal", visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  // We need a typed ref callback because the generic Tag union needs cooperation
  // with HTMLElement. Cast is safe – all three tags inherit from HTMLElement.
  return (
    <Tag
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      className={cls}
      style={style}
    >
      {children}
    </Tag>
  );
}
