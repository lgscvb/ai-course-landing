import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI 數位素養實戰班 — 免費 24 小時 AI 自動化課程",
    template: "%s | AI 數位素養實戰班",
  },
  description:
    "經濟部全額補助、學費 $0。24 小時實戰課程，非工程師也能學會用 AI 自動化工作流程、建立網站、管理知識庫。",
  keywords: ["AI 課程", "Claude Code", "AI 自動化", "數位素養", "免費課程", "經濟部補助", "產業人才投資方案"],
  openGraph: {
    title: "AI 數位素養實戰班 — 免費 24 小時課程",
    description: "政府出錢、免費上課、現場帶走成品。非工程師也能用 AI 真正動手做事。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
