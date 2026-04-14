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
  authorityTitle: string;
  authorityProofs: string[];
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
    authorityTitle: "不是理論，是現在進行式",
    authorityProofs: [
      "同時經營兩間公司，一間科技、一間不動產",
      "大學講師 + 政府 SIIR/SBIR 計畫講師",
      "每天只工作 4 小時，一週工作 4 天",
      "90% 的工作用語音輸入 + Claude Code 口述完成",
      "本課程的 Landing Page 就是用 Claude Code 建的",
      "從想法到上線部署，全程不用手動寫一行程式碼",
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
    authorityTitle: "讓 AI 成為你的創意團隊",
    authorityProofs: [
      "AI 多媒體創作的早期實踐者",
      "深度掌握 AI 影片生成與虛擬人像技術",
      "Canva AI 功能的深度使用者與教學者",
      "Workation Lab 合作講師，課程評價優異",
    ],
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

const credibilityStats = [
  { value: "2 位", label: "業界講師" },
  { value: "24 小時", label: "密集實戰" },
  { value: "90%", label: "口述完成工作" },
  { value: "4 小時", label: "每日工作時數" },
];

interface ComparisonRow {
  feature: string;
  chatgpt: boolean;
  lovable: boolean | string;
  claudeCode: boolean;
}

const comparisonRows: ComparisonRow[] = [
  { feature: "做出畫面", chatgpt: true, lovable: true, claudeCode: true },
  {
    feature: "部署上線",
    chatgpt: false,
    lovable: "limited",
    claudeCode: true,
  },
  {
    feature: "你看得懂做了什麼",
    chatgpt: false,
    lovable: false,
    claudeCode: true,
  },
  { feature: "壞了你能修", chatgpt: false, lovable: false, claudeCode: true },
  {
    feature: "不綁定平台",
    chatgpt: true,
    lovable: false,
    claudeCode: true,
  },
  {
    feature: "資料完全在你手上",
    chatgpt: true,
    lovable: false,
    claudeCode: true,
  },
];

interface JourneyStage {
  label: string;
  description: string;
  color: "green" | "red" | "gold";
  highlight?: string;
}

const journeyStages: JourneyStage[] = [
  { label: "興奮期", description: "AI 可以幫我做網站！", color: "green" },
  { label: "蜜月期", description: "哇做出東西了！", color: "green" },
  {
    label: "撞牆期",
    description: "怎麼改了A壞了B？",
    color: "red",
    highlight: "99% 的人卡在這裡",
  },
  { label: "燒錢期", description: "花了 $200 還上不了線", color: "red" },
  { label: "突破", description: "這堂課直接帶你到這裡", color: "gold" },
];

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

function CheckCircleIcon({ className }: { className?: string }) {
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
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
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
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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

function ArrowRightIcon({ className }: { className?: string }) {
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
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
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
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
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

function CredibilityBar() {
  return (
    <div className="bg-hero-card rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {credibilityStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl sm:text-3xl font-black gradient-text-gold leading-tight">
              {stat.value}
            </p>
            <p className="text-sm text-hero-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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

function AuthorityProof({ inst }: { inst: Instructor }) {
  return (
    <div className="mt-8 rounded-xl border border-success/20 bg-success/5 p-6">
      <h4 className="text-sm font-bold uppercase tracking-widest text-success mb-4">
        {inst.authorityTitle}
      </h4>
      <ul className="space-y-3">
        {inst.authorityProofs.map((proof, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
            <span className="text-light-text-secondary leading-relaxed">
              {proof}
            </span>
          </li>
        ))}
      </ul>
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

      {/* Authority Proof */}
      <AuthorityProof inst={inst} />
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

function ComparisonCellIcon({
  value,
}: {
  value: boolean | string;
}) {
  if (value === true) {
    return <CheckCircleIcon className="h-5 w-5 text-success mx-auto" />;
  }
  if (value === "limited") {
    return (
      <span className="flex flex-col items-center gap-0.5">
        <CheckCircleIcon className="h-5 w-5 text-success" />
        <span className="text-[10px] text-hero-muted">平台綁定</span>
      </span>
    );
  }
  return <XCircleIcon className="h-5 w-5 text-red-400 mx-auto" />;
}

function ComparisonTable() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl sm:text-3xl font-black text-light-text text-center mb-10">
        為什麼不是其他工具？
      </h3>
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full bg-hero-bg rounded-2xl overflow-hidden">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-5 py-4 text-sm font-bold text-hero-muted w-[30%]">
                功能
              </th>
              <th className="text-center px-4 py-4 text-sm font-bold text-hero-muted">
                ChatGPT / Claude
                <span className="block text-[10px] text-hero-muted/60 font-normal mt-0.5">
                  對話框
                </span>
              </th>
              <th className="text-center px-4 py-4 text-sm font-bold text-hero-muted">
                Lovable / Bolt
                <span className="block text-[10px] text-hero-muted/60 font-normal mt-0.5">
                  AI Builder
                </span>
              </th>
              <th className="text-center px-4 py-4 text-sm font-bold text-white">
                <span className="gradient-text font-black">Claude Code</span>
                <span className="block text-[10px] text-primary-light font-normal mt-0.5">
                  我們教的
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b border-white/5 transition-colors duration-200 ${
                  i % 2 === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <td className="px-5 py-4 text-sm text-hero-text font-medium">
                  {row.feature}
                </td>
                <td className="px-4 py-4 text-center">
                  <ComparisonCellIcon value={row.chatgpt} />
                </td>
                <td className="px-4 py-4 text-center">
                  <ComparisonCellIcon value={row.lovable} />
                </td>
                <td className="px-4 py-4 text-center bg-primary/5">
                  <ComparisonCellIcon value={row.claudeCode} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-sm text-light-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
        只有 Claude Code 讓你同時擁有「做出東西的能力」和「理解自己做了什麼的能力」。其他工具，二者只能選一。
      </p>
    </div>
  );
}

function UserJourney() {
  const stageColorMap = {
    green: {
      border: "border-success/40",
      bg: "bg-success/10",
      text: "text-success",
      dot: "bg-success",
      line: "bg-success/30",
    },
    red: {
      border: "border-red-400/40",
      bg: "bg-red-400/10",
      text: "text-red-400",
      dot: "bg-red-400",
      line: "bg-red-400/30",
    },
    gold: {
      border: "border-amber-400/40",
      bg: "bg-amber-400/10",
      text: "text-amber-400",
      dot: "bg-amber-400",
      line: "bg-amber-400/30",
    },
  };

  return (
    <div className="mt-20">
      <h3 className="text-2xl sm:text-3xl font-black text-light-text text-center mb-4">
        99% 的人卡在這裡
      </h3>
      <p className="text-center text-sm text-light-text-secondary mb-12 max-w-lg mx-auto">
        學 AI 做東西不難，難的是做出「能用、能改、能上線」的東西。
      </p>

      {/* Desktop: horizontal journey */}
      <div className="hidden md:block">
        <div className="relative flex items-start justify-between max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-success/40 via-red-400/40 to-amber-400/40" />

          {journeyStages.map((stage, i) => {
            const colors = stageColorMap[stage.color];
            const isHighlighted = !!stage.highlight;
            const isLast = i === journeyStages.length - 1;

            return (
              <div
                key={stage.label}
                className="relative flex flex-col items-center text-center"
                style={{ width: "20%" }}
              >
                {/* Dot */}
                <div
                  className={`relative z-10 h-12 w-12 rounded-full flex items-center justify-center ${
                    isHighlighted
                      ? "bg-red-500 ring-4 ring-red-400/30 animate-pulse"
                      : isLast
                        ? "bg-gradient-to-br from-amber-400 to-orange-500 ring-4 ring-amber-400/30"
                        : `${colors.bg} border-2 ${colors.border}`
                  }`}
                >
                  {isLast ? (
                    <SparklesIcon className="h-5 w-5 text-white" />
                  ) : isHighlighted ? (
                    <span className="text-white text-lg font-black">!</span>
                  ) : (
                    <span className={`text-sm font-bold ${colors.text}`}>
                      {i + 1}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p
                  className={`mt-3 text-sm font-bold ${
                    isHighlighted
                      ? "text-red-500"
                      : isLast
                        ? "gradient-text-gold"
                        : colors.text
                  }`}
                >
                  {stage.label}
                </p>

                {/* Description */}
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    isHighlighted || isLast
                      ? "text-light-text font-medium"
                      : "text-light-text-secondary"
                  }`}
                >
                  {stage.description}
                </p>

                {/* Highlight callout */}
                {isHighlighted && (
                  <div className="mt-3 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-400/30">
                    <p className="text-[11px] font-bold text-red-400">
                      {stage.highlight}
                    </p>
                  </div>
                )}

                {/* Arrow pointing to last stage */}
                {isLast && (
                  <div className="mt-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30">
                    <p className="text-[11px] font-bold gradient-text-gold flex items-center gap-1">
                      <ArrowRightIcon className="h-3 w-3 text-amber-400" />
                      直達這裡
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical journey */}
      <div className="md:hidden">
        <div className="relative max-w-sm mx-auto">
          {journeyStages.map((stage, i) => {
            const colors = stageColorMap[stage.color];
            const isHighlighted = !!stage.highlight;
            const isLast = i === journeyStages.length - 1;
            const isFirst = i === 0;

            return (
              <div key={stage.label} className="relative flex gap-4">
                {/* Vertical line + dot */}
                <div className="flex flex-col items-center">
                  {/* Connector line top */}
                  {!isFirst && (
                    <div
                      className={`w-0.5 h-4 ${
                        stage.color === "red"
                          ? "bg-red-400/30"
                          : stage.color === "gold"
                            ? "bg-amber-400/30"
                            : "bg-success/30"
                      }`}
                    />
                  )}

                  {/* Dot */}
                  <div
                    className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                      isHighlighted
                        ? "bg-red-500 ring-4 ring-red-400/30 animate-pulse"
                        : isLast
                          ? "bg-gradient-to-br from-amber-400 to-orange-500 ring-4 ring-amber-400/30"
                          : `${colors.bg} border-2 ${colors.border}`
                    }`}
                  >
                    {isLast ? (
                      <SparklesIcon className="h-4 w-4 text-white" />
                    ) : isHighlighted ? (
                      <span className="text-white text-sm font-black">!</span>
                    ) : (
                      <span className={`text-xs font-bold ${colors.text}`}>
                        {i + 1}
                      </span>
                    )}
                  </div>

                  {/* Connector line bottom */}
                  {!isLast && (
                    <div
                      className={`w-0.5 flex-1 min-h-[16px] ${
                        stage.color === "green"
                          ? "bg-success/30"
                          : stage.color === "red"
                            ? "bg-red-400/30"
                            : "bg-amber-400/30"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-6 ${isFirst ? "pt-0" : "pt-4"}`}>
                  <p
                    className={`text-sm font-bold ${
                      isHighlighted
                        ? "text-red-500"
                        : isLast
                          ? "gradient-text-gold"
                          : colors.text
                    }`}
                  >
                    {stage.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      isHighlighted || isLast
                        ? "text-light-text font-medium"
                        : "text-light-text-secondary"
                    }`}
                  >
                    {stage.description}
                  </p>
                  {isHighlighted && (
                    <div className="mt-2 inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-400/30">
                      <p className="text-[11px] font-bold text-red-400">
                        {stage.highlight}
                      </p>
                    </div>
                  )}
                  {isLast && (
                    <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30">
                      <ArrowRightIcon className="h-3 w-3 text-amber-400" />
                      <p className="text-[11px] font-bold gradient-text-gold">
                        直達這裡
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
          <p className="text-lg text-hero-muted max-w-2xl leading-relaxed mb-10">
            兩位講師、兩個專長。前半程教你用 AI 自動化工作流程，後半程教你用 AI
            做影片和設計。
          </p>

          {/* Credibility Stats Bar */}
          <CredibilityBar />
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

          {/* Comparison Table */}
          <ComparisonTable />

          {/* User Journey */}
          <UserJourney />
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
