"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { useLang } from "@/components/LanguageProvider";

export default function FaqClient() {
  const { dict } = useLang();
  const f = dict.faqPage;
  const [activeCategory, setActiveCategory] = useState<string>(f.categories[0].key);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const current = f.categories.find((c) => c.key === activeCategory) ?? f.categories[0];

  return (
    <>
      <PageHero eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label={f.categoriesLabel}
            className="flex flex-wrap gap-2 justify-center"
          >
            {f.categories.map((c) => {
              const isActive = c.key === activeCategory;
              return (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(c.key);
                    setOpenIndex(0);
                  }}
                  className={`px-4 h-10 rounded-full text-sm font-semibold border transition-colors ${
                    isActive
                      ? "bg-[#1F5EFF] border-[#1F5EFF] text-white"
                      : "bg-white border-[#E6EAF2] text-[#0B1F3A] hover:border-[#DDE7FF] hover:bg-[#F5F7FA]"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Accordion */}
          <div className="mt-10 space-y-3">
            {current.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className="card rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-3 p-5 text-start"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 shrink-0 rounded-full bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm sm:text-[15px] text-[#667085] leading-relaxed border-t border-[#E6EAF2] pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
