"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import StoreButtons from "@/components/StoreButtons";
import { useLang } from "@/components/LanguageProvider";
import { CONTACT } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

/**
 * Contact page is for inquiries only — booking is app-only per the business
 * rule. The primary interaction is a big WhatsApp CTA (no compose-then-tap-
 * send double step). A separate "looking to book?" card redirects to the app
 * stores. The existing site-wide Contact block below carries the full
 * channel list (email, phone, socials) using the same CONTACT constants.
 */
export default function ContactPageClient() {
  const { dict } = useLang();
  const c = dict.contactPage;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      {/* Primary WhatsApp inquiry CTA */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-8 sm:p-10 text-center"
          >
            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#25D366]/10 grid place-items-center">
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-9 h-9" aria-hidden>
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.97 9.97 0 0 1-5.08-1.39l-.36-.22-3.68.97.98-3.59-.24-.37A9.98 9.98 0 1 1 22 12c0 5.51-4.49 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.08 2.88 1.23 3.08c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              </svg>
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
              {c.inquiryTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed max-w-md mx-auto">
              {c.inquirySubtitle}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", { source: "contact_page_primary" })
                }
                className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-[#25D366] text-white text-base font-bold hover:bg-[#1FBA57] transition-colors shadow-[0_10px_24px_-8px_rgba(37,211,102,0.55)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                {c.openWhatsapp}
              </a>
              <a
                href={CONTACT.tel}
                onClick={() =>
                  trackEvent("phone_call_click", { source: "contact_page_primary" })
                }
                className="inline-flex items-center gap-2 h-14 px-6 rounded-full bg-white border border-[#E6EAF2] text-[#0B1F3A] text-sm font-semibold hover:bg-[#F5F7FA] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  {c.callInstead}{" "}
                  <span dir="ltr" className="font-bold">{CONTACT.phone}</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking redirect card — WhatsApp is for inquiries; booking is app-only */}
      <section className="pb-12 sm:pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-10 shadow-[0_20px_60px_-30px_rgba(11,31,58,0.5)]"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold">
              {c.bookingRedirectTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
              {c.bookingRedirectBody}
            </p>
            <div className="mt-6">
              <StoreButtons source="contact_booking_redirect" variant="onDark" showNote={false} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Site-wide contact channels block (email, phone, socials) */}
      <Contact />
    </>
  );
}
