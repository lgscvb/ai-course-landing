import Link from "next/link";

const GOOGLE_FORM_URL = "#"; // TODO: replace with actual Google Form URL

interface CTAButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  label?: string;
  href?: string;
  className?: string;
}

export default function CTAButton({ size = "md", variant = "primary", label, href, className = "" }: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-amber-500 text-gray-900 hover:bg-amber-400 font-bold",
    outline: "border-2 border-white text-white hover:bg-white/10 font-semibold",
  };

  const text = label || (variant === "primary" ? "免費報名" : "看課程大綱");
  const isExternal = !href || href.startsWith("http") || href === "#";
  const targetHref = href || GOOGLE_FORM_URL;

  const cls = `inline-flex items-center justify-center rounded-full transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={targetHref} target="_blank" rel="noopener noreferrer" className={cls}>
        {text}
        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    );
  }

  return (
    <Link href={targetHref} className={cls}>
      {text}
      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  );
}
