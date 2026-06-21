"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { SOCIAL_LINKS } from "@/lib/branches";
import { CONTACT } from "@/lib/i18n";

export default function Footer() {
  const { dict } = useLang();
  const year = new Date().getFullYear();
  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#app", label: dict.nav.app },
    { href: "#branches", label: dict.nav.branches },
    { href: "#franchise", label: dict.nav.franchise },
    { href: "#contact", label: dict.nav.contact },
  ];
  const socials: { name: string; href: string }[] = [
    { name: "X", href: SOCIAL_LINKS.x },
    { name: "Instagram", href: SOCIAL_LINKS.instagram },
    { name: "TikTok", href: SOCIAL_LINKS.tiktok },
    { name: "Snapchat", href: SOCIAL_LINKS.snapchat },
    { name: "Facebook", href: SOCIAL_LINKS.facebook },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#05061a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-gradient p-1.5 glow-ring">
              <Image
                src="/images/Logo1.png"
                alt="Ashafaq"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold">{dict.footer.brand}</span>
          </div>
          <p className="mt-4 text-sm text-white/55 leading-relaxed">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40">
            {dict.footer.quickLinks}
          </div>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40">
            {dict.footer.followUs}
          </div>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40">
            {dict.footer.contact}
          </div>
          <ul className="mt-4 space-y-3 text-sm">
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

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 text-center sm:text-start">
          <div>
            © {year} {dict.footer.brand}. {dict.footer.rights}.
          </div>
          <div>{dict.footer.madeIn}</div>
        </div>
      </div>
    </footer>
  );
}
