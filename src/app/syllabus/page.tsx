import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "課程大綱",
  description: "24 小時完整課程大綱：AI 自動化實戰 + AI 多媒體創作，4 天 x 6 小時密集訓練。",
};

const day1 = {
  title: "Day 1",
  subtitle: "認識 AI 的五感",
  instructor: "戴豪廷",
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
      title: "AI 的手腳 — 檔案操作與網站建立",
      items: [
        "CLI 操作概念：讓 AI 在你的電腦上「真的動手」",
        "從零建立一個公司網站（Code 模式實作）",
        "部署上線：有網址、別人打得開",
        "Domain / URL / API 基礎概念拆解",
      ],
    },
  ],
};

const day2 = {
  title: "Day 2",
  subtitle: "AI 自動化實戰",
  instructor: "戴豪廷",
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
};

const day3 = {
  title: "Day 3",
  subtitle: "AI 多媒體入門",
  instructor: "王琮瑋（Tobias）",
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
};

const day4 = {
  title: "Day 4",
  subtitle: "AI 多媒體進階 + 整合",
  instructor: "王琮瑋（Tobias）",
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
};

const days = [day1, day2, day3, day4];

export default function SyllabusPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">課程大綱</h1>
          <p className="text-lg text-indigo-200 max-w-2xl">
            24 小時 = 4 天 x 6 小時。前半段學 AI 自動化（戴豪廷），後半段學 AI 多媒體（王琮瑋）。
            每一堂都是動手做，不是坐著聽。
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {days.map((day, dayIndex) => (
              <div key={dayIndex}>
                {/* Day header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`flex-shrink-0 h-14 w-14 rounded-2xl flex items-center justify-center text-white font-black text-lg ${dayIndex < 2 ? "bg-indigo-600" : "bg-purple-600"}`}>
                    {day.title.replace("Day ", "")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{day.title}：{day.subtitle}</h2>
                    <p className="text-sm text-muted">講師：{day.instructor}</p>
                  </div>
                </div>

                {/* Sessions */}
                <div className="space-y-6 ml-7 border-l-2 border-gray-200 pl-10">
                  {day.sessions.map((session, si) => (
                    <div key={si} className="relative">
                      <div className="absolute -left-[2.85rem] top-1 h-4 w-4 rounded-full border-2 border-indigo-600 bg-white" />
                      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                            {session.time}
                          </span>
                          <h3 className="font-bold text-gray-900">{session.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {session.items.map((item, ii) => (
                            <li key={ii} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="h-4 w-4 mt-0.5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">準備好了嗎？</h2>
          <p className="text-muted mb-8">24 小時，從零到能用 AI 工作。學費 $0。</p>
          <CTAButton size="lg" />
        </div>
      </section>
    </>
  );
}
