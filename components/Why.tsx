"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Why() {
  const { dict } = useLang();
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-brand-gradient opacity-10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-brand-gradient opacity-25 blur-3xl rounded-full" />
          <div className="relative rounded-3xl glass-strong p-8 sm:p-10 glow-ring">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-gradient p-3">
                <Image
                  src="/images/Logo1.png"
                  alt="Ashafaq"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain"
                />
              </div>0
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.25em] text-[#2E93B9]">
                  {dict.common.certified}
                </div>
                <div className="text-lg font-bold">{dict.common.certifiedLabel}</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "2017", l: dict.common.foundedShort },
                { v: "11+", l: dict.common.branchesShort },
                { v: "★", l: dict.common.onSiteShort },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl glass p-4 text-center">
                  <div className="text-2xl font-extrabold text-gradient leading-none">
                    {s.v}
                  </div>
                  <div className="mt-2 text-[10px] text-white/60 leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/70 leading-relaxed">
              {dict.footer.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-300">
              <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <span>{dict.common.trustedBy}</span>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1"
          >
            {dict.why.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-white/65 max-w-lg"
          >
            {dict.why.subtitle}
          </motion.p>

          <ul className="mt-8 space-y-3">
            {dict.why.items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-brand-gradient grid place-items-center text-xs font-bold shrink-0 group-hover:rotate-12 transition-transform">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-white/90">{it}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
