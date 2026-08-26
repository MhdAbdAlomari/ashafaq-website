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
  /** Optional: real operating hours. Do NOT invent — leave undefined if unknown. */
  hours?: string;
  /** Optional: which service tiers this branch offers. Omit to fall back to the standard tier list on /services/. */
  servicesAvailable?: string[];
  /** Optional: path under public/images for a branch-specific photo. Leave undefined to use the site-wide fallback. */
  photoSrc?: string;
  /** Optional: direct URL to this branch's Google reviews. Leave undefined; render only when populated. */
  googleReviewsUrl?: string;
  /** Optional: prefer this Google Maps URL for the "Open directions" button. If undefined, a directions URL is derived from lat/lng at render time. */
  googleMapsUrl?: string;
};

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
  },
  {
    id: "al-shifa",
    slug: "al-shifa",
    nameAr: "فرع الشفا",
    nameEn: "Al Shifa Branch",
    lat: 24.547537943461947,
    lng: 46.675007343292236,
    mapsUrl:
      "https://www.google.com/maps?q=24.547537943461947,46.675007343292236",
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
  },
];

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

