import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://ashafaq-wash.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "الشفق لغسيل السيارات | Ashafaq Car Wash",
    template: "%s | الشفق لغسيل السيارات",
  },
  description:
    "الشفق لغسيل السيارات: غسيل احترافي، تلميع، وخدمة متنقلة في الرياض. أكثر من 11 فرع. جودة موثوقة وخدمة احترافية. حمّل التطبيق واحجز الآن.",
  keywords: [
    "غسيل سيارات الرياض",
    "غسيل سيارات متنقل",
    "الشفق لغسيل السيارات",
    "مغسلة سيارات الرياض",
    "غسيل سيارات منزلي",
    "Ashafaq Car Wash",
    "car wash Riyadh",
    "mobile car wash Saudi Arabia",
  ],
  authors: [{ name: "Ashafaq Car Wash" }],
  creator: "Ashafaq Car Wash",
  publisher: "Ashafaq Car Wash",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Ashafaq Car Wash",
    title: "الشفق لغسيل السيارات | Ashafaq Car Wash",
    description:
      "غسيل سيارات احترافي في الرياض — أكثر من 11 فرع وخدمة غسيل متنقلة. جودة موثوقة وخدمة احترافية.",
    images: [
      {
        url: "/images/Logo1.png",
        width: 1200,
        height: 630,
        alt: "Ashafaq Car Wash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الشفق لغسيل السيارات | Ashafaq Car Wash",
    description:
      "غسيل سيارات احترافي وخدمة متنقلة في الرياض. حمّل التطبيق واحجز الآن.",
    images: ["/images/Logo1.png"],
    site: "@AshafaqWash",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Ashafaq Car Wash",
      alternateName: "الشفق لغسيل السيارات",
      inLanguage: ["ar", "en"],
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Ashafaq Car Wash",
  alternateName: "الشفق لغسيل السيارات",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Logo_white.png`,
  image: `${SITE_URL}/images/Logo_white.png`,
  description:
    "Leading Saudi car wash brand offering professional hand washing, detailing, polishing, and mobile car wash service across Riyadh.",
  foundingDate: "2017",
  email: "ashafaq.wash@gmail.com",
  telephone: "+966114787878",
  areaServed: { "@type": "City", name: "Riyadh" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressLocality: "Riyadh",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+966114787878",
      email: "ashafaq.wash@gmail.com",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"],
    },
  ],
  sameAs: [
    "https://x.com/AshafaqWash",
    "https://www.instagram.com/ashafaq_wash/",
    "https://www.tiktok.com/@ashafaq_wash",
    "https://www.snapchat.com/@ashafaq_wash",
    "https://www.facebook.com/twilightwash",
  ],
  potentialAction: [
    {
      "@type": "DownloadAction",
      target:
        "https://apps.apple.com/sa/app/ashafaq-%D8%A7%D9%84%D8%B4%D9%81%D9%82-%D9%84%D8%BA%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/id6748883105",
    },
    {
      "@type": "DownloadAction",
      target:
        "https://play.google.com/store/apps/details?id=com.ashafaq.wash",
    },
  ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-[#111827] antialiased font-sans">
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="relative overflow-x-clip">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
