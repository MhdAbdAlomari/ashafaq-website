"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { APP_LINKS } from "@/lib/branches";
import { CONTACT } from "@/lib/i18n";

export default function Contact() {
  const { dict } = useLang();
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center bg-brand-gradient glow-ring"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-32 -start-32 w-96 h-96 bg-white opacity-10 blur-3xl rounded-full" />
            <div className="absolute -bottom-32 -end-32 w-96 h-96 bg-white opacity-10 blur-3xl rounded-full" />
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] pb-1">
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/85 max-w-xl mx-auto">
              {dict.contact.subtitle}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={APP_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center h-12 px-6 sm:px-7 rounded-full bg-white text-[#1B1F52] font-bold text-sm hover:scale-[1.03] transition-transform"
              >
                {dict.contact.download}
              </a>
              <a
                href={CONTACT.tel}
                className="inline-flex items-center h-12 px-6 sm:px-7 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur"
              >
                {dict.contact.phone}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center gap-2 h-12 px-6 sm:px-7 rounded-full bg-[#25D366] text-white font-bold text-sm hover:scale-[1.03] transition-transform"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                {dict.contact.whatsapp}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/90">
              <a
                href={CONTACT.mailto}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span dir="ltr">{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.tel}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span dir="ltr">{CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
