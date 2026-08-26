import type { Metadata } from "next";
import FleetClient from "./FleetClient";

export const metadata: Metadata = {
  title: "غسيل أساطيل الشركات | الشفق",
  description:
    "نظام متكامل لغسيل سيارات الشركات في الرياض مع لوحة إدارة أسطول، تقارير قابلة للتصدير، ونظامي فوترة مرنين.",
  alternates: { canonical: "/fleet/" },
};

export default function Page() {
  return <FleetClient />;
}
