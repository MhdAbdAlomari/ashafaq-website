"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { APP_LINKS } from "@/lib/branches";

const SCREENS = [
  "/images/ashafaq_home.jpg",
  "/images/ashafaq_create_order.jpg",
  "/images/ashafaq_map.jpg",
  "/images/ashafaq_orders.jpg",
  "/images/ashafaq_summary_booking.jpg",
  "/images/ashafaq_wallet.jpg",
  "/images/ashafaq_addons.jpg",
];

function PhoneFrame({
  src,
  className = "",
  delay = 0,
  rotate = 0,
}: {
  src: string;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: rotate * 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      <div className="absolute -inset-3 bg-brand-gradient opacity-25 blur-2xl rounded-[3rem]" />
      <div className="relative w-[230px] sm:w-[260px] aspect-[9/19.5] rounded-[2.5rem] bg-[#0a0d2a] border-[10px] border-[#0a0d2a] glow-ring overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-10" />
        <Image
          src={src}
          alt="Ashafaq App Screenshot"
          fill
          sizes="260px"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function AppSection() {
  const { dict } = useLang();
  return (
    <section
      id="app"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -start-32 w-[40rem] h-[40rem] bg-[#1B1F52] opacity-30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 -end-32 w-[36rem] h-[36rem] bg-[#2E93B9] opacity-25 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-[#2E93B9] uppercase"
          >
            {dict.app.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1"
          >
            {dict.app.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-white/70 max-w-lg"
          >
            {dict.app.subtitle}
          </motion.p>

          <ul className="mt-8 space-y-3">
            {dict.app.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-3 text-white/85"
              >
                <span className="w-8 h-8 rounded-full bg-brand-gradient grid place-items-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm sm:text-base">{f}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href={APP_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="shine inline-flex items-center gap-3 h-14 px-6 rounded-2xl bg-black border border-white/15 hover:border-white/30 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.05 12.04c-.03-2.95 2.41-4.36 2.52-4.43-1.38-2.01-3.52-2.29-4.28-2.32-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.86-1.01-1.98.03-3.81 1.16-4.83 2.93-2.06 3.57-.53 8.85 1.48 11.75.98 1.42 2.15 3.01 3.66 2.95 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.27.95 3.82.92 1.58-.03 2.58-1.44 3.55-2.87 1.12-1.64 1.58-3.23 1.61-3.31-.04-.02-3.08-1.18-3.11-4.67zM14.16 3.42c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.61.79-3.46 1.78-.76.87-1.43 2.27-1.25 3.62 1.32.1 2.66-.67 3.49-1.62z"/></svg>
              <div className="text-start">
                <div className="text-[10px] text-white/60 leading-tight">
                  {dict.app.iosTop}
                </div>
                <div className="text-sm font-bold leading-none">
                  {dict.app.iosBottom}
                </div>
              </div>
            </a>
            <a
              href={APP_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="shine inline-flex items-center gap-3 h-14 px-6 rounded-2xl bg-black border border-white/15 hover:border-white/30 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7"><path fill="#34A853" d="M3.6 20.5l9.2-9.2-3.1-3.1L3 16.9c-.1 1.3.1 2.6.6 3.6z"/><path fill="#FBBC04" d="M19.9 11.4l-3.4-2-3.4 3.4 3.4 3.4 3.4-2c1.2-.7 1.2-2.1 0-2.8z"/><path fill="#4285F4" d="M3.6 3.5c-.5 1-.7 2.3-.6 3.6l6.7 8.7L13 12.8 3.6 3.5z"/><path fill="#EA4335" d="M12.8 11.3l3.7-3.7L7.3 2.4c-1-.5-2.2-.7-3.3-.3-.2.1-.3.1-.4.2l9.2 9z"/></svg>
              <div className="text-start">
                <div className="text-[10px] text-white/60 leading-tight">
                  {dict.app.androidTop}
                </div>
                <div className="text-sm font-bold leading-none">
                  {dict.app.androidBottom}
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Phones */}
        <div className="relative h-[520px] sm:h-[600px] hidden lg:block">
          <div className="absolute right-0 top-4">
            <PhoneFrame src={SCREENS[1]} delay={0.1} rotate={6} />
          </div>
          <div className="absolute left-4 top-24 z-10">
            <PhoneFrame src={SCREENS[0]} delay={0.25} rotate={-5} />
          </div>
          <div className="absolute right-10 bottom-0">
            <PhoneFrame src={SCREENS[2]} delay={0.4} rotate={3} />
          </div>
        </div>

        {/* Mobile phones row */}
        <div className="lg:hidden -mx-5">
          <div className="flex gap-5 overflow-x-auto px-5 pb-4 no-scrollbar snap-x snap-mandatory">
            {SCREENS.slice(0, 5).map((src, i) => (
              <div key={i} className="snap-center shrink-0">
                <PhoneFrame src={src} delay={i * 0.1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
