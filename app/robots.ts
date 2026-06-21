import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://ashafaq.com.sa/sitemap.xml",
    host: "https://ashafaq.com.sa",
  };
}
