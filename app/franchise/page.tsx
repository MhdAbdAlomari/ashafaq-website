import type { Metadata } from "next";
import FranchiseClient from "./FranchiseClient";

export const metadata: Metadata = {
  title: "الامتياز التجاري | استثمر مع الشفق",
  description:
    "استثمر مع علامة سعودية تنمو بثقة — الامتياز التجاري متاح في جميع مدن المملكة. تعرّف على ما يحصل عليه المستثمر وخطوات الانضمام، ثم قدّم طلبك.",
  alternates: { canonical: "/franchise/" },
  openGraph: {
    title: "الامتياز التجاري | استثمر مع الشفق",
    description:
      "استثمر مع علامة سعودية تنمو بثقة — الامتياز متاح في جميع مدن المملكة.",
    type: "website",
    images: [{ url: "/images/ashafaq-banner.png" }],
  },
};

export default function Page() {
  return <FranchiseClient />;
}
