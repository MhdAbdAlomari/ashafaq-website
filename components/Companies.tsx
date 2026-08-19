"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { CONTACT } from "@/lib/i18n";

export default function Companies() {
  const { dict } = useLang();
  const c = dict.companies;

  return (
    <section
      id="companies"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -end-32 w-[40rem] h-[40rem] bg-[#1B1F52] opacity-30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 -start-32 w-[36rem] h-[36rem] bg-[#2E93B9] opacity-25 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-[#2E93B9] uppercase">
            {c.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1">
            {c.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        {/* Block 1 — Billing */}
        <div className="mt-14">
          <h3 className="text-lg sm:text-xl font-bold text-white/90">
            {c.billingHeading}
          </h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {c.billing.map((b, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-3xl glass p-7 sm:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-gradient-soft" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gradient grid place-items-center text-white shadow-lg shadow-[#2E93B9]/25 text-sm font-bold">
                    {i + 1}
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-white">
                    {b.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {b.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Block 2 — Channels */}
        <div className="mt-14">
          <h3 className="text-lg sm:text-xl font-bold text-white/90">
            {c.channelsHeading}
          </h3>
          <div className="mt-5 grid sm:grid-cols-3 gap-4 sm:gap-5">
            {c.channels.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl glass p-5 hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gradient grid place-items-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="mt-4 text-base font-bold text-white">
                  {ch.title}
                </div>
                <div className="mt-2 text-sm text-white/65 leading-snug">
                  {ch.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 3 — Vehicle sizes strip */}
        <div className="mt-14">
          <h3 className="text-lg sm:text-xl font-bold text-white/90">
            {c.sizesHeading}
          </h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {c.sizes.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                className="rounded-2xl glass p-4 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
              >
                <div className="relative w-full aspect-[2.6/1]">
                  <Image
                    src={s.src}
                    alt={s.label}
                    fill
                    sizes="(min-width: 1024px) 12rem, (min-width: 640px) 30vw, 45vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-white/85">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 4 — Management features */}
        <div className="mt-14">
          <h3 className="text-lg sm:text-xl font-bold text-white/90">
            {c.featuresHeading}
          </h3>
          <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {c.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl glass hover:bg-white/5 transition-colors"
              >
                <span className="w-8 h-8 shrink-0 rounded-xl bg-brand-gradient grid place-items-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm sm:text-[15px] text-white/90 leading-relaxed">
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl glass-strong glow-ring p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-start"
        >
          <div className="text-xl sm:text-2xl font-extrabold text-gradient">
            {c.ctaHeading}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="shine inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold text-sm hover:scale-[1.03] transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              {c.ctaWhatsapp} {CONTACT.phone}
            </a>
            <a
              href={CONTACT.tel}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand-gradient glow-ring text-white font-bold text-sm hover:scale-[1.03] transition-transform"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {c.ctaCall} <span dir="ltr">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.mailto}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full glass text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {c.ctaEmail}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
