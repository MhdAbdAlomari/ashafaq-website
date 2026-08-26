"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { SOCIAL_LINKS, APP_LINKS } from "@/lib/branches";
import { CONTACT } from "@/lib/i18n";

export default function Footer() {
  const { dict } = useLang();
  const year = new Date().getFullYear();

  const socials: { name: string; href: string }[] = [
    { name: "X", href: SOCIAL_LINKS.x },
    { name: "Instagram", href: SOCIAL_LINKS.instagram },
    { name: "TikTok", href: SOCIAL_LINKS.tiktok },
    { name: "Snapchat", href: SOCIAL_LINKS.snapchat },
    { name: "Facebook", href: SOCIAL_LINKS.facebook },
  ];

  return (
    <footer className="relative bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <Image
            src="/images/Logo_white.png"
            alt={dict.footer.brand}
            width={500}
            height={268}
            className="h-11 w-auto object-contain"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
            {dict.footer.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 h-8 inline-flex items-center rounded-full bg-white/10 text-white/85 hover:bg-white/20 transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/55">
            {dict.footer.columns.services}
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/services/" className="text-sm text-white/75 hover:text-white">
                {dict.nav.services}
              </Link>
            </li>
            <li>
              <Link href="/prices/" className="text-sm text-white/75 hover:text-white">
                {dict.nav.prices}
              </Link>
            </li>
            <li>
              <Link href="/mobile-wash/" className="text-sm text-white/75 hover:text-white">
                {dict.nav.mobileWash}
              </Link>
            </li>
          </ul>
        </div>

        {/* Fleet column */}
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/55">
            {dict.footer.columns.fleet}
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/fleet/" className="text-sm text-white/75 hover:text-white">
                {dict.nav.fleet}
              </Link>
            </li>
          </ul>

          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-white/55">
            {dict.footer.columns.blog}
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/blog/" className="text-sm text-white/75 hover:text-white">
                {dict.nav.blog}
              </Link>
            </li>
          </ul>
        </div>

        {/* Support column */}
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/55">
            {dict.footer.columns.support}
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/faq/" className="text-white/75 hover:text-white">
                {dict.nav.faq}
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="text-white/75 hover:text-white">
                {dict.nav.contact}
              </Link>
            </li>
            <li>
              <a
                href={CONTACT.mailto}
                className="inline-flex items-center gap-2 text-white/75 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span dir="ltr">{CONTACT.email}</span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.tel}
                className="inline-flex items-center gap-2 text-white/75 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span dir="ltr">{CONTACT.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                {dict.contact.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* App store badges */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <a
            href={APP_LINKS.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 h-12 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.05 12.04c-.03-2.95 2.41-4.36 2.52-4.43-1.38-2.01-3.52-2.29-4.28-2.32-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.86-1.01-1.98.03-3.81 1.16-4.83 2.93-2.06 3.57-.53 8.85 1.48 11.75.98 1.42 2.15 3.01 3.66 2.95 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.27.95 3.82.92 1.58-.03 2.58-1.44 3.55-2.87 1.12-1.64 1.58-3.23 1.61-3.31-.04-.02-3.08-1.18-3.11-4.67zM14.16 3.42c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.61.79-3.46 1.78-.76.87-1.43 2.27-1.25 3.62 1.32.1 2.66-.67 3.49-1.62z"/></svg>
            <div className="text-start leading-tight">
              <div className="text-[10px] text-white/60">{dict.app.iosTop}</div>
              <div className="text-xs font-bold">{dict.app.iosBottom}</div>
            </div>
          </a>
          <a
            href={APP_LINKS.android}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 h-12 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#34A853" d="M3.6 20.5l9.2-9.2-3.1-3.1L3 16.9c-.1 1.3.1 2.6.6 3.6z"/><path fill="#FBBC04" d="M19.9 11.4l-3.4-2-3.4 3.4 3.4 3.4 3.4-2c1.2-.7 1.2-2.1 0-2.8z"/><path fill="#4285F4" d="M3.6 3.5c-.5 1-.7 2.3-.6 3.6l6.7 8.7L13 12.8 3.6 3.5z"/><path fill="#EA4335" d="M12.8 11.3l3.7-3.7L7.3 2.4c-1-.5-2.2-.7-3.3-.3-.2.1-.3.1-.4.2l9.2 9z"/></svg>
            <div className="text-start leading-tight">
              <div className="text-[10px] text-white/60">{dict.app.androidTop}</div>
              <div className="text-xs font-bold">{dict.app.androidBottom}</div>
            </div>
          </a>
        </div>
      </div>

      {/* Copyright row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center sm:text-start">
          <div>
            © {year} {dict.footer.brand}. {dict.footer.rights}.
          </div>
          <div>{dict.footer.madeIn}</div>
        </div>
      </div>
    </footer>
  );
}
