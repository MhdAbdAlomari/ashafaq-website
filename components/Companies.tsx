"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { CONTACT } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export default function Companies({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const { dict } = useLang();
  const c = dict.companies;

  return (
    <section
      id="companies"
      className={`relative overflow-hidden bg-[#F5F7FA] ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-28 lg:py-36"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="eyebrow">{c.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1">
              {c.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#667085] leading-relaxed">
              {c.subtitle}
            </p>
          </motion.div>
        )}

        {/* Block 1 — Billing */}
        <div className={hideHeader ? "" : "mt-16"}>
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
            {c.billingHeading}
          </h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6 sm:gap-8">
            {c.billing.map((b, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-3xl card p-7 sm:p-8 hover:-translate-y-1 hover:border-[#DDE7FF] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1F5EFF] grid place-items-center text-white text-sm font-bold shadow-[0_6px_16px_-6px_rgba(31,94,255,0.45)]">
                  {i + 1}
                </div>
                <h4 className="mt-5 text-lg font-bold text-[#0B1F3A]">
                  {b.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                  {b.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Block 2 — Channels */}
        <div className="mt-16">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
            {c.channelsHeading}
          </h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-5 sm:gap-6">
            {c.channels.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl card p-6 hover:border-[#DDE7FF] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="mt-4 text-base font-bold text-[#0B1F3A]">
                  {ch.title}
                </div>
                <div className="mt-2 text-sm text-[#667085] leading-snug">
                  {ch.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 3 — Vehicle sizes strip */}
        <div className="mt-16">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
            {c.sizesHeading}
          </h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
            {c.sizes.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                className="rounded-2xl card p-4 flex flex-col items-center text-center hover:border-[#DDE7FF] transition-colors"
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
                <div className="mt-3 text-xs sm:text-sm font-semibold text-[#0B1F3A]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 4 — Management features */}
        <div className="mt-16">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
            {c.featuresHeading}
          </h3>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {c.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl card"
              >
                <span className="w-8 h-8 shrink-0 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-sm sm:text-[15px] text-[#0B1F3A] leading-relaxed">
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
          className="mt-16 rounded-3xl card p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-start"
        >
          <div className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
            {c.ctaHeading}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("whatsapp_click", { source: "fleet_cta" });
                trackEvent("fleet_quote_request", { channel: "whatsapp" });
              }}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1FBA57] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              {c.ctaWhatsapp} {CONTACT.phone}
            </a>
            <a
              href={CONTACT.tel}
              onClick={() => {
                trackEvent("phone_call_click", { source: "fleet_cta" });
                trackEvent("fleet_quote_request", { channel: "phone" });
              }}
              className="btn-primary text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {c.ctaCall} <span dir="ltr">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.mailto}
              onClick={() => trackEvent("fleet_quote_request", { channel: "email" })}
              className="btn-secondary text-sm"
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
