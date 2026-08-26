"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Companies from "@/components/Companies";
import { useLang } from "@/components/LanguageProvider";

export default function FleetClient() {
  const { dict } = useLang();
  const f = dict.fleetPage;

  return (
    <>
      <PageHero eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />
      <Companies hideHeader />

      {/* Checklist — corporate dark navy block for anchor weight */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_-30px_rgba(11,31,58,0.5)]"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-[1.2]">
              {f.checklistTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
              {f.checklistIntro}
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {f.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="w-6 h-6 shrink-0 rounded-full border border-white/25 grid place-items-center text-white text-xs font-bold"
                  >
                    ✓
                  </span>
                  <span className="text-sm sm:text-[15px] text-white leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Pricing-varies note — minimal card on white */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-7 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {f.pricingNoteTitle}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
              {f.pricingNoteBody}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents & resources — PDF downloads (secondary style, not primary CTA) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-7 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {f.documentsTitle}
            </h3>
            <p className="mt-2 text-sm text-[#667085]">
              {f.documentsSubtitle}
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="/images/ashafaq_companies_brochure-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 h-12 px-5 rounded-full border border-[#E6EAF2] bg-white text-[#0B1F3A] font-semibold text-sm hover:bg-[#F5F7FA] hover:border-[#DDE7FF] transition-colors"
              >
                <span className="inline-flex items-center gap-2 min-w-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[#1F5EFF]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                  <span className="truncate">{f.brochureLabel}</span>
                </span>
                <span className="shrink-0 text-[10px] font-semibold text-[#667085] uppercase tracking-wider">PDF</span>
              </a>
              <a
                href="/images/Fleet%20Subscription.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 h-12 px-5 rounded-full border border-[#E6EAF2] bg-white text-[#0B1F3A] font-semibold text-sm hover:bg-[#F5F7FA] hover:border-[#DDE7FF] transition-colors"
              >
                <span className="inline-flex items-center gap-2 min-w-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[#1F5EFF]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                  <span className="truncate">{f.subscriptionLabel}</span>
                </span>
                <span className="shrink-0 text-[10px] font-semibold text-[#667085] uppercase tracking-wider">PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-guide secondary CTA — matches /prices and /branches treatment */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog/fleet-car-wash-riyadh/"
              className="card rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:border-[#DDE7FF] transition-colors group"
            >
              <div className="min-w-0">
                <span className="eyebrow">{f.guideEyebrow}</span>
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-[#0B1F3A]">
                  {f.guideTitle}
                </h3>
                <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                  {f.guideExcerpt}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 h-11 px-5 rounded-full border border-[#0B1F3A] text-[#0B1F3A] font-semibold text-sm bg-white group-hover:bg-[#F5F7FA] transition-colors">
                {f.guideCta}
                <span>→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
