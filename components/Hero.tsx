"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import StoreButtons from "./StoreButtons";
import { withBranchCount } from "@/lib/i18n";
import { BRANCH_COUNT_DISPLAY } from "@/lib/branches";

export default function Hero() {
  const { dict } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-white"
    >
      {/* Soft ambient background — no heavy blobs on light theme */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -end-40 w-[50rem] h-[50rem] rounded-full bg-[#EAF1FF] opacity-70 blur-[120px]" />
        <div className="absolute -bottom-40 -start-40 w-[40rem] h-[40rem] rounded-full bg-[#F5F7FA] opacity-80 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1FF] border border-[#DDE7FF] text-xs sm:text-sm font-medium text-[#0B1F3A]"
          >
            <span className="w-2 h-2 rounded-full bg-[#1F5EFF] animate-pulse" />
            {dict.hero.eyebrow} · {dict.hero.sinceBadge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
          >
            <span className="text-gradient">{dict.hero.headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[#667085] leading-relaxed"
          >
            {withBranchCount(dict.hero.subheadline)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 text-sm sm:text-base font-bold text-[#1F5EFF]"
          >
            {dict.common.brandTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-8"
          >
            <StoreButtons source="hero" showNote />
          </motion.div>

          {/* Trust strip — qualitative language only, no fabricated stats */}
          <motion.a
            href="#testimonials"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 inline-flex flex-wrap items-center gap-3 sm:gap-4 rounded-2xl card px-4 py-3 hover:border-[#DDE7FF] transition-colors"
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid place-items-center w-8 h-8 rounded-full bg-[#EAF1FF] text-[#1F5EFF] text-[12px] font-bold"
              >
                ✓
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0B1F3A] whitespace-nowrap">
                {dict.common.trustedBy}
              </span>
            </div>
            <span className="hidden sm:inline-block w-px h-5 bg-[#E6EAF2]" />
            <span className="text-xs sm:text-sm text-[#667085] whitespace-nowrap">
              {dict.common.premiumService}
            </span>
          </motion.a>
        </div>

        {/* Visual — image already contains its own phone frame, so render as a plain image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 bg-[#EAF1FF] opacity-70 blur-3xl rounded-full" aria-hidden />
          <div className="relative mx-auto w-full max-w-[320px]">
            <Image
              src="/images/new-home.png"
              alt={dict.common.certifiedLabel}
              width={1242}
              height={2688}
              priority
              sizes="(min-width: 1024px) 320px, 90vw"
              className="relative w-full h-auto"
            />
          </div>

          {/* Real-data stat tiles (no fabricated numbers — these come from i18n common.*) */}
          <div className="relative mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { v: BRANCH_COUNT_DISPLAY, l: dict.common.branchesShort },
              { v: "2017", l: dict.common.foundedShort },
              { v: "★", l: dict.common.onSiteShort },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white border border-[#E6EAF2] p-3">
                <div className="text-lg font-extrabold text-[#0B1F3A]">
                  {s.v}
                </div>
                <div className="text-[10px] text-[#667085] mt-1 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
