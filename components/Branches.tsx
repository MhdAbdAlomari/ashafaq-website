"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { BRANCHES } from "@/lib/branches";

const BranchesMap = dynamic(() => import("./BranchesMap"), {
  ssr: false,
});

export default function Branches({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const { dict, locale } = useLang();
  const [active, setActive] = useState<string | null>(null);

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

        <div className={`grid lg:grid-cols-[1.4fr_1fr] gap-8 ${hideHeader ? "" : "mt-14 sm:mt-16"}`}>
          <BranchesMap
            focusId={active}
            onMarkerClick={setActive}
            ariaLabel={dict.branches.ariaMap}
            openLabel={dict.branches.openInMaps}
            locale={locale}
          />

          <div className="max-h-[560px] overflow-y-auto pr-1 space-y-3 no-scrollbar">
            {BRANCHES.map((b, i) => {
              const isActive = active === b.id;
              return (
                <motion.button
                  key={b.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => setActive(b.id)}
                  className={`group w-full text-start rounded-2xl p-5 transition-all duration-300 border ${
                    isActive
                      ? "bg-[#EAF1FF] border-[#1F5EFF]/40 shadow-[0_10px_30px_-15px_rgba(31,94,255,0.35)]"
                      : "bg-white border-[#E6EAF2] hover:border-[#DDE7FF] hover:bg-[#F5F7FA]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl grid place-items-center transition-all ${
                          isActive
                            ? "bg-[#1F5EFF] text-white scale-110"
                            : "bg-[#EAF1FF] text-[#1F5EFF] group-hover:bg-[#DDE7FF]"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base text-[#0B1F3A]">
                          {locale === "ar" ? b.nameAr : b.nameEn}
                        </div>
                        <div className="text-[11px] text-[#667085] mt-0.5">
                          {b.lat.toFixed(4)}, {b.lng.toFixed(4)}
                        </div>
                      </div>
                    </div>
                    <div
                      className="shrink-0 flex flex-col items-end gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        href={`/branches/${b.slug}/`}
                        className="text-[11px] font-semibold px-3 h-8 rounded-full bg-[#1F5EFF] text-white hover:bg-[#1A50DA] transition-colors inline-flex items-center"
                      >
                        {dict.branchesPage.openBranch}
                      </Link>
                      <a
                        href={b.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold px-3 h-8 rounded-full border border-[#E6EAF2] text-[#1F5EFF] hover:bg-[#EAF1FF] transition-colors inline-flex items-center"
                      >
                        {dict.branches.openInMaps}
                      </a>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
