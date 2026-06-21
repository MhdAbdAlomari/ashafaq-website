import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ashafaq.com.sa";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ar: `${base}/`,
          en: `${base}/?lang=en`,
        },
      },
    },
  ];
}
