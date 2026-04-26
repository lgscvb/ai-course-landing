import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SyllabusTOC from "@/components/SyllabusTOC";

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
  hours: string;
  color: "blue" | "purple";
  sessions: Session[];
}

const days: Day[] = [
  {
    number: 1,
    title: "認識 AI 的五感",
    instructor: "戴豪廷",
    hours: "6 小時",
    color: "blue",
    sessions: [
      {
        time: "上午 3hr",
        title: "開場 + AI 的眼睛與嘴巴",
        items: [
          "五感框架介紹：Chat / CLI / Browser / Webhook / DB",
          "Claude Code 安裝與環境設定（Quick Start 安裝包）",
          "用嘴巴建立一個 Markdown 筆記",
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
    hours: "6 小時",
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
    hours: "6 小時",
    color: "purple",
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
    hours: "6 小時",
    color: "purple",
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
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

function BookIcon({ className }: { className?: string }) {
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
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
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
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const stats = [
  {
    value: "24",
    unit: "小時",
    label: "總時數",
    icon: ClockIcon,
  },
  {
    value: "4",
    unit: "天",
    label: "密集訓練",
    icon: CalendarIcon,
  },
  {
    value: "2",
    unit: "位",
    label: "專業講師",
    icon: UsersIcon,
  },
  {
    value: "8",
    unit: "堂",
    label: "實作課程",
    icon: BookIcon,
  },
];

function DayHeader({ day }: { day: Day }) {
  const badgeBg = day.color === "blue" ? "bg-[#0071e3]" : "bg-[#7850ff]";

  return (
    <div className="flex items-center gap-5">
      <div
        className={`flex-shrink-0 h-16 w-16 rounded-[24px] flex items-center justify-center text-white font-black text-2xl shadow-lg ${badgeBg}`}
      >
        {day.number}
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-light-text tracking-[-0.03em]">
          Day {day.number}：{day.title}
        </h2>
        <div className="mt-1.5 flex items-center gap-4 text-[13px] text-[#6e6e73]">
          <span className="inline-flex items-center gap-1.5">
            <UserIcon className="h-4 w-4" />
            {day.instructor}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" />
            {day.hours}
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
  color: "blue" | "purple";
}) {
  const pillBg =
    color === "blue"
      ? "bg-[#0071e3]/10 text-[#0071e3]"
      : "bg-[#7850ff]/10 text-[#7850ff]";
  const checkColor =
    color === "blue" ? "text-[#0071e3]" : "text-[#7850ff]";
  const dotBorder =
    color === "blue"
      ? "border-[#0071e3] bg-white"
      : "border-[#7850ff] bg-white";

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[2.3rem] top-2 h-3.5 w-3.5 rounded-full border-[3px] ${dotBorder}`}
      />

      <div className="rounded-[24px] border border-border-light bg-light-surface p-6 sm:p-8 transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className={`text-[13px] font-bold px-3 py-1 rounded-full ${pillBg}`}
          >
            {session.time}
          </span>
          <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#1d1d1f]">{session.title}</h3>
        </div>

        <ul className="space-y-3">
          {session.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] text-[#6e6e73] leading-[1.65]"
            >
              <CheckIcon
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
      <section className="bg-hero-bg pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-[12px] font-semibold tracking-[0.1em] text-[#0077ed] uppercase mb-3">
            CURRICULUM
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-[-0.03em] mb-6">
            課程大綱
          </h1>
          <p className="text-[15px] text-hero-muted max-w-2xl leading-[1.65]">
            24 小時 = 4 天 x 6 小時。前半段學 AI 自動化（戴豪廷），後半段學 AI
            多媒體（王琮瑋）。每一堂都是動手做，不是坐著聽。
          </p>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-hero-card rounded-xl p-4 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="h-5 w-5 text-[#0077ed]" />
                  </div>
                  <p className="text-2xl font-black text-white">
                    {stat.value}
                    <span className="text-[13px] font-medium text-hero-muted ml-1">
                      {stat.unit}
                    </span>
                  </p>
                  <p className="text-[13px] text-hero-muted mt-0.5">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="bg-light-bg py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
            <SyllabusTOC />

            <div className="space-y-20">
              {days.map((day) => {
                const lineColor =
                  day.color === "blue"
                    ? "border-[#0071e3]/30"
                    : "border-[#7850ff]/30";

                return (
                  <div
                    key={day.number}
                    id={`day-${day.number}`}
                    className="scroll-mt-20"
                  >
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
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="bg-[#0071e3] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-[-0.03em]">
            準備好了嗎？
          </h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto text-[15px] leading-[1.65]">
            24 小時，從零到能用 AI 工作。學費 $0。
          </p>
          <CTAButton
            size="lg"
            variant="primary"
            label="免費報名"
            className="bg-white text-[#0071e3] hover:bg-slate-50 font-bold shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
