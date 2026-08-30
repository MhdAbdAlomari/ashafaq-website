import type { MetadataRoute } from "next";
import { BLOG_ARTICLES } from "@/lib/blog";
import { BRANCHES } from "@/lib/branches";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ashafaq-wash.net";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/prices/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/branches/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fleet/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/app/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mobile-wash/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/franchise/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_ARTICLES.map((a) => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const branchRoutes: MetadataRoute.Sitemap = BRANCHES.map((b) => ({
    url: `${base}/branches/${b.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...branchRoutes, ...blogRoutes];
}
