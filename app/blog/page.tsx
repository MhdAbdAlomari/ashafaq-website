import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "المدونة | الشفق",
  description:
    "مقالات ونصائح عملية حول العناية بالسيارات، الأسعار، الفروع، الغسيل المتنقل، وخدمات الأساطيل في الرياض.",
  alternates: { canonical: "/blog/" },
};

export default function Page() {
  return <BlogListClient />;
}
