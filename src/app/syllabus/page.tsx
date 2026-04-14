import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "課程大綱",
  description:
    "24 小時完整課程大綱：AI 自動化實戰 + AI 多媒體創作，4 天 x 6 小時密集訓練。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Session {
  time: string;
  title: string;
  items: string[];
}

interface Day {
  number: number;
  title: string;
  instructor: string;
  color: "blue" | "violet";
  sessions: Session[];
}

const days: Day[] = [
  {
    number: 1,
    title: "認識 AI 的五感",
    instructor: "戴豪廷",
    color: "blue",
    sessions: [
      {
        time: "上午 3hr",
        title: "開場 + AI 的眼睛與嘴巴",
        items: [
          "為什麼 AI 只會聊天？因為你只給了它一個對話框",
          "五感框架介紹：Chat / CLI / Browser / Webhook / DB",
          "Claude Code 安裝與環境設定（Quick Start 安裝包）",
          "第一次體驗：用嘴巴建立一個 Markdown 筆記",
        ],
      },
      {
        time: "下午 3hr",
        title: "AI 的手腳 -- 檔案操作與網站建立",
        items: [
          "CLI 操作概念：讓 AI 在你的電腦上「真的動手」",
          "從零建立一個公司網站（Code 模式實作）",
          "部署上線：有網址、別人打得開",
          "Domain / URL / API 基礎概念拆解",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "AI 自動化實戰",
    instructor: "戴豪廷",
    color: "blue",
    sessions: [
      {
        time: "上午 3hr",
        title: "知識庫 + 自動化流程",
        items: [
          "Obsidian 知識管理系統建置",
          "AI 自動整理、分類、搜尋文件",
          "LINE OA 智慧分流 + 自動回覆客戶",
          "Webhook 概念：讓不同系統互相「說話」",
        ],
      },
      {
        time: "下午 3hr",
        title: "學員專案實作",
        items: [
          "學員自帶案件，現場指導 AI 自動化流程",
          "多平台同步概念（蝦皮 / LINE / 官網）",
          "CLAUDE.md 通用模板製作（帶回去繼續用）",
          "Day 1-2 回顧 + Q&A",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "AI 多媒體入門",
    instructor: "王琮瑋（Tobias）",
    color: "violet",
    sessions: [
      {
        time: "上午 3hr",
        title: "AI 影片生成基礎",
        items: [
          "AI 影片生成工具總覽與選擇",
          "虛擬人像（AI Avatar）製作",
          "文字轉影片：從腳本到成品",
          "AI 配音與字幕自動生成",
        ],
      },
      {
        time: "下午 3hr",
        title: "AI 設計與圖像",
        items: [
          "Canva AI 功能深度應用",
          "AI 生成行銷素材（社群貼文、廣告圖）",
          "品牌視覺一致性設定",
          "實作：為自己的品牌製作一組社群素材",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "AI 多媒體進階 + 整合",
    instructor: "王琮瑋（Tobias）",
    color: "violet",
    sessions: [
      {
        time: "上午 3hr",
        title: "進階影片製作",
        items: [
          "短影音製作流程（TikTok / Reels / Shorts）",
          "AI 剪輯工具實戰",
          "影片行銷策略與數據分析",
          "實作：製作一支產品介紹短影音",
        ],
      },
      {
        time: "下午 3hr",
        title: "總整合 + 畢業專題",
        items: [
          "Day 1-4 工具串聯回顧",
          "學員畢業專題發表",
          "企業 AI 導入路線圖規劃",
          "課後資源與持續學習管道",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Inline SVG helpers                                                 */
/* ------------------------------------------------------------------ */

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
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
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function DayHeader({ day }: { day: Day }) {
  const badgeBg = day.color === "blue" ? "bg-primary" : "bg-violet-600";

  return (
    <div className="flex items-center gap-5">
      <div
        className={`flex-shrink-0 h-16 w-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl ${badgeBg}`}
      >
        {day.number}
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-text">
          Day {day.number}：{day.title}
        </h2>
        <div className="mt-1 flex items-center gap-4 text-sm text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <UserIcon className="h-4 w-4" />
            {day.instructor}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" />6 小時
          </span>
        </div>
      </div>
    </div>
  );
}

function SessionCard({
  session,
  color,
}: {
  session: Session;
  color: "blue" | "violet";
}) {
  const pillBg =
    color === "blue"
      ? "bg-primary/10 text-primary"
      : "bg-violet-100 text-violet-700";
  const checkColor =
    color === "blue" ? "text-primary" : "text-violet-600";

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[2.3rem] top-2 h-3.5 w-3.5 rounded-full border-[3px] ${
          color === "blue"
            ? "border-primary bg-white"
            : "border-violet-600 bg-white"
        }`}
      />

      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-shadow duration-200 hover:shadow-md">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${pillBg}`}
          >
            {session.time}
          </span>
          <h3 className="text-lg font-bold text-text">{session.title}</h3>
        </div>

        <ul className="space-y-3">
          {session.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
              <CheckCircleIcon
                className={`h-5 w-5 mt-0.5 flex-shrink-0 ${checkColor}`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SyllabusPage() {
  return (
    <>
      {/* ---- Header ---- */}
      <section className="bg-dark-bg pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Curriculum
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            課程大綱
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            24 小時 = 4 天 x 6 小時。前半段學 AI 自動化（戴豪廷），後半段學 AI
            多媒體（王琮瑋）。每一堂都是動手做，不是坐著聽。
          </p>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "24", unit: "小時", label: "總時數" },
              { value: "4", unit: "天", label: "密集訓練" },
              { value: "2", unit: "位", label: "專業講師" },
              { value: "8", unit: "堂", label: "實作課程" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-dark-surface border border-slate-700/50 px-5 py-4"
              >
                <p className="text-2xl font-black text-white">
                  {stat.value}
                  <span className="text-sm font-medium text-slate-500 ml-1">
                    {stat.unit}
                  </span>
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-20">
            {days.map((day) => {
              const lineColor =
                day.color === "blue"
                  ? "border-primary/30"
                  : "border-violet-400/30";

              return (
                <div key={day.number}>
                  <DayHeader day={day} />

                  {/* Sessions on timeline */}
                  <div
                    className={`mt-8 ml-[1.9rem] border-l-2 ${lineColor} pl-8 space-y-6`}
                  >
                    {day.sessions.map((session, si) => (
                      <SessionCard
                        key={si}
                        session={session}
                        color={day.color}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-text mb-4">
            準備好了嗎？
          </h2>
          <p className="text-text-muted mb-10 max-w-lg mx-auto">
            24 小時，從零到能用 AI 工作。學費 $0。
          </p>
          <CTAButton size="lg" />
        </div>
      </section>
    </>
  );
}
