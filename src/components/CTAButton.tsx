import Link from "next/link";

const GOOGLE_FORM_URL = "#";

interface CTAButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "light";
  label?: string;
  href?: string;
  className?: string;
}

export default function CTAButton({
  size = "md",
  variant = "primary",
  label,
  href,
  className = "",
}: CTAButtonProps) {
  /* ---- Size tokens ---- */
  const sizeClasses: Record<string, string> = {
    sm: "px-5 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2",
  };

  /* ---- Variant tokens ---- */
  const variantClasses: Record<string, string> = {
    primary: [
      "bg-gradient-to-r from-orange-500 to-amber-500",
      "text-white font-bold",
      "shadow-lg shadow-orange-500/25",
      "hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/30",
      "active:scale-[0.98]",
    ].join(" "),
    secondary: [
      "bg-white/10 backdrop-blur",
      "text-white font-semibold",
      "border border-white/20",
      "hover:bg-white/20",
      "active:scale-[0.98]",
    ].join(" "),
    light: [
      "bg-gray-900 text-white font-bold",
      "hover:bg-gray-800",
      "active:scale-[0.98]",
    ].join(" "),
  };

  /* ---- Default labels per variant ---- */
  const defaultLabels: Record<string, string> = {
    primary: "\u514D\u8CBB\u5831\u540D",
    secondary: "\u770B\u8AB2\u7A0B\u5927\u7DB1",
    light: "\u770B\u8AB2\u7A0B\u5927\u7DB1",
  };

  const text = label || defaultLabels[variant];
  const isExternal = !href || href.startsWith("http") || href === "#";
  const targetHref = href || GOOGLE_FORM_URL;

  const cls = [
    "inline-flex items-center justify-center rounded-lg",
    "transition-all duration-200 cursor-pointer",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ].join(" ");

  /* ---- Arrow icon (Heroicons: arrow-right) ---- */
  const arrow = (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );

  if (isExternal) {
    return (
      <a
        href={targetHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {text}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={targetHref} className={cls}>
      {text}
      {arrow}
    </Link>
  );
}
