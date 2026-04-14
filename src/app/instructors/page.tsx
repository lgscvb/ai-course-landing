import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "講師介紹",
  description:
    "兩位講師、兩個專長：AI 自動化 x AI 多媒體，合計 24 小時密集實戰。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Resource {
  label: string;
  url: string;
}

interface Instructor {
  name: string;
  initial: string;
  role: string;
  hours: string;
  color: "indigo" | "violet";
  quote: string;
  credentials: string[];
  teaches: string[];
  resources: Resource[];
}

const instructors: Instructor[] = [
  {
    name: "戴豪廷",
    initial: "戴",
    role: "AI 自動化 / Claude Code 實戰",
    hours: "12 小時（Day 1-2）",
    color: "indigo",
    quote:
      "我現在同時是兩間公司的負責人，做三份工作，維持不動產投資人的身份，還在大學和政府計畫擔任講師。一天只工作四小時，一週工作四天。90% 的工作都是用口述完成的。",
    credentials: [
      "兩間公司負責人",
      "大學講師 / 政府計畫講師",
      "Claude Code 深度使用者",
      "一天工作 4 小時",
    ],
    teaches: [
      "Claude Code 安裝與環境設定",
      "AI 五感框架",
      "企業網站從零到部署上線",
      "知識庫建置",
      "LINE OA 自動回覆",
      "學員自帶案件現場實作",
    ],
    resources: [
      {
        label: "Claude Code 教學網站",
        url: "https://claude-code-tutorial-one.vercel.app/",
      },
      {
        label: "Quick Start 安裝包",
        url: "https://github.com/lgscvb/claude-code-quickstart",
      },
    ],
  },
  {
    name: "王琮瑋（Tobias）",
    initial: "王",
    role: "AI 多媒體 / 影片生成 / 設計",
    hours: "12 小時（Day 3-4）",
    color: "violet",
    quote:
      "AI 不只是文字工具，它也能幫你拍影片、做設計、產出行銷素材。你不需要學 Premiere，不需要學 Photoshop——AI 就是你的創意團隊。",
    credentials: [
      "AI 多媒體創作專家",
      "影片生成 / 虛擬人像技術",
      "Canva 深度使用者",
      "Workation Lab 合作講師",
    ],
    teaches: [
      "AI 影片生成實戰",
      "虛擬人像製作",
      "Canva AI 深度應用",
      "社群行銷素材批量製作",
      "短影音製作",
      "品牌視覺一致性",
    ],
    resources: [],
  },
];

const whyClaudeCode = [
  {
    title: "AI 時代的槍械",
    body: "冷兵器時代訓練一個士兵要好幾年。槍械出現後，普通人——不分性別、不分體格——擁有了同等戰鬥力。Claude Code 就是 AI 時代的槍械。它讓沒有程式背景的人，擁有了跟工程師同等的軟體產出能力。",
    icon: "bolt",
  },
  {
    title: "矽谷的選擇",
    body: "Meta、Microsoft、Google 的開發團隊都選用 Claude Code（而非自家產品）。前 Google VP、前 Workday CTO Peter Bailis 離開高管職位加入 Anthropic。當矽谷最聰明的人都選同一個工具——這就是你該學的工具。",
    icon: "globe",
  },
  {
    title: "言出法隨 手出萬物",
    body: "Claude Code 不是在對話框裡預覽——它是真的在你的電腦上建檔案、寫程式、部署網站、操作資料庫。你說什麼，它就做什麼。這不是口號，是你上完課的日常。",
    icon: "sparkles",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Inline SVG helpers                                                 */
/* ------------------------------------------------------------------ */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558"
      />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
      />
    </svg>
  );
}

const iconMap = {
  bolt: BoltIcon,
  globe: GlobeIcon,
  sparkles: SparklesIcon,
} as const;

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ProfileCard({ inst }: { inst: Instructor }) {
  const gradientBg =
    inst.color === "indigo"
      ? "bg-gradient-to-br from-primary to-indigo-700"
      : "bg-gradient-to-br from-violet-600 to-violet-800";

  return (
    <div className={`rounded-2xl p-8 text-white ${gradientBg}`}>
      {/* Avatar initial */}
      <div className="h-20 w-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-4xl font-black mb-8">
        {inst.initial}
      </div>

      <h2 className="text-2xl font-black mb-1">{inst.name}</h2>
      <p className="text-sm text-white/70 mb-1">{inst.role}</p>
      <p className="text-sm text-white/70 mb-8">{inst.hours}</p>

      {/* Credentials */}
      <ul className="space-y-3">
        {inst.credentials.map((c, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
              <CheckIcon className="h-3 w-3 text-white" />
            </span>
            <span className="text-white/90">{c}</span>
          </li>
        ))}
      </ul>

      {/* Resources */}
      {inst.resources.length > 0 && (
        <div className="mt-8 pt-8 border-t border-white/15">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
            教學資源
          </p>
          <div className="space-y-3">
            {inst.resources.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
                {r.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InstructorDetails({ inst }: { inst: Instructor }) {
  const borderColor =
    inst.color === "indigo" ? "border-primary/40" : "border-violet-400/40";
  const numberBg =
    inst.color === "indigo" ? "bg-primary" : "bg-violet-600";

  return (
    <div>
      {/* Quote */}
      <blockquote className={`border-l-4 ${borderColor} pl-6 mb-10`}>
        <p className="text-lg sm:text-xl text-light-text leading-relaxed font-medium italic">
          &ldquo;{inst.quote}&rdquo;
        </p>
      </blockquote>

      {/* Teaching content */}
      <h3 className="text-sm font-bold uppercase tracking-widest text-light-text-secondary mb-5">
        教學內容
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {inst.teaches.map((t, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl border border-border-light bg-light-surface p-4 transition-all duration-200 hover:shadow-md hover:border-primary/30 cursor-pointer"
          >
            <span
              className={`flex-shrink-0 h-6 w-6 rounded-lg flex items-center justify-center text-xs font-bold text-white ${numberBg}`}
            >
              {i + 1}
            </span>
            <span className="text-sm text-light-text-secondary leading-relaxed">
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyClaudeCodeCard({
  item,
}: {
  item: (typeof whyClaudeCode)[number];
}) {
  const Icon = iconMap[item.icon];

  return (
    <div className="rounded-2xl border border-border-light bg-light-surface p-8 transition-shadow duration-200 hover:shadow-md">
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-black text-light-text mb-3">{item.title}</h3>
      <p className="text-sm text-light-text-secondary leading-relaxed">
        {item.body}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function InstructorsPage() {
  return (
    <>
      {/* ---- Header ---- */}
      <section className="bg-hero-bg pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-primary-light uppercase mb-3">
            INSTRUCTORS
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            講師介紹
          </h1>
          <p className="text-lg text-hero-muted max-w-2xl leading-relaxed">
            兩位講師、兩個專長。前半程教你用 AI 自動化工作流程，後半程教你用 AI
            做影片和設計。
          </p>
        </div>
      </section>

      {/* ---- Instructor Profiles ---- */}
      <section className="bg-light-bg py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 space-y-24">
          {instructors.map((inst, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14"
            >
              <div className="lg:col-span-2">
                <ProfileCard inst={inst} />
              </div>
              <div className="lg:col-span-3 flex flex-col justify-center">
                <InstructorDetails inst={inst} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Why Claude Code ---- */}
      <section className="bg-light-bg py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] text-primary-light uppercase mb-3">
              WHY CLAUDE CODE
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-light-text">
              為什麼教 Claude Code？
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyClaudeCode.map((item) => (
              <WhyClaudeCodeCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="bg-hero-bg py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            跟對的人學，少走三年彎路
          </h2>
          <p className="text-hero-muted mb-10 max-w-lg mx-auto">
            24 小時，兩位講師帶你從零到能用 AI 工作。
          </p>
          <CTAButton size="lg" />
        </div>
      </section>
    </>
  );
}
