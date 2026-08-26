import type { Metadata } from "next";
import MobileWashClient from "./MobileWashClient";

export const metadata: Metadata = {
  title: "الغسيل المتنقل | الشفق",
  description:
    "خدمة غسيل السيارات المتنقلة في الرياض تصلك إلى موقعك بمعدات كاملة وفريق مدرّب.",
  alternates: { canonical: "/mobile-wash/" },
};

export default function Page() {
  return <MobileWashClient />;
}
