"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

const ICONS = [
  // Hand washing
  <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13c0-1 1-2 2-2h2l2-4h6l2 4h2c1 0 2 1 2 2v4h-2l-1 2H6l-1-2H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/><path d="M16 7l-1-2"/></svg>,
  // Interior + exterior
  <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 12h18M12 5v14"/></svg>,
  // Polish/shine
  <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5z"/><path d="M18 16l.9 2.2L21 19l-2.1.8L18 22l-.9-2.2L15 19l2.1-.8z"/></svg>,
  // Shield
  <svg key="i4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>,
  // Mobile (location pin)
  <svg key="i5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  // Branches (building)
  <svg key="i6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 11h.01M15 11h.01"/></svg>,
];

export default function Services() {
  const { dict } = useLang();
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-[#2E93B9] uppercase">
            {dict.nav.services}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            {dict.services.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {dict.services.items.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group relative rounded-3xl glass p-7 sm:p-8 overflow-hidden hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-gradient-soft" />
              <div className="absolute -top-24 -end-24 w-56 h-56 rounded-full bg-brand-gradient opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center text-white shadow-lg shadow-[#2E93B9]/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="w-7 h-7 block">{ICONS[i % ICONS.length]}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {s.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#7fcfe8] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 rtl:translate-x-2 rtl:group-hover:translate-x-0 transition-all duration-500">
                  <span>→</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2E93B9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
