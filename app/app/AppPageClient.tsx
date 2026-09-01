"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AppSection from "@/components/AppSection";
import StoreButtons from "@/components/StoreButtons";
import { useLang } from "@/components/LanguageProvider";

const CAPABILITY_ICONS = [
  // Mobile wash — location pin
  <svg key="c1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  // Branch appointment — calendar
  <svg key="c2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  // Fleet management — building
  <svg key="c3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 11h.01M15 11h.01"/></svg>,
];

export default function AppPageClient() {
  const { dict } = useLang();
  const a = dict.appPage;
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />
      <AppSection hideHeader />

      {/* Capabilities — what you can do from the app */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">{a.capabilitiesEyebrow}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
              {a.capabilitiesTitle}
            </h2>
          </div>
          <ul className="mt-10 grid sm:grid-cols-3 gap-5 sm:gap-6">
            {a.capabilities.map((cap, i) => {
              const Wrapper = cap.href
                ? ({ children }: { children: React.ReactNode }) => (
                    <Link
                      href={cap.href!}
                      className="card rounded-2xl p-6 flex flex-col hover:border-[#DDE7FF] hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      {children}
                    </Link>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <div className="card rounded-2xl p-6 flex flex-col h-full">
                      {children}
                    </div>
                  );

              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                >
                  <Wrapper>
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
                      <span className="w-6 h-6 block">{CAPABILITY_ICONS[i % CAPABILITY_ICONS.length]}</span>
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-bold text-[#0B1F3A]">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#667085] leading-relaxed flex-1">
                      {cap.desc}
                    </p>
                    {cap.href && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5EFF]">
                        {dict.homeTeasers.seeMore}
                        <span>→</span>
                      </span>
                    )}
                  </Wrapper>
                </motion.li>
              );
            })}
          </ul>
          <div className="mt-12 flex justify-center">
            <StoreButtons source="app_page_bottom" align="center" showNote />
          </div>
        </div>
      </section>
    </>
  );
}
