"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

export default function Trust() {
  const { dict } = useLang();
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.2] pb-1">
            {dict.trust.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#667085]">
            {dict.trust.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {dict.trust.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl card p-6 sm:p-7 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F5EFF] leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-[11px] sm:text-xs lg:text-sm text-[#667085] leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
