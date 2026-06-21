"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { BRANCHES } from "@/lib/branches";

const BranchesMap = dynamic(() => import("./BranchesMap"), {
  ssr: false,
});

export default function Branches() {
  const { dict, locale } = useLang();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="branches" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-[#2E93B9] uppercase">
            {dict.nav.branches}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1">
            {dict.branches.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            {dict.branches.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-6">
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
                  className={`group w-full text-start rounded-2xl p-5 transition-all duration-300 ${
                    isActive
                      ? "glass-strong glow-ring"
                      : "glass hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl grid place-items-center transition-all ${
                          isActive
                            ? "bg-brand-gradient scale-110"
                            : "bg-white/5 group-hover:bg-white/10"
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
                        <div className="font-bold text-sm sm:text-base">
                          {locale === "ar" ? b.nameAr : b.nameEn}
                        </div>
                        <div className="text-[11px] text-white/45 mt-0.5">
                          {b.lat.toFixed(4)}, {b.lng.toFixed(4)}
                        </div>
                      </div>
                    </div>
                    <a
                      href={b.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 text-[11px] font-semibold px-3 h-8 rounded-full bg-white/5 hover:bg-brand-gradient transition-colors inline-flex items-center"
                    >
                      {dict.branches.openInMaps}
                    </a>
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
