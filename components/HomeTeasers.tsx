"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { CONTACT } from "@/lib/i18n";

/* ─── ServicesTeaser ────────────────────────────────────────────────── */
export function ServicesTeaser() {
  const { dict } = useLang();
  const t = dict.homeTeasers;
  const s = dict.servicesPage;
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t.servicesEyebrow}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            {t.servicesTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085]">
            {t.servicesSubtitle}
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5 sm:gap-6">
          {s.tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card rounded-3xl p-6 sm:p-7 hover:border-[#DDE7FF] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#0B1F3A]">
                {tier.title}
              </h3>
              <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                {tier.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services/" className="btn-primary text-sm">
            {t.seeMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── PricesTeaser ──────────────────────────────────────────────────── */
export function PricesTeaser() {
  const { dict } = useLang();
  const t = dict.homeTeasers;
  const p = dict.pricesPage;
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t.pricesEyebrow}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            {t.pricesTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085]">
            {t.pricesSubtitle}
          </p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Group 1 — Interior + Exterior (higher-value tier: featured first, brand-tinted) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="card rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1F5EFF]" aria-hidden />
              <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                {p.tierInterior}
              </h3>
            </div>
            <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {p.rows.map((r, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-[#EAF1FF] border border-[#DDE7FF] p-3 text-center"
                >
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#667085] leading-tight">
                    {r.size}
                  </div>
                  <div className="mt-1.5 flex items-baseline justify-center gap-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] leading-none">
                      {r.priceInterior}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#667085]">
                      {p.currency}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Group 2 — Exterior only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="card rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#667085]" aria-hidden />
              <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                {p.tierExterior}
              </h3>
            </div>
            <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {p.rows.map((r, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-[#F5F7FA] border border-[#E6EAF2] p-3 text-center"
                >
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#667085] leading-tight">
                    {r.size}
                  </div>
                  <div className="mt-1.5 flex items-baseline justify-center gap-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1F5EFF] leading-none">
                      {r.priceExterior}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#667085]">
                      {p.currency}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/prices/" className="btn-primary text-sm">
            {t.seeMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── AppTeaser ─────────────────────────────────────────────────────── */
export function AppTeaser() {
  const { dict } = useLang();
  const t = dict.homeTeasers;
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="card rounded-[2rem] p-8 sm:p-10 lg:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <span className="eyebrow">{t.appEyebrow}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
              {t.appTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              {t.appSubtitle}
            </p>
            <div className="mt-6">
              <Link href="/app/" className="btn-primary text-sm">
                {t.openApp}
              </Link>
            </div>
          </div>
          {/* Image already contains its own phone frame — render as a plain image, no wrapper */}
          <div className="relative mx-auto w-full max-w-[240px]">
            <div className="absolute -inset-4 bg-[#EAF1FF] opacity-70 blur-2xl rounded-[3rem]" aria-hidden />
            <Image
              src="/images/book-from-your-phone.png"
              alt={t.appTitle}
              width={1242}
              height={2688}
              sizes="(min-width: 1024px) 240px, 60vw"
              className="relative w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FleetTeaser ───────────────────────────────────────────────────── */
export function FleetTeaser() {
  const { dict } = useLang();
  const t = dict.homeTeasers;
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t.fleetEyebrow}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            {t.fleetTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085]">
            {t.fleetSubtitle}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            "/images/Small_Car_new.png",
            "/images/Medium_Car_new.png",
            "/images/Big_car_new.png",
            "/images/van_car.png",
            "/images/Bus_Car_new.png",
            "/images/Truck_Car_new.png",
          ].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative aspect-[2.6/1]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 640px) 12rem, 30vw"
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/fleet/" className="btn-primary text-sm">
            {t.fleetLink}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── BranchesTeaser ────────────────────────────────────────────────── */
export function BranchesTeaser() {
  const { dict } = useLang();
  const t = dict.homeTeasers;
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="eyebrow">{t.branchesEyebrow}</span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
          {t.branchesTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#667085]">
          {t.branchesSubtitle}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-5 h-11 rounded-full bg-[#EAF1FF] text-[#1F5EFF] font-bold text-sm">
          11+
          <span className="text-[#0B1F3A] font-semibold">
            {dict.common.branchesShort}
          </span>
        </div>
        <div className="mt-8">
          <Link href="/branches/" className="btn-primary text-sm">
            {t.branchesLink}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── QuickContactStrip ─────────────────────────────────────────────── */
export function QuickContactStrip() {
  const { dict } = useLang();
  const t = dict.homeTeasers;
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-start">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A]">
              {t.contactStripTitle}
            </h3>
            <p className="mt-1 text-sm text-[#667085]">
              {t.contactStripSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={CONTACT.tel} className="btn-primary text-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span dir="ltr">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1FBA57] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              {dict.contact.whatsapp}
            </a>
            <Link href="/contact/" className="btn-secondary text-sm">
              {t.contactStripLink}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
