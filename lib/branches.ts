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
  /** Optional: verified street/postal address (AR). Leave undefined until officially confirmed — do NOT invent. */
  address?: string;
  /** Optional: verified street/postal address (EN). */
  addressEn?: string;
  /** Optional: verified nearby landmark (AR). Leave undefined until officially confirmed — do NOT invent. */
  landmark?: string;
  /** Optional: verified nearby landmark (EN). */
  landmarkEn?: string;
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
/**
 * Derive a consistent Google Maps place URL from lat/lng — used for the
 * "open in Google Maps" branch card action. Kept as a helper so branch
 * coordinates remain the single source of truth (any old hand-written
 * place URLs are gone).
 */
function mapsUrlFor(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

export const BRANCHES: Branch[] = [
  {
    id: "al-nahdah",
    slug: "al-nahdah",
    nameAr: "فرع النهضة",
    nameEn: "Al Nahdah Branch",
    lat: 24.759859212874538,
    lng: 46.83212793031103,
    mapsUrl: mapsUrlFor(24.759859212874538, 46.83212793031103),
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
    lat: 24.596211000248,
    lng: 46.782726868987,
    mapsUrl: mapsUrlFor(24.596211000248, 46.782726868987),
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
    lat: 24.80126398855,
    lng: 46.86971694231,
    mapsUrl: mapsUrlFor(24.80126398855, 46.86971694231),
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
    // Manager-corrected coordinates (previous 24.7288, 46.6438 were wrong).
    lat: 24.83595972203233,
    lng: 46.764196263438826,
    mapsUrl: mapsUrlFor(24.83595972203233, 46.764196263438826),
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
    lat: 24.715623607735,
    lng: 46.798729598522,
    mapsUrl: mapsUrlFor(24.715623607735, 46.798729598522),
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
    lat: 24.672797140752,
    lng: 46.815297603607,
    mapsUrl: mapsUrlFor(24.672797140752, 46.815297603607),
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
    lat: 24.583414692971,
    lng: 46.601438373327,
    mapsUrl: mapsUrlFor(24.583414692971, 46.601438373327),
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
    lat: 24.547537943462,
    lng: 46.675007343292,
    mapsUrl: mapsUrlFor(24.547537943462, 46.675007343292),
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
    lat: 24.558786793018,
    lng: 46.757209541247,
    mapsUrl: mapsUrlFor(24.558786793018, 46.757209541247),
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
    lat: 24.582543936816,
    lng: 46.633476018906,
    mapsUrl: mapsUrlFor(24.582543936816, 46.633476018906),
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
    lat: 24.55225535480666,
    lng: 46.57029028650691,
    mapsUrl: mapsUrlFor(24.55225535480666, 46.57029028650691),
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
 * Formatted branch count string. Currently just the exact number — the
 * dataset is the total, not a floor, per manager instruction: if the count
 * ever becomes larger than what's listed, the extra branches must be added
 * to BRANCHES rather than represented as a "+" suffix.
 */
export const BRANCH_COUNT_DISPLAY = `${BRANCHES.length}`;

/** Look up a branch by its URL slug. */
export function getBranchBySlug(slug: string): Branch | undefined {
  return BRANCHES.find((b) => b.slug === slug);
}

/**
 * Find the nearest branch to a given lat/lng using Euclidean distance —
 * accurate enough at Riyadh scale (no haversine needed). Used by the
 * "حدد أقرب فرع" (find nearest branch) UI on /branches.
 */
export function findNearestBranch(lat: number, lng: number): Branch {
  let best = BRANCHES[0];
  let bestD = Number.POSITIVE_INFINITY;
  for (const b of BRANCHES) {
    const d = Math.hypot(b.lat - lat, b.lng - lng);
    if (d < bestD) {
      bestD = d;
      best = b;
    }
  }
  return best;
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
