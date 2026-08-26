import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "الخدمات — غسيل خارجي وداخلي | الشفق",
  description:
    "تعرف على خدمات غسيل السيارات لدى الشفق: غسيل خارجي، غسيل داخلي وخارجي، ولمسة الشفق المجانية مع كل غسلة.",
  alternates: { canonical: "/services/" },
};

export default function Page() {
  return <ServicesClient />;
}
