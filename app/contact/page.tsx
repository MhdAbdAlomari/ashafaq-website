import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "تواصل معنا | الشفق",
  description:
    "تواصل مع فريق الشفق عبر الاتصال أو واتساب أو البريد الإلكتروني، أو أرسل لنا رسالة مباشرة من نموذج التواصل.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return <ContactPageClient />;
}
