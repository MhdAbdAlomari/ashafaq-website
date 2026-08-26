"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { TESTIMONIAL_CATEGORIES } from "@/lib/testimonials";

/**
 * Renders real customer testimonials grouped by category (quality / mobile /
 * service). Quotes and category titles are Arabic-only by design — the source
 * platforms are Arabic (App Store, Instagram, Snapchat). Each category block
 * and each individual quote card forces dir="rtl" lang="ar" regardless of the
 * site's language toggle, so the Arabic reads correctly even for EN visitors.
 *
 * No names, no per-quote star ratings — none were recorded with the quotes,
 * and fabricating them would be dishonest. The defensive empty-state branch
 * remains in case TESTIMONIAL_CATEGORIES is ever cleared.
 */
export default function Testimonials() {
  const { dict } = useLang();
  const t = dict.testimonials;
  const hasReviews = TESTIMONIAL_CATEGORIES.length > 0;

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
          <div className="mt-14 space-y-14 sm:space-y-16">
            {TESTIMONIAL_CATEGORIES.map((cat, ci) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
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
                      transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
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
              </motion.div>
            ))}
          </div>
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
