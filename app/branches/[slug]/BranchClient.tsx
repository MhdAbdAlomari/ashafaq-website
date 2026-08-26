"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CONTACT } from "@/lib/i18n";
import {
  BRANCHES,
  buildDirectionsUrl,
  type Branch,
} from "@/lib/branches";

const BranchesMap = dynamic(() => import("@/components/BranchesMap"), {
  ssr: false,
});

const FALLBACK_PHOTO = "/images/ashafaq_home.jpg";

export default function BranchClient({ branch }: { branch: Branch }) {
  const { dict, locale } = useLang();
  const bp = dict.branchPage;
  const name = locale === "ar" ? branch.nameAr : branch.nameEn;
  const directionsHref = buildDirectionsUrl(branch);
  const photo = branch.photoSrc ?? FALLBACK_PHOTO;

  // 3 nearest other branches — cheap Euclidean on lat/lng, fine for Riyadh scale
  const others = BRANCHES
    .filter((b) => b.slug !== branch.slug)
    .map((b) => ({
      b,
      d: Math.hypot(b.lat - branch.lat, b.lng - branch.lng),
    }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 3)
    .map((x) => x.b);

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-10 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="text-sm mb-6"
          >
            <ol className="flex items-center flex-wrap gap-2 text-[#667085]">
              <li>
                <Link
                  href="/branches/"
                  className="hover:text-[#1F5EFF] font-medium"
                >
                  {bp.breadcrumbBranches}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[#0B1F3A] font-semibold">{name}</li>
            </ol>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">{bp.breadcrumbBranches}</span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1">
              {name}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#667085]">
              {branch.lat.toFixed(4)}, {branch.lng.toFixed(4)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {bp.openDirections}
              </a>
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                {bp.openInMaps}
              </a>
              {branch.googleReviewsUrl && (
                <a
                  href={branch.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-12 px-6 rounded-full border border-[#E6EAF2] bg-white text-[#0B1F3A] font-semibold text-sm hover:bg-[#F5F7FA] transition-colors"
                >
                  <span className="text-[#F5B942]" aria-hidden>★</span>
                  {bp.googleReviews}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map + Photo grid */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-6 sm:gap-8">
          <BranchesMap
            focusId={null}
            onMarkerClick={() => {}}
            ariaLabel={name}
            openLabel={bp.openInMaps}
            locale={locale}
            branches={[branch]}
            singleView
          />
          <div className="relative rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_10px_30px_-15px_rgba(11,31,58,0.15)] h-[280px] sm:h-[360px] lg:h-full min-h-[280px]">
            <Image
              src={photo}
              alt={`${bp.photoAlt} — ${name}`}
              fill
              sizes="(min-width: 1024px) 30rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Hours + Services */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-5 sm:gap-6">
          {/* Hours block — only render when we have real data OR at least a maps URL to point at */}
          {(branch.hours || branch.mapsUrl) && (
            <div className="card rounded-3xl p-6 sm:p-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
                {bp.hoursTitle}
              </h2>
              {branch.hours ? (
                <p className="mt-3 text-sm sm:text-base text-[#0B1F3A] leading-relaxed">
                  {branch.hours}
                </p>
              ) : (
                <>
                  <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
                    {bp.hoursUnknown}
                  </p>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA]"
                  >
                    {bp.checkGoogleHours}
                    <span>→</span>
                  </a>
                </>
              )}
            </div>
          )}

          {/* Services block */}
          <div className="card rounded-3xl p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {bp.servicesTitle}
            </h2>
            {branch.servicesAvailable && branch.servicesAvailable.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {branch.servicesAvailable.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#0B1F3A]">
                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-[10px] font-bold">
                      ✓
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
                {bp.servicesFallback}
              </p>
            )}
            <Link
              href="/services/"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF] hover:text-[#1A50DA]"
            >
              {bp.servicesLink}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-8 sm:p-10 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              {bp.ctaTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              {bp.ctaSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                {bp.openDirections}
              </a>
              <a
                href={CONTACT.tel}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white border border-[#E6EAF2] text-[#0B1F3A] font-semibold text-sm hover:bg-[#F5F7FA] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span dir="ltr">{CONTACT.phone}</span>
              </a>
              <Link href="/contact/" className="btn-secondary text-sm">
                {bp.contactUs}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related branches */}
      {others.length > 0 && (
        <section className="pb-20 sm:pb-24 bg-[#F5F7FA]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {bp.relatedBranches}
            </h2>
            <ul className="mt-5 grid sm:grid-cols-3 gap-4 sm:gap-5">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/branches/${o.slug}/`}
                    className="card rounded-2xl px-5 py-4 flex items-center justify-between gap-3 hover:border-[#DDE7FF] transition-colors group"
                  >
                    <span className="text-sm font-semibold text-[#0B1F3A]">
                      {locale === "ar" ? o.nameAr : o.nameEn}
                    </span>
                    <span aria-hidden className="text-[#1F5EFF]">
                      ←
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
