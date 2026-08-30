"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { TESTIMONIAL_CATEGORIES } from "@/lib/testimonials";

/**
 * Renders real customer testimonials grouped by category. Arabic-only quotes
 * (source platforms are Arabic) — each block forces dir="rtl" lang="ar".
 *
 * `preview` mode (used on the homepage) shows only the first 2 quotes as a
 * compact strip with a "عرض المزيد" toggle that expands the full categorized
 * view in place. Other placements default to the full view.
 */
export default function Testimonials({ preview = false }: { preview?: boolean } = {}) {
  const { dict } = useLang();
  const t = dict.testimonials;
  const hasReviews = TESTIMONIAL_CATEGORIES.length > 0;
  const [expanded, setExpanded] = useState(!preview);

  // Flattened first-two quotes for the preview strip
  const previewQuotes = TESTIMONIAL_CATEGORIES.flatMap((c) => c.quotes).slice(0, 2);

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-28 lg:py-32 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1">
            {t.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#667085]">
            {t.subtitle}
          </p>
        </motion.div>

        {hasReviews ? (
          <>
            {/* Preview strip — only when preview mode AND not yet expanded */}
            {preview && !expanded && (
              <div className="mt-12 max-w-4xl mx-auto">
                <ul className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  {previewQuotes.map((q, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="card rounded-2xl p-6 flex"
                      dir="rtl"
                      lang="ar"
                    >
                      <blockquote className="text-sm sm:text-[15px] text-[#0B1F3A] leading-[1.85]">
                        <span aria-hidden className="text-[#1F5EFF] text-2xl leading-none block mb-2">
                          &ldquo;
                        </span>
                        {q}
                      </blockquote>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#EAF1FF] text-[#1F5EFF] text-sm font-bold hover:bg-[#DDE7FF] transition-colors"
                  >
                    {t.showMore}
                    <span aria-hidden>↓</span>
                  </button>
                </div>
              </div>
            )}

            {/* Full categorized view — always in non-preview mode, or after expand */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={preview ? { opacity: 0, y: 20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-14 space-y-14 sm:space-y-16"
                >
                  {TESTIMONIAL_CATEGORIES.map((cat, ci) => (
                    <div
                      key={cat.id}
                      dir="rtl"
                      lang="ar"
                    >
                      <div className="flex items-start gap-3 flex-wrap">
                        <span aria-hidden className="text-2xl leading-none">
                          {cat.emoji}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
                            {cat.title}
                          </h3>
                          {cat.sourceNote && (
                            <p className="mt-1 text-xs text-[#667085]">
                              {cat.sourceNote}
                            </p>
                          )}
                        </div>
                      </div>

                      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {cat.quotes.map((q, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.4, delay: (i % 3) * 0.06 + ci * 0.02 }}
                            className="card rounded-2xl p-6 flex"
                            dir="rtl"
                            lang="ar"
                          >
                            <blockquote className="text-sm sm:text-[15px] text-[#0B1F3A] leading-[1.85]">
                              <span aria-hidden className="text-[#1F5EFF] text-2xl leading-none block mb-2">
                                &ldquo;
                              </span>
                              {q}
                            </blockquote>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {preview && (
                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white border border-[#E6EAF2] text-[#0B1F3A] text-sm font-bold hover:bg-[#F5F7FA] transition-colors"
                      >
                        {t.showLess}
                        <span aria-hidden>↑</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-xl mx-auto card rounded-3xl p-8 sm:p-10 text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {t.placeholder}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#667085] leading-relaxed">
              {t.placeholderSubtitle}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
