"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Why() {
  const { dict } = useLang();
  return (
    <section className="relative py-24 sm:py-28 lg:py-36 overflow-hidden bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl card p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#EAF1FF] p-3">
                <Image
                  src="/images/Logo1.png"
                  alt="Ashafaq"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.25em] text-[#1F5EFF] font-semibold">
                  {dict.common.certified}
                </div>
                <div className="text-lg font-bold text-[#0B1F3A]">{dict.common.certifiedLabel}</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "2017", l: dict.common.foundedShort },
                { v: "11+", l: dict.common.branchesShort },
                { v: "★", l: dict.common.onSiteShort },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-[#F5F7FA] border border-[#E6EAF2] p-4 text-center">
                  <div className="text-2xl font-extrabold text-[#1F5EFF] leading-none">
                    {s.v}
                  </div>
                  <div className="mt-2 text-[10px] text-[#667085] leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#667085] leading-relaxed">
              {dict.footer.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-700">
              <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
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
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1"
          >
            {dict.why.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-[#667085] max-w-lg"
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
                className="group flex items-center gap-4 p-4 rounded-2xl card hover:border-[#DDE7FF] transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold shrink-0 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-[#0B1F3A]">{it}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
