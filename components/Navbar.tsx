"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";

export default function Navbar() {
  const { dict, locale, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#app", label: dict.nav.app },
    { href: "#branches", label: dict.nav.branches },
    { href: "#franchise", label: dict.nav.franchise },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070819]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-brand-gradient p-1.5 glow-ring">
            <Image
              src="/images/Logo1.png"
              alt="Ashafaq"
              width={64}
              height={64}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
            {dict.footer.brand}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="px-3 h-9 text-xs font-semibold rounded-full glass hover:bg-white/10 transition-colors uppercase tracking-wider"
          >
            {locale === "ar" ? "EN" : "ع"}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center h-9 px-5 text-sm font-semibold rounded-full bg-brand-gradient shine glow-ring hover:scale-[1.03] transition-transform"
          >
            {dict.nav.bookNow}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full glass"
            aria-label="Menu"
          >
            <span className="relative block w-5 h-3">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-white transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#070819]/95 backdrop-blur-xl border-b border-white/5 pointer-events-auto"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => {
                const navigate = () => {
                  const id = l.href.slice(1);
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", l.href);
                  }
                  setOpen(false);
                };
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onPointerUp={(e) => {
                        e.preventDefault();
                        navigate();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (e.detail === 0) navigate();
                      }}
                      className="block px-4 py-3 text-base rounded-xl hover:bg-white/5 active:bg-white/10 touch-manipulation"
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
