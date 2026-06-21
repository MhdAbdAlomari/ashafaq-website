"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

export default function Franchise() {
  const { dict } = useLang();
  return (
    <section id="franchise" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] glass-strong p-6 sm:p-12 lg:p-16 glow-ring"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -end-32 w-[36rem] h-[36rem] bg-[#1B1F52] opacity-60 blur-[140px] rounded-full" />
            <div className="absolute -bottom-32 -start-32 w-[32rem] h-[32rem] bg-[#2E93B9] opacity-50 blur-[140px] rounded-full" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-[#7fcfe8] uppercase">
                {dict.franchise.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient leading-[1.15] pb-1">
                {dict.franchise.title}
              </h2>
              <p className="mt-5 text-white/75 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
                {dict.franchise.subtitle}
              </p>

              <a
                href="#contact"
                className="mt-8 shine glow-ring inline-flex items-center gap-2 h-14 px-8 rounded-full bg-brand-gradient text-white font-bold hover:scale-[1.03] transition-transform"
              >
                {dict.franchise.cta}
                <span className="text-lg">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {dict.franchise.points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl glass p-5"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-gradient grid place-items-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="mt-3 text-sm text-white/85 leading-snug">
                    {p}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
