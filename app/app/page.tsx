import type { Metadata } from "next";
import AppPageClient from "./AppPageClient";

export const metadata: Metadata = {
  title: "تطبيق الشفق | الشفق",
  description:
    "احجز غسيل سيارتك من هاتفك خلال ثوانٍ، وتابع طلبك لحظة بلحظة، وأدر مدفوعاتك من تطبيق الشفق.",
  alternates: { canonical: "/app/" },
};

export default function Page() {
  return <AppPageClient />;
}
