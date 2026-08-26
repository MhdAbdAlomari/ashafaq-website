"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { useLang } from "@/components/LanguageProvider";

const TOUCH_ICONS = [
  <svg key="t1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>,
  <svg key="t2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v16M6 12h6a4 4 0 0 0 0-8H8"/><circle cx="18" cy="18" r="2"/></svg>,
  <svg key="t3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-4 4-8 4-8z"/><path d="M12 15v6"/></svg>,
];

export default function ServicesClient() {
  const { dict } = useLang();
  const s = dict.servicesPage;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {s.tiers.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 sm:p-10 rounded-3xl hover:border-[#DDE7FF] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-lg font-bold">
                  {i + 1}
                </div>
                <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
                  {t.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
                  {t.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-6 h-6 shrink-0 rounded-full bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm sm:text-[15px] text-[#0B1F3A] leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/prices/" className="btn-primary text-sm">
                    {s.viewPrices}
                  </Link>
                  <Link href="/contact/" className="btn-secondary text-sm">
                    {s.bookNow}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="eyebrow">{s.touchesEyebrow}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2]">
              {s.touchesTitle}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#667085]">
              {s.touchesSubtitle}
            </p>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
            {s.touches.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card rounded-2xl p-6 text-center hover:border-[#DDE7FF] transition-colors"
              >
                <div className="mx-auto w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
                  <span className="w-6 h-6 block">{TOUCH_ICONS[i % TOUCH_ICONS.length]}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0B1F3A]">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
