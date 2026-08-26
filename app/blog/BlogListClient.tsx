"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { useLang } from "@/components/LanguageProvider";
import { BLOG_ARTICLES } from "@/lib/blog";

export default function BlogListClient() {
  const { dict } = useLang();
  const b = dict.blogPage;

  return (
    <>
      <PageHero eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {BLOG_ARTICLES.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="card rounded-3xl p-6 sm:p-7 flex flex-col hover:border-[#DDE7FF] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="self-start inline-flex items-center px-3 h-6 rounded-full bg-[#EAF1FF] text-[#1F5EFF] text-[11px] font-semibold">
                  {a.category}
                </span>
                <h2 className="mt-4 text-lg sm:text-xl font-bold text-[#0B1F3A] leading-snug">
                  <Link href={`/blog/${a.slug}/`} className="hover:text-[#1F5EFF] transition-colors">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-[#667085] leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <Link
                  href={`/blog/${a.slug}/`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA] self-start"
                >
                  {b.readMore}
                  <span>→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
