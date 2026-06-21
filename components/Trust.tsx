"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

export default function Trust() {
  const { dict } = useLang();
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1">
            {dict.trust.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            {dict.trust.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {dict.trust.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-5 sm:p-6 text-center overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-[11px] sm:text-xs lg:text-sm text-white/65 leading-snug">
                  {s.label}
                </div>
              </div>
              <div className="absolute -bottom-px inset-x-6 h-px bg-gradient-to-r from-transparent via-[#2E93B9]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
