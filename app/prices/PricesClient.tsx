"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { useLang } from "@/components/LanguageProvider";
import { APP_LINKS } from "@/lib/branches";

const SIZE_IMAGES = [
  "/images/Small_Car_new.png",
  "/images/Medium_Car_new.png",
  "/images/Big_car_new.png",
];

export default function PricesClient() {
  const { dict } = useLang();
  const p = dict.pricesPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {p.rows.map((row, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card rounded-3xl p-6 sm:p-7 text-center hover:border-[#DDE7FF] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full aspect-[2.6/1] mx-auto">
                  <Image
                    src={SIZE_IMAGES[i]}
                    alt={row.size}
                    fill
                    sizes="(min-width: 640px) 20rem, 90vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#0B1F3A]">
                  {row.size}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#667085]">
                  {row.note}
                </p>

                {/* Two-tier prices */}
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-[#F5F7FA] border border-[#E6EAF2] px-3 py-3">
                    <div className="text-[11px] font-semibold text-[#667085]">
                      {p.tierExterior}
                    </div>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#1F5EFF] leading-none">
                        {row.priceExterior}
                      </span>
                      <span className="text-sm font-semibold text-[#667085]">
                        {p.currency}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#EAF1FF] border border-[#DDE7FF] px-3 py-3">
                    <div className="text-[11px] font-semibold text-[#1F5EFF]">
                      {p.tierInterior}
                    </div>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] leading-none">
                        {row.priceInterior}
                      </span>
                      <span className="text-sm font-semibold text-[#667085]">
                        {p.currency}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA]"
            >
              {p.whatsIncluded}
              <span>→</span>
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5 sm:gap-6">
            {/* Why price differs by size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="card rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold">
                ?
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0B1F3A]">
                {p.whySizeTitle}
              </h3>
              <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                {p.whySizeBody}
              </p>
            </motion.div>

            {/* What's included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="card rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0B1F3A]">
                {p.whatIncludedTitle}
              </h3>
              <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                {p.whatIncludedBody}
              </p>
              <Link
                href="/services/"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA]"
              >
                {p.whatIncludedLink}
                <span>→</span>
              </Link>
            </motion.div>

            {/* Mobile wash note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="card rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0B1F3A]">
                {p.mobileNoteTitle}
              </h3>
              <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                {p.mobileNoteBody}
              </p>
              <Link
                href="/mobile-wash/"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA]"
              >
                {p.mobileNoteLink}
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-8 sm:p-10 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              {p.ctaTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              {p.ctaSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={APP_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                {p.downloadApp}
              </a>
              <Link href="/contact/" className="btn-secondary text-sm">
                {p.contactUs}
              </Link>
            </div>
          </motion.div>

          {/* Read the full guide — secondary CTA (not competing with booking CTA above) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Link
              href="/blog/car-wash-prices-riyadh/"
              className="card rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:border-[#DDE7FF] transition-colors group"
            >
              <div className="min-w-0">
                <span className="eyebrow">{p.guideEyebrow}</span>
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-[#0B1F3A]">
                  {p.guideTitle}
                </h3>
                <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                  {p.guideExcerpt}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 h-11 px-5 rounded-full border border-[#0B1F3A] text-[#0B1F3A] font-semibold text-sm bg-white group-hover:bg-[#F5F7FA] transition-colors">
                {p.guideCta}
                <span>→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
