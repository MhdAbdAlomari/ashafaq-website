"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { BRANCHES, UNIFIED_CONTACT, findNearestBranch } from "@/lib/branches";
import { trackEvent } from "@/lib/analytics";

const BranchesMap = dynamic(() => import("./BranchesMap"), {
  ssr: false,
});

const FALLBACK_PHOTO = "/images/ashafaq_home.jpg";

type NearestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; branchSlug: string; branchNameAr: string; branchNameEn: string }
  | { status: "error"; message: string };

export default function Branches({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const { dict, locale } = useLang();
  const bp = dict.branchesPage;
  const [active, setActive] = useState<string | null>(null);
  const [nearest, setNearest] = useState<NearestState>({ status: "idle" });

  const handleFindNearest = () => {
    if (typeof window === "undefined" || !("geolocation" in navigator)) {
      setNearest({ status: "error", message: bp.nearestUnsupported });
      return;
    }
    setNearest({ status: "loading" });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const b = findNearestBranch(pos.coords.latitude, pos.coords.longitude);
        setNearest({
          status: "ok",
          branchSlug: b.slug,
          branchNameAr: b.nameAr,
          branchNameEn: b.nameEn,
        });
        setActive(b.id);
        trackEvent("branch_select", { branch_slug: b.slug, source: "find_nearest" });
      },
      () => {
        setNearest({ status: "error", message: bp.nearestError });
      },
      { enableHighAccuracy: false, maximumAge: 60_000, timeout: 10_000 }
    );
  };

  return (
    <section
      id="branches"
      className={`relative bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-28 lg:py-36"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="eyebrow">{dict.nav.branches}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1">
              {dict.branches.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#667085]">
              {dict.branches.subtitle}
            </p>
          </motion.div>
        )}

        {/* Find nearest branch */}
        <div className={`${hideHeader ? "mb-6" : "mt-10 mb-4"} flex flex-wrap items-center justify-center gap-3`}>
          <button
            type="button"
            onClick={handleFindNearest}
            disabled={nearest.status === "loading"}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#1F5EFF] text-white text-sm font-bold hover:bg-[#1A50DA] disabled:opacity-70 transition-colors shadow-[0_8px_20px_-10px_rgba(31,94,255,0.55)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            {nearest.status === "loading" ? bp.findingNearest : bp.findNearest}
          </button>
          {nearest.status === "ok" && (
            <div className="inline-flex items-center gap-3 px-4 h-11 rounded-full bg-[#EAF1FF] text-[#0B1F3A] text-sm">
              <span className="font-semibold">
                {bp.nearestResult}: {locale === "ar" ? nearest.branchNameAr : nearest.branchNameEn}
              </span>
              <Link
                href={`/branches/${nearest.branchSlug}/`}
                className="font-bold text-[#1F5EFF] hover:text-[#1A50DA]"
              >
                {bp.nearestGoTo} {locale === "ar" ? "←" : "→"}
              </Link>
            </div>
          )}
          {nearest.status === "error" && (
            <p className="text-sm text-[#667085] max-w-md text-center">
              {nearest.message}
            </p>
          )}
        </div>

        {/* Full-width map */}
        <div className={hideHeader ? "" : "mt-6 sm:mt-8"}>
          <div className="rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_10px_30px_-15px_rgba(11,31,58,0.15)]">
            <BranchesMap
              focusId={active}
              onMarkerClick={setActive}
              ariaLabel={dict.branches.ariaMap}
              openLabel={dict.branches.openInMaps}
              locale={locale}
            />
          </div>
        </div>

        {/* Card grid */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
              {bp.listHeading}
            </h3>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {BRANCHES.map((b, i) => {
              const name = locale === "ar" ? b.nameAr : b.nameEn;
              const hours = locale === "ar" ? b.hours : b.hoursEn;
              const photo = b.photoSrc ?? FALLBACK_PHOTO;
              const isActive = active === b.id;
              return (
                <motion.li
                  key={b.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                  className={`group relative bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? "border-[#1F5EFF]/50 shadow-[0_20px_50px_-20px_rgba(31,94,255,0.35)]"
                      : "border-[#E6EAF2] shadow-[0_10px_30px_-20px_rgba(11,31,58,0.15)] hover:shadow-[0_20px_50px_-20px_rgba(11,31,58,0.25)] hover:-translate-y-1"
                  }`}
                >
                  {/* Photo */}
                  <Link
                    href={`/branches/${b.slug}/`}
                    className="block relative aspect-[16/10] overflow-hidden bg-[#F5F7FA]"
                    onClick={() => trackEvent("branch_select", { branch_slug: b.slug })}
                  >
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent pointer-events-none" />
                    <span className="absolute top-3 start-3 inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/95 backdrop-blur text-[11px] font-semibold text-[#0B1F3A]">
                      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#1F5EFF]" />
                      {dict.nav.branches}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] leading-tight">
                      {name}
                    </h4>

                    {/* Hours row */}
                    <div className="mt-4 flex items-start gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
                        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#667085]">
                          {bp.hoursLabel}
                        </div>
                        <div className="mt-0.5 text-[13px] sm:text-sm text-[#0B1F3A] font-medium leading-snug">
                          {hours}
                        </div>
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="mt-5 flex items-center gap-2">
                      <a
                        href={UNIFIED_CONTACT.tel}
                        onClick={() => trackEvent("phone_call_click", { branch_slug: b.slug, source: "branches_grid" })}
                        aria-label={`${bp.callLabel} — ${name}`}
                        className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl bg-[#0B1F3A] text-white text-[13px] font-semibold hover:bg-[#122a4d] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        {bp.callLabel}
                      </a>
                      <a
                        href={UNIFIED_CONTACT.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("whatsapp_click", { branch_slug: b.slug, source: "branches_grid" })}
                        aria-label={`${bp.whatsappLabel} — ${name}`}
                        className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl bg-white border border-[#E6EAF2] text-[#0B1F3A] text-[13px] font-semibold hover:bg-[#F5F7FA] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" aria-hidden>
                          <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.97 9.97 0 0 1-5.08-1.39l-.36-.22-3.68.97.98-3.59-.24-.37A9.98 9.98 0 1 1 22 12c0 5.51-4.49 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.08 2.88 1.23 3.08c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                        </svg>
                        {bp.whatsappLabel}
                      </a>
                    </div>

                    <p className="mt-3 text-[10.5px] leading-snug text-[#667085]">
                      {bp.unifiedCaption}
                    </p>

                    {/* Open page */}
                    <Link
                      href={`/branches/${b.slug}/`}
                      className="mt-5 inline-flex w-full items-center justify-center gap-1.5 h-11 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] text-sm font-bold hover:bg-[#DDE7FF] transition-colors"
                    >
                      {bp.openBranchPage}
                      <span aria-hidden>{locale === "ar" ? "←" : "→"}</span>
                    </Link>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
