import Link from "next/link";

const GOOGLE_FORM_URL = "#"; // TODO: replace with actual Google Form URL

interface CTAButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  label?: string;
  href?: string;
  className?: string;
}

export default function CTAButton({ size = "md", variant = "primary", label, href, className = "" }: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary: "bg-cta text-white hover:bg-cta-dark font-bold shadow-sm",
    secondary: "bg-white text-text border border-border hover:border-text-muted hover:bg-slate-50 font-semibold",
  };

  const text = label || (variant === "primary" ? "免費報名" : "看課程大綱");
  const isExternal = !href || href.startsWith("http") || href === "#";
  const targetHref = href || GOOGLE_FORM_URL;

  const cls = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const arrow = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );

  if (isExternal) {
    return (
      <a href={targetHref} target="_blank" rel="noopener noreferrer" className={cls}>
        {text}{arrow}
      </a>
    );
  }

  return (
    <Link href={targetHref} className={cls}>
      {text}{arrow}
    </Link>
  );
}
