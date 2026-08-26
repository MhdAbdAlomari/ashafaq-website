"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { useLang } from "@/components/LanguageProvider";

const AUDIENCE_ICONS = [
  // Busy schedule — clock
  <svg key="a1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  // Employee at work — briefcase
  <svg key="a2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  // Family, multiple cars
  <svg key="a3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13c0-1 1-2 2-2h2l2-4h6l2 4h2c1 0 2 1 2 2v4h-2l-1 2H6l-1-2H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>,
  // Home
  <svg key="a4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>,
  // Calendar — schedule ahead
  <svg key="a5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
];

export default function MobileWashClient() {
  const { dict } = useLang();
  const m = dict.mobileWashPage;

  return (
    <>
      <PageHero eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle} />

      {/* How it works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-7 sm:p-9"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
              {m.howTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
              {m.howBody}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
              {m.audienceTitle}
            </h2>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {m.audience.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                className="card rounded-2xl p-5 text-center hover:border-[#DDE7FF] transition-colors"
              >
                <div className="mx-auto w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
                  <span className="w-6 h-6 block">
                    {AUDIENCE_ICONS[i % AUDIENCE_ICONS.length]}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#0B1F3A] leading-snug">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coverage note + Primary CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-7 sm:p-9"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {m.coverageTitle}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
              {m.coverageBody}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/app/" className="btn-primary text-sm">
              {m.bookInApp}
            </Link>
            <Link href="/services/" className="btn-secondary text-sm">
              {dict.nav.services}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Full-guide secondary CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog/mobile-car-wash-riyadh/"
              className="card rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:border-[#DDE7FF] transition-colors group"
            >
              <div className="min-w-0">
                <span className="eyebrow">{m.guideEyebrow}</span>
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-[#0B1F3A]">
                  {m.guideTitle}
                </h3>
                <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                  {m.guideExcerpt}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 h-11 px-5 rounded-full border border-[#0B1F3A] text-[#0B1F3A] font-semibold text-sm bg-white group-hover:bg-[#F5F7FA] transition-colors">
                {m.guideCta}
                <span>→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
