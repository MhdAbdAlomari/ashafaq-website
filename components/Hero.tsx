"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { dict } = useLang();

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dx = ((i * 17) % 200) - 100;
        const dy = -120 - ((i * 11) % 200);
        const dur = 10 + ((i * 7) % 14);
        const delay = (i * 0.35) % 8;
        const size = 2 + (i % 4);
        return { left, top, dx, dy, dur, delay, size, key: i };
      }),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -start-40 w-[60rem] h-[60rem] rounded-full bg-[#1B1F52] opacity-50 blur-[140px] mesh-blob" />
        <div
          className="absolute -bottom-40 -end-40 w-[55rem] h-[55rem] rounded-full bg-[#2E93B9] opacity-40 blur-[140px] mesh-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute top-1/3 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 rounded-full bg-[#5fc7e8] opacity-20 blur-[120px] mesh-blob"
          style={{ animationDelay: "-12s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.key}
            className="particle"
            style={
              {
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                "--dur": `${p.dur}s`,
                "--delay": `${p.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-white/85"
          >
            <span className="w-2 h-2 rounded-full bg-[#2E93B9] animate-pulse" />
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
            className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
          >
            {dict.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#app"
              className="shine glow-ring inline-flex items-center gap-2 h-12 px-7 rounded-full bg-brand-gradient text-white font-semibold text-sm sm:text-base hover:scale-[1.03] transition-transform"
            >
              {dict.hero.downloadApp}
            </a>
            <a
              href="#contact"
              className="glass-strong inline-flex items-center gap-2 h-12 px-7 rounded-full text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              {dict.hero.bookNow}
            </a>
          </motion.div>

          {/* Premium trust strip — verified customers + rating + premium service */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 inline-flex flex-wrap items-center gap-3 sm:gap-4 rounded-2xl glass px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid place-items-center w-8 h-8 rounded-full bg-brand-gradient text-[10px] font-bold"
              >
                ✓
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90 whitespace-nowrap">
                {dict.common.verified}
              </span>
            </div>
            <span className="hidden sm:inline-block w-px h-5 bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="text-amber-300 text-sm tracking-tight" aria-hidden>
                ★★★★★
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white">
                4.9 / 5
              </span>
              <span className="text-xs text-white/55">
                · {dict.common.ratingLabel}
              </span>
            </div>
            <span className="hidden sm:inline-block w-px h-5 bg-white/15" />
            <span className="text-xs sm:text-sm text-white/70 whitespace-nowrap">
              {dict.common.premiumService}
            </span>
          </motion.div>
        </div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 bg-brand-gradient opacity-30 blur-3xl rounded-full" />
          <div className="relative glass-strong rounded-[2rem] p-6 sm:p-8 glow-ring">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-gradient p-2 grid place-items-center">
                  <Image
                    src="/images/Logo1.png"
                    alt="Ashafaq"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold truncate">Ashafaq</div>
                  <div className="text-xs text-white/55 truncate">
                    {dict.common.certifiedLabel}
                  </div>
                </div>
              </div>
              <span className="shrink-0 text-[10px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                {dict.common.live}
              </span>
            </div>

            <div className="mt-6 relative aspect-[9/12] rounded-2xl overflow-hidden border border-white/10 float-y">
              <Image
                src="/images/ashafaq_home.jpg"
                alt="Ashafaq App Home"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070819] via-transparent to-transparent" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "11+", l: dict.common.branchesShort },
                { v: "2017", l: dict.common.foundedShort },
                { v: "★", l: dict.common.onSiteShort },
              ].map((s, i) => (
                <div key={i} className="rounded-xl glass p-3">
                  <div className="text-lg font-extrabold text-gradient">
                    {s.v}
                  </div>
                  <div className="text-[10px] text-white/60 mt-1 leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
