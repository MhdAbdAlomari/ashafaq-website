export type Branch = {
  id: string;
  /** Kebab-case latin slug used in URLs (/branches/[slug]/). Mirrors `id` today but kept as a distinct field so URL routing can diverge from internal IDs later without breaking data references. */
  slug: string;
  nameAr: string;
  nameEn: string;
  lat: number;
  lng: number;
  /** Existing google.com/maps place URL (already stored per branch). */
  mapsUrl: string;
  /** Real operating hours (AR). */
  hours: string;
  /** Real operating hours (EN). */
  hoursEn: string;
  /** Unique per-branch Arabic description used on the branch page + generateMetadata + JSON-LD. */
  description: string;
  /** Natural English translation of `description`. */
  descriptionEn: string;
  /** Optional: which service tiers this branch offers. Omit to fall back to the standard tier list on /services/. */
  servicesAvailable?: string[];
  /** Optional: path under public/images for a branch-specific photo. Leave undefined to use the site-wide fallback. */
  photoSrc?: string;
  /** Optional: direct URL to this branch's Google reviews. Leave undefined; render only when populated. */
  googleReviewsUrl?: string;
  /** Optional: prefer this Google Maps URL for the "Open directions" button. If undefined, a directions URL is derived from lat/lng at render time. */
  googleMapsUrl?: string;
};

/**
 * SINGLE hardcoded source of the site's phone digits. Every other formatting
 * (tel:, wa.me, +E164, display) is derived from this one string, both in
 * UNIFIED_CONTACT below and in `CONTACT` (lib/i18n.ts). If the number ever
 * changes, edit this one line — nowhere else in the codebase.
 *
 * Lives here (not lib/i18n.ts) because lib/i18n.ts already imports from this
 * file for BRANCH_COUNT; keeping the raw source here avoids a circular import.
 */
export const RAW_PHONE_LOCAL = "0114787878";
export const RAW_PHONE_INTL = "966" + RAW_PHONE_LOCAL.replace(/^0/, "");

/**
 * Unified customer-service + WhatsApp number, identical across every branch.
 * Do NOT phrase branch-facing UI as "رقم فرع [X]" — this is one shared number.
 */
export const UNIFIED_CONTACT = {
  local: RAW_PHONE_LOCAL,
  tel: `tel:${RAW_PHONE_LOCAL}`,
  whatsapp: `https://wa.me/${RAW_PHONE_INTL}`,
  telephoneE164: `+${RAW_PHONE_INTL}`,
};

const DEFAULT_HOURS_AR = "8:00 ص – 12:00 ظ، 4:00 م – 12:00 ص";
const DEFAULT_HOURS_EN = "8:00 AM – 12:00 PM, 4:00 PM – 12:00 AM";
const H24_AR = "24 ساعة";
const H24_EN = "Open 24 hours";

/**
 * SINGLE SOURCE OF TRUTH for the branch count everywhere in the UI/SEO/JSON-LD.
 * Never hardcode a number like "11" or "+11" — always import this or compute
 * from BRANCHES.length directly so adding/removing a branch propagates
 * automatically to every place the count is displayed.
 */
export const BRANCHES: Branch[] = [
  {
    id: "al-nahdah",
    slug: "al-nahdah",
    nameAr: "فرع النهضة",
    nameEn: "Al Nahdah Branch",
    lat: 24.7595898,
    lng: 46.8321258,
    mapsUrl:
      "https://www.google.com/maps/place/24%C2%B045'34.5%22N+46%C2%B049'55.7%22E/@24.7595898,46.8343145,753m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d24.7595898!4d46.8321258",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-nahdah.jpeg",
    description:
      "فرع الشفق في النهضة يوفر خدمات غسيل السيارات الداخلي والخارجي لسكان الحي والمناطق القريبة في شرق الرياض، مع اهتمام بالنظافة والتجفيف واللمسات النهائية لسيارتك.",
    descriptionEn:
      "Our Al Nahdah branch serves residents of the neighborhood and nearby areas in east Riyadh with full interior and exterior car washing, paying close attention to cleanliness, drying, and the finishing touches your car deserves.",
  },
  {
    id: "al-aziziyah",
    slug: "al-aziziyah",
    nameAr: "فرع العزيزية",
    nameEn: "Al Aziziyah Branch",
    lat: 24.596211000247703,
    lng: 46.78272686898708,
    mapsUrl:
      "https://www.google.com/maps?q=24.596211000247703,46.78272686898708",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-aziziyah.jpeg",
    description:
      "مغاسل الشفق للسيارات – فرع العزيزية يخدم سكان العزيزية والأحياء القريبة في جنوب الرياض، ويوفر خدمات الغسيل الداخلي والخارجي مع عناية متكاملة بالسيارة.",
    descriptionEn:
      "Ashafaq Car Wash – Al Aziziyah serves residents of Al Aziziyah and the nearby neighborhoods in south Riyadh, offering full interior and exterior car washing with end-to-end care for your vehicle.",
  },
  {
    id: "al-nadwah",
    slug: "al-nadwah",
    nameAr: "فرع الندوة",
    nameEn: "Al Nadwah Branch",
    lat: 24.80126398855043,
    lng: 46.86971694231033,
    mapsUrl:
      "https://www.google.com/maps?q=24.80126398855043,46.86971694231033",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-nadwah.jpeg",
    description:
      "فرع الشفق في الندوة يقدم خدمات غسيل السيارات الداخلي والخارجي لسكان الحي والأحياء القريبة، مع اهتمام بجودة التنظيف وسهولة الوصول إلى الفرع.",
    descriptionEn:
      "Our Al Nadwah branch offers interior and exterior car washing for residents of the neighborhood and surrounding areas, with a focus on cleaning quality and easy access to the branch.",
  },
  {
    id: "al-munsiyah",
    slug: "al-munsiyah",
    nameAr: "فرع المونسية",
    nameEn: "Al Munsiyah Branch",
    lat: 24.728818530100067,
    lng: 46.6438438774883,
    mapsUrl:
      "https://www.google.com/maps?q=24.728818530100067,46.6438438774883",
    hours: H24_AR,
    hoursEn: H24_EN,
    photoSrc: "/images/ashafaq-branches/al-munsiyah.jpeg",
    description:
      "مغاسل الشفق للسيارات – فرع المونسية يخدم سكان المونسية والأحياء القريبة في شرق الرياض، ويقدم خدمات الغسيل الداخلي والخارجي مع العناية بالتفاصيل. الفرع يعمل 24 ساعة لتكون الخدمة متاحة في الوقت المناسب لك.",
    descriptionEn:
      "Ashafaq Car Wash – Al Munsiyah serves residents of Al Munsiyah and the nearby neighborhoods in east Riyadh with full interior and exterior car washing and careful attention to the details. The branch runs 24 hours a day so the service is available whenever it suits you.",
  },
  {
    id: "al-manar",
    slug: "al-manar",
    nameAr: "فرع المنار",
    nameEn: "Al Manar Branch",
    lat: 24.71562360773457,
    lng: 46.798729598522186,
    mapsUrl:
      "https://www.google.com/maps?q=24.71562360773457,46.798729598522186",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-manar.jpeg",
    description:
      "مغاسل الشفق – فرع المنار يقدم تجربة غسيل سيارات متكاملة في شرق الرياض، تشمل العناية بالسيارة من الداخل والخارج مع سهولة الوصول للفرع من الأحياء المجاورة.",
    descriptionEn:
      "Ashafaq – Al Manar delivers a full car-wash experience in east Riyadh, covering both interior and exterior care with easy access from the surrounding neighborhoods.",
  },
  {
    id: "al-fayha",
    slug: "al-fayha",
    nameAr: "فرع الفيحاء",
    nameEn: "Al Fayha Branch",
    lat: 24.67279714075207,
    lng: 46.81529760360718,
    mapsUrl:
      "https://www.google.com/maps?q=24.67279714075207,46.81529760360718",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-fayha.jpeg",
    description:
      "يخدم فرع الشفق في الفيحاء سكان الحي والمناطق القريبة، ويقدم خدمات غسيل السيارات الداخلي والخارجي مع التركيز على النظافة والاهتمام بالتفاصيل في كل زيارة.",
    descriptionEn:
      "Our Al Fayha branch serves residents of the neighborhood and nearby areas with interior and exterior car washing, focused on cleanliness and attention to detail on every visit.",
  },
  {
    id: "al-uraija",
    slug: "al-uraija",
    nameAr: "فرع العريجاء",
    nameEn: "Al Uraija Branch",
    lat: 24.583414692971363,
    lng: 46.601438373327255,
    mapsUrl:
      "https://www.google.com/maps?q=24.583414692971363,46.601438373327255",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-uraija.jpeg",
    description:
      "يخدم فرع الشفق في العريجاء سكان الحي والمناطق القريبة في غرب الرياض، ويقدم خدمات الغسيل الداخلي والخارجي مع اهتمام بالنظافة والتفاصيل التي تفرق عند استلام السيارة.",
    descriptionEn:
      "Our Al Uraija branch serves residents of the neighborhood and nearby areas in west Riyadh with interior and exterior car washing, attentive to the cleanliness and small details you notice the moment you pick up the car.",
  },
  {
    id: "al-shifa",
    slug: "al-shifa",
    nameAr: "فرع الشفاء",
    nameEn: "Al Shifa Branch",
    lat: 24.547537943461947,
    lng: 46.675007343292236,
    mapsUrl:
      "https://www.google.com/maps?q=24.547537943461947,46.675007343292236",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-shifa.jpeg",
    description:
      "فرع الشفق في الشفاء وجهة قريبة لخدمات غسيل السيارات في جنوب الرياض، ويقدم الغسيل الداخلي والخارجي مع الاهتمام بالتجفيف والنظافة والتفاصيل النهائية.",
    descriptionEn:
      "Our Al Shifa branch is a nearby destination for car-wash services in south Riyadh, offering interior and exterior washing with care for drying, cleanliness, and the finishing details.",
  },
  {
    id: "dar-al-baida",
    slug: "dar-al-baida",
    nameAr: "فرع الدار البيضاء",
    nameEn: "Dar Al Baida Branch",
    lat: 24.5587868,
    lng: 46.7572095,
    mapsUrl:
      "https://www.google.com/maps/place/24%C2%B033'31.6%22N+46%C2%B045'26.0%22E/@24.5587868,46.7593982,754m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d24.5587868!4d46.7572095",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/dar-al-baida.jpeg",
    description:
      "مغاسل الشفق – فرع الدار البيضاء يقدم خدمات غسيل السيارات لسكان جنوب الرياض، مع عناية بالسيارة من الداخل والخارج وتجربة خدمة واضحة وسهلة الوصول.",
    descriptionEn:
      "Ashafaq – Dar Al Baida offers car-wash services for residents of south Riyadh, caring for the vehicle inside and out with a clear, easy-to-reach service experience.",
  },
  {
    id: "al-badiah",
    slug: "al-badiah",
    nameAr: "فرع البديعة",
    nameEn: "Al Badiah Branch",
    lat: 24.58254393681625,
    lng: 46.63347601890564,
    mapsUrl:
      "https://www.google.com/maps?q=24.58254393681625,46.63347601890564",
    hours: H24_AR,
    hoursEn: H24_EN,
    photoSrc: "/images/ashafaq-branches/al-badiah.jpeg",
    description:
      "مغاسل الشفق للسيارات – فرع البديعة يقدم خدمات غسيل السيارات في غرب الرياض، مع العناية الداخلية والخارجية للسيارة. الفرع يعمل 24 ساعة لخدمة العملاء في مختلف الأوقات.",
    descriptionEn:
      "Ashafaq Car Wash – Al Badiah offers car-wash services in west Riyadh with full interior and exterior vehicle care. The branch runs 24 hours a day to serve customers at any time.",
  },
  {
    id: "al-tuwaiq",
    slug: "al-tuwaiq",
    nameAr: "فرع الطويق",
    nameEn: "Al Tuwaiq Branch",
    lat: 24.55219256532426,
    lng: 46.570284342375544,
    mapsUrl:
      "https://www.google.com/maps?q=24.55219256532426,46.570284342375544",
    hours: DEFAULT_HOURS_AR,
    hoursEn: DEFAULT_HOURS_EN,
    photoSrc: "/images/ashafaq-branches/al-tuwaiq.jpeg",
    description:
      "مغاسل الشفق للسيارات – فرع طويق يخدم سكان حي طويق والأحياء القريبة في غرب الرياض، ويقدم خدمات غسيل السيارات الداخلي والخارجي مع الاهتمام بالنظافة والتجفيف واللمسات النهائية لسيارتك.",
    descriptionEn:
      "Ashafaq Car Wash – Tuwaiq serves residents of Tuwaiq and the nearby neighborhoods in west Riyadh with full interior and exterior car washing, attentive to cleanliness, drying, and the finishing touches your car deserves.",
  },
];

/**
 * Rendered branch count — always derived from BRANCHES.length. Use this in UI
 * copy, JSON-LD, and metadata. Do not hardcode "11", "+11", or "١١" anywhere.
 */
export const BRANCH_COUNT = BRANCHES.length;

/**
 * Formatted branch count string with the "+" suffix used in stat chips.
 * Example: "10+".
 */
export const BRANCH_COUNT_DISPLAY = `${BRANCHES.length}+`;

/** Look up a branch by its URL slug. */
export function getBranchBySlug(slug: string): Branch | undefined {
  return BRANCHES.find((b) => b.slug === slug);
}

/**
 * Compose a Google Maps directions URL from coordinates. Used by branch pages
 * when a branch doesn't have an explicit `googleMapsUrl` for the "Open
 * directions" button.
 */
export function buildDirectionsUrl(b: Pick<Branch, "lat" | "lng" | "googleMapsUrl">): string {
  if (b.googleMapsUrl) return b.googleMapsUrl;
  return `https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`;
}

export const APP_LINKS = {
  ios: "https://apps.apple.com/sa/app/ashafaq-%D8%A7%D9%84%D8%B4%D9%81%D9%82-%D9%84%D8%BA%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/id6748883105",
  android: "https://play.google.com/store/apps/details?id=com.ashafaq.wash",
};

export const SOCIAL_LINKS = {
  x: "https://x.com/AshafaqWash",
  instagram: "https://www.instagram.com/ashafaq_wash/",
  tiktok: "https://www.tiktok.com/@ashafaq_wash",
  snapchat: "https://www.snapchat.com/@ashafaq_wash",
  facebook: "https://www.facebook.com/twilightwash",
};
