import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常見問題",
  description: "關於 AI 數位素養實戰班的常見問題：學費、設備需求、課程內容、報名方式等。",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
