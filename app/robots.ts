import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://ashafaq-wash.net/sitemap.xml",
    host: "https://ashafaq-wash.net",
  };
}
