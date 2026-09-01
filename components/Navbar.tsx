"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";
import { trackEvent } from "@/lib/analytics";

type NavLeaf = { href: string; label: string };
type NavGroup = { label: string; children: NavLeaf[] };
type NavItem = NavLeaf | NavGroup;

function isGroup(item: NavItem): item is NavGroup {
  return (item as NavGroup).children !== undefined;
}

export default function Navbar() {
  const { dict, locale, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [dropdownOpen]);

  const items: NavItem[] = [
    {
      label: dict.nav.servicesGroup,
      children: [
        { href: "/services/", label: dict.nav.services },
        { href: "/prices/", label: dict.nav.prices },
        { href: "/mobile-wash/", label: dict.nav.mobileWash },
      ],
    },
    { href: "/branches/", label: dict.nav.branches },
    { href: "/fleet/", label: dict.nav.fleet },
    { href: "/blog/", label: dict.nav.blog },
    { href: "/faq/", label: dict.nav.faq },
  ];

  const handleMobileClick = () => {
    setOpen(false);
    setMobileGroupOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E6EAF2] shadow-[0_1px_2px_rgba(11,31,58,0.04)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={dict.footer.brand}
        >
          <Image
            src="/images/Logo_blue.png"
            alt={dict.footer.brand}
            width={500}
            height={268}
            priority
            className="h-9 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {items.map((item) =>
            isGroup(item) ? (
              <li
                key={item.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className="px-4 py-2 text-sm font-medium text-[#0B1F3A]/75 hover:text-[#1F5EFF] rounded-full hover:bg-[#EAF1FF] transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  <svg
                    aria-hidden
                    viewBox="0 0 12 12"
                    className={`w-3 h-3 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 4.5 6 7.5 9 4.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full start-0 mt-2 min-w-[220px] rounded-2xl bg-white border border-[#E6EAF2] shadow-[0_10px_30px_-15px_rgba(11,31,58,0.15)] p-2"
                    >
                      {item.children.map((leaf) => (
                        <li key={leaf.href}>
                          <Link
                            href={leaf.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm font-medium text-[#0B1F3A] rounded-xl hover:bg-[#EAF1FF] hover:text-[#1F5EFF] transition-colors"
                          >
                            {leaf.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#0B1F3A]/75 hover:text-[#1F5EFF] rounded-full hover:bg-[#EAF1FF] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="px-3 h-9 text-xs font-semibold rounded-full border border-[#E6EAF2] bg-white text-[#0B1F3A] hover:bg-[#F5F7FA] transition-colors uppercase tracking-wider"
          >
            {locale === "ar" ? "EN" : "ع"}
          </button>
          <Link
            href="/app/"
            onClick={() => trackEvent("app_download_click", { source: "navbar_desktop" })}
            className="hidden sm:inline-flex items-center h-9 px-5 text-sm font-semibold rounded-full bg-[#1F5EFF] text-white shine hover:bg-[#1A50DA] transition-colors shadow-[0_6px_16px_-6px_rgba(31,94,255,0.45)]"
          >
            {dict.nav.bookNow}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-[#E6EAF2] bg-white"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
          >
            <span className="relative block w-5 h-3">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-[#0B1F3A] transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#0B1F3A] transition-transform ${
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-[#E6EAF2]"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {items.map((item) =>
                isGroup(item) ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileGroupOpen((v) => !v)}
                      aria-expanded={mobileGroupOpen}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#0B1F3A] rounded-xl hover:bg-[#EAF1FF] active:bg-[#DDE7FF] touch-manipulation"
                    >
                      <span>{item.label}</span>
                      <svg
                        aria-hidden
                        viewBox="0 0 12 12"
                        className={`w-3 h-3 transition-transform ${
                          mobileGroupOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 4.5 6 7.5 9 4.5" />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileGroupOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ps-4"
                        >
                          {item.children.map((leaf) => (
                            <li key={leaf.href}>
                              <Link
                                href={leaf.href}
                                onClick={handleMobileClick}
                                className="block px-4 py-2.5 text-[15px] font-medium text-[#0B1F3A]/85 rounded-xl hover:bg-[#EAF1FF] active:bg-[#DDE7FF] touch-manipulation"
                              >
                                {leaf.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleMobileClick}
                      className="block px-4 py-3 text-base font-medium text-[#0B1F3A] rounded-xl hover:bg-[#EAF1FF] active:bg-[#DDE7FF] touch-manipulation"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
              <li className="pt-2">
                <Link
                  href="/app/"
                  onClick={() => {
                    trackEvent("app_download_click", { source: "navbar_mobile" });
                    handleMobileClick();
                  }}
                  className="block w-full text-center px-4 py-3 text-base font-bold rounded-xl bg-[#1F5EFF] text-white hover:bg-[#1A50DA] transition-colors"
                >
                  {dict.nav.bookNow}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
