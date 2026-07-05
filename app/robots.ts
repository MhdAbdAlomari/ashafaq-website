import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://landing.ashafaq-wash.net/ar/sitemap.xml",
    host: "https://landing.ashafaq-wash.net",
  };
}
