import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | الشفق",
  description:
    "إجابات على الأسئلة الأكثر شيوعاً عن غسيل السيارات لدى الشفق: الأسعار، الخدمات، الفروع، التطبيق، الأساطيل، والمزيد.",
  alternates: { canonical: "/faq/" },
};

export default function Page() {
  return <FaqClient />;
}
