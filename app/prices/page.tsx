import type { Metadata } from "next";
import PricesClient from "./PricesClient";

export const metadata: Metadata = {
  title: "أسعار غسيل السيارات | الشفق",
  description:
    "أسعار غسيل السيارات لدى الشفق: الغسيل الخارجي من 20 ريالًا، والداخلي والخارجي من 30 حتى 40 ريالًا حسب حجم السيارة. أسعار ثابتة وواضحة.",
  alternates: { canonical: "/prices/" },
};

export default function Page() {
  return <PricesClient />;
}
