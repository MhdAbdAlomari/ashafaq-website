import type { Metadata } from "next";
import BranchesClient from "./BranchesClient";

export const metadata: Metadata = {
  title: "فروع الشفق في الرياض | الشفق",
  description:
    "أكثر من 11 فرعاً موزعة في أرجاء الرياض. اعثر على أقرب فرع لك مع الخريطة والاتجاهات.",
  alternates: { canonical: "/branches/" },
};

export default function Page() {
  return <BranchesClient />;
}
