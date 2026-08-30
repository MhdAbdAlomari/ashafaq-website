"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { withBranchCount } from "@/lib/i18n";

const ICONS = [
  // Hand washing
  <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13c0-1 1-2 2-2h2l2-4h6l2 4h2c1 0 2 1 2 2v4h-2l-1 2H6l-1-2H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/><path d="M16 7l-1-2"/></svg>,
  // Interior + exterior
  <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 12h18M12 5v14"/></svg>,
  // Mobile (location pin)
  <svg key="i5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  // Branches (building)
  <svg key="i6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 11h.01M15 11h.01"/></svg>,
];

export default function Services() {
  const { dict } = useLang();
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow">
            {dict.nav.services}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#667085]">
            {dict.services.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {dict.services.items.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className="group relative rounded-3xl card p-7 sm:p-8 overflow-hidden hover:-translate-y-1.5 hover:border-[#DDE7FF] transition-all duration-300"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#EAF1FF] grid place-items-center text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors duration-300">
                  <span className="w-7 h-7 block">{ICONS[i % ICONS.length]}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                  {withBranchCount(s.desc)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
