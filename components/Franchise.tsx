"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

export default function Franchise() {
  const { dict } = useLang();
  return (
    <section id="franchise" className="relative py-24 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#0B1F3A] p-8 sm:p-14 lg:p-20 shadow-[0_20px_60px_-30px_rgba(11,31,58,0.5)]"
        >
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-32 -end-32 w-[36rem] h-[36rem] bg-[#1F5EFF] opacity-25 blur-[140px] rounded-full" />
            <div className="absolute -bottom-32 -start-32 w-[28rem] h-[28rem] bg-[#1F5EFF] opacity-15 blur-[120px] rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="eyebrow !text-[#7AA5FF]">
                {dict.franchise.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] pb-1">
                {dict.franchise.title}
              </h2>
              <p className="mt-5 text-white/75 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
                {dict.franchise.subtitle}
              </p>

              <Link
                href="/franchise/"
                className="mt-8 shine inline-flex items-center gap-2 h-14 px-8 rounded-full bg-[#1F5EFF] text-white font-bold hover:bg-[#1A50DA] transition-colors shadow-[0_10px_24px_-8px_rgba(31,94,255,0.55)]"
              >
                {dict.franchise.cta}
                <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {dict.franchise.points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1F5EFF] grid place-items-center text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-3 text-sm text-white/90 leading-snug">
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
