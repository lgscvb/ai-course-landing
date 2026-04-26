"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Target value to count up to. */
  value: number;
  /** Animation duration in ms. Defaults to 1500. */
  duration?: number;
  /** Optional prefix rendered before the number (e.g. "$"). */
  prefix?: string;
  /** Optional suffix rendered after the number (e.g. "%", "小時"). */
  suffix?: string;
  /** Decimals to keep. Defaults to 0. */
  decimals?: number;
  /** Fixed-format thousands separator? Defaults to true (toLocaleString). */
  separator?: boolean;
  /** Optional className passed through. */
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 → `value` once when the element scrolls into view.
 *
 * - Fires the count animation once per `value`. If `value` changes later
 *   (e.g. async data arriving on `/admin`), it will re-run from 0.
 * - Uses requestAnimationFrame with an ease-out curve.
 * - Respects `prefers-reduced-motion: reduce` (renders the final value
 *   immediately, no animation).
 * - SSR safe: the initial render shows `0` (with prefix/suffix) so client
 *   hydration matches; once mounted on the client we set up the observer.
 */
export default function CountUp({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(value);
      return;
    }

    let rafId = 0;
    let cancelled = false;

    const start = () => {
      const startTime = performance.now();
      const from = 0;
      const to = value;

      const tick = (now: number) => {
        if (cancelled) return;
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = easeOutCubic(t);
        setDisplay(from + (to - from) * eased);
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplay(to);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return () => {
        cancelled = true;
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, [value, duration]);

  const fixed = display.toFixed(decimals);
  const formatted = separator
    ? Number(fixed).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : fixed;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
