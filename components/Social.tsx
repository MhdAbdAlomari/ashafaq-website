"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { SOCIAL_LINKS } from "@/lib/branches";

const SOCIALS = [
  {
    name: "X",
    href: SOCIAL_LINKS.x,
    color: "from-zinc-700 to-zinc-900",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2H21l-6.49 7.41L22 22h-6.78l-5.31-6.96L3.5 22H1l7-7.99L0 2h6.92l4.79 6.31L18.244 2zm-1.19 18h1.84L7.02 4H5.06l11.994 16z"/></svg>
    ),
  },
  {
    name: "Instagram",
    href: SOCIAL_LINKS.instagram,
    color: "from-pink-500 to-purple-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
    ),
  },
  {
    name: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    color: "from-cyan-400 to-pink-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21 8.5a8 8 0 0 1-4.7-1.5v8a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.03 1 .08v3.34a3.2 3.2 0 1 0 2.2 3V2h3.3A4.7 4.7 0 0 0 21 5.2v3.3z"/></svg>
    ),
  },
  {
    name: "Snapchat",
    href: SOCIAL_LINKS.snapchat,
    color: "from-yellow-300 to-yellow-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2c3.5 0 5.5 2.7 5.5 6.3 0 1 .1 1.9.5 2.4.4.4.9.5 1.3.7.3.1.6.3.6.6 0 .5-.9.9-1.7 1.1-.3.1-.7.1-.8.4-.1.4.7 1.6 1.9 2.4.8.5 1.7.8 2.6 1 .3 0 .5.3.4.6-.2.6-1.3 1.1-3.2 1.4-.2.1-.3.4-.3.6-.1.4-.3.6-.6.6h-.1c-.4 0-.9-.2-1.7-.2-.4 0-.8 0-1.2.1-.7.1-1.3.5-2 .9-.8.5-1.6 1-2.7 1-1.2 0-1.9-.5-2.7-1-.7-.4-1.3-.8-2-.9-.4-.1-.8-.1-1.2-.1-.8 0-1.4.2-1.7.2-.4 0-.6-.2-.7-.6 0-.2-.1-.5-.3-.6-1.9-.3-3-.8-3.2-1.4-.1-.3.1-.6.4-.6.9-.2 1.8-.5 2.6-1 1.2-.8 2-2 1.9-2.4-.1-.3-.5-.4-.8-.4-.8-.2-1.7-.6-1.7-1.1 0-.3.3-.5.6-.6.4-.2.9-.3 1.3-.7.4-.5.5-1.4.5-2.4C6.5 4.7 8.5 2 12 2z"/></svg>
    ),
  },
  {
    name: "Facebook",
    href: SOCIAL_LINKS.facebook,
    color: "from-blue-500 to-blue-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
    ),
  },
];

export default function Social() {
  const { dict } = useLang();
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-1">
            {dict.social.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            {dict.social.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-6 text-center overflow-hidden hover:-translate-y-1.5 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              <div className="relative flex flex-col items-center gap-3">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} grid place-items-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  {s.icon}
                </div>
                <span className="text-sm font-semibold text-white/85">
                  {s.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
