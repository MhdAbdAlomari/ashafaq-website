"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import type {
  BlogArticle,
  Paragraph,
  ParagraphSegment,
  LinkSegment,
} from "@/lib/blog";
import { BRANCHES } from "@/lib/branches";

/**
 * Article body is Arabic-only by design (client-approved copy targeted at the
 * Riyadh Arabic-speaking market). The <article> wrapper is force-set to
 * dir="rtl" lang="ar" so it always renders correctly regardless of the site's
 * global language toggle. Meta chrome (back link, tags, closing tagline
 * container spacing) inherits the site's global direction so the surrounding
 * UI stays consistent.
 */

function isLinkSegment(seg: ParagraphSegment): seg is LinkSegment {
  return typeof seg !== "string";
}

/**
 * Strip a leading Arabic "فرع " word from a branch name so the article list
 * reads as neighborhoods (e.g. "المونسية") rather than "فرع المونسية".
 */
function neighborhood(nameAr: string): string {
  return nameAr.replace(/^فرع\s+/, "");
}

function renderParagraph(p: Paragraph, key: number) {
  // Dynamic block: live list of branches from lib/branches.ts
  if (typeof p === "object" && "dynamic" in p) {
    if (p.dynamic === "branchList") {
      return (
        <ul
          key={key}
          className="grid sm:grid-cols-2 gap-2 my-2 list-none pr-0"
        >
          {BRANCHES.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/branches/${b.slug}/`}
                className="inline-flex items-center gap-2 text-[#0B1F3A] hover:text-[#1F5EFF] font-semibold text-[15px]"
              >
                <span
                  aria-hidden
                  className="w-1.5 h-1.5 rounded-full bg-[#1F5EFF]"
                />
                {neighborhood(b.nameAr)}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }

  if (typeof p === "string") {
    return (
      <p key={key} className="text-[#111827] text-[17px] sm:text-lg leading-[1.9]">
        {p}
      </p>
    );
  }
  return (
    <p key={key} className="text-[#111827] text-[17px] sm:text-lg leading-[1.9]">
      {p.segments.map((seg, i) =>
        isLinkSegment(seg) ? (
          <Link
            key={i}
            href={seg.href}
            className="text-[#1F5EFF] hover:text-[#1A50DA] underline decoration-[#1F5EFF]/30 underline-offset-4 hover:decoration-[#1F5EFF] transition"
          >
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg}</span>
        )
      )}
    </p>
  );
}

export default function ArticleClient({ article }: { article: BlogArticle }) {
  const { dict } = useLang();
  const b = dict.blogPage;

  return (
    <>
      {/* Article header — inherits site direction so the "back to blog" chevron flips correctly */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-10 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA] mb-6"
            >
              <span>←</span>
              {b.backToBlog}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Article body — force RTL/AR because the copy is Arabic-only */}
      <article
        dir="rtl"
        lang="ar"
        className="pb-16 sm:pb-24 bg-white"
      >
        <div className="max-w-[72ch] mx-auto px-5 sm:px-8">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="inline-flex items-center px-3 h-6 rounded-full bg-[#EAF1FF] text-[#1F5EFF] text-[11px] font-semibold">
              {article.category}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.25]">
              {article.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#667085] leading-relaxed">
              {article.excerpt}
            </p>
          </motion.header>

          {article.featuredImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 relative rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_20px_60px_-30px_rgba(11,31,58,0.25)] aspect-[16/9]"
            >
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 768px) 72ch, 100vw"
                className="object-cover"
              />
            </motion.div>
          )}

          {article.body ? (
            <div className="mt-10 space-y-10">
              {article.body.sections.map((section, si) => (
                <section key={si} className="space-y-5">
                  {section.heading && (
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-snug">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((p, pi) => renderParagraph(p, pi))}
                </section>
              ))}

              {article.body.closingLine && (
                <p className="mt-12 pt-8 border-t border-[#E6EAF2] text-center italic text-lg sm:text-xl font-semibold text-[#0B1F3A]">
                  {article.body.closingLine}
                </p>
              )}

              {article.body.related && (
                <aside className="mt-12">
                  <h3 className="text-base font-bold text-[#0B1F3A]">
                    {article.body.related.title}
                  </h3>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                    {article.body.related.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="card rounded-2xl px-5 py-4 flex items-center justify-between gap-3 hover:border-[#DDE7FF] transition-colors group"
                        >
                          <span className="text-sm font-semibold text-[#0B1F3A]">
                            {l.label}
                          </span>
                          <span
                            aria-hidden
                            className="text-[#1F5EFF] group-hover:translate-x-0 transition-transform"
                          >
                            ←
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
          ) : (
            <div className="mt-10">
              {/* TODO: full article body added in next pass */}
              <p className="text-[#667085] text-base leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
