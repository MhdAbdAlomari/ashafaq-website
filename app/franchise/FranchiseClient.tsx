"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CONTACT } from "@/lib/i18n";

export default function FranchiseClient() {
  const { dict } = useLang();
  const f = dict.franchisePage;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    hasLocation: "" as "" | "yes" | "no",
    area: "",
    experience: "",
    notes: "",
  });
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const composed = () => {
    const lines = [
      f.applicationIntro,
      "",
      form.name && `${f.fieldName}: ${form.name}`,
      form.phone && `${f.fieldPhone}: ${form.phone}`,
      form.email && `${f.fieldEmail}: ${form.email}`,
      form.city && `${f.fieldCity}: ${form.city}`,
      form.hasLocation &&
        `${f.fieldHasLocation}: ${
          form.hasLocation === "yes" ? f.fieldHasLocationYes : f.fieldHasLocationNo
        }`,
      form.area && `${f.fieldArea}: ${form.area}`,
      form.experience && `${f.fieldExperience}: ${form.experience}`,
      form.notes && `${f.fieldNotes}: ${form.notes}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const whatsappHref = () => {
    const text = encodeURIComponent(composed());
    return `${CONTACT.whatsapp}?text=${text}`;
  };

  const emailHref = () => {
    const subject = encodeURIComponent(f.applicationSubject);
    const body = encodeURIComponent(composed());
    return `${CONTACT.mailto}?subject=${subject}&body=${body}`;
  };

  const scrollToForm = () => {
    document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              {f.heroEyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.15] pb-1"
            >
              {f.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-sm sm:text-base lg:text-lg text-[#667085] leading-relaxed max-w-xl"
            >
              {f.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8"
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="btn-primary text-sm sm:text-base shine"
              >
                {f.heroCta}
                <span aria-hidden>→</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_20px_60px_-30px_rgba(11,31,58,0.35)]"
          >
            <div className="relative aspect-[3.2/1] sm:aspect-[16/9]">
              <Image
                src="/images/ashafaq-banner.png"
                alt={dict.footer.brand}
                fill
                priority
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Ashafaq */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">{f.heroEyebrow}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-[1.2]">
              {f.whyTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">{f.whySubtitle}</p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {f.whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                  className="card rounded-2xl p-6 hover:border-[#DDE7FF] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#0B1F3A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_20px_60px_-30px_rgba(11,31,58,0.25)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/ashafaq-branches/al-munsiyah.jpeg"
                  alt={f.whyPhotoCaption}
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent px-5 py-4">
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {f.whyPhotoCaption}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Repeat primary CTA */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={scrollToForm}
              className="btn-primary text-sm sm:text-base"
            >
              {f.heroCta}
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* What the franchisee gets */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_20px_60px_-30px_rgba(11,31,58,0.25)] order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] bg-[#F5F7FA]">
              <Image
                src="/images/companies.png"
                alt={f.whatTitle}
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_-30px_rgba(11,31,58,0.5)]"
          >
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{f.whatIntro}</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-[1.2]">
              {f.whatTitle}
            </h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {f.whatItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="w-6 h-6 shrink-0 rounded-full border border-white/25 grid place-items-center text-white text-xs font-bold"
                  >
                    ✓
                  </span>
                  <span className="text-sm sm:text-[15px] text-white leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Repeat primary CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={scrollToForm}
            className="btn-primary text-sm sm:text-base"
          >
            {f.heroCta}
            <span aria-hidden>→</span>
          </button>
        </div>
      </section>

      {/* Steps to join */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">{f.heroEyebrow}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-[1.2]">
              {f.stepsTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">{f.stepsSubtitle}</p>
          </div>

          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {f.steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="relative card rounded-2xl p-6 pt-8"
              >
                <span className="absolute -top-4 start-6 w-10 h-10 rounded-full bg-[#1F5EFF] text-white grid place-items-center text-base font-extrabold shadow-[0_8px_20px_-8px_rgba(31,94,255,0.55)]">
                  {i + 1}
                </span>
                <div className="text-base font-bold text-[#0B1F3A]">{step}</div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={scrollToForm}
              className="btn-primary text-sm sm:text-base"
            >
              {f.heroCta}
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Fees note */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card rounded-3xl p-7 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#EAF1FF] text-[#1F5EFF] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6" />
                  <circle cx="12" cy="16" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">{f.feesTitle}</h3>
                <p className="mt-2 text-sm sm:text-base text-[#0B1F3A] leading-relaxed">
                  {f.feesBody}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section id="franchise-form" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA] scroll-mt-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="eyebrow">{f.formEyebrow}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-[1.2]">
              {f.formTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">{f.formSubtitle}</p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = whatsappHref();
            }}
            className="card rounded-3xl p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fr-name" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldName}
                </label>
                <input
                  id="fr-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={f.fieldNamePlaceholder}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div>
                <label htmlFor="fr-phone" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldPhone}
                </label>
                <input
                  id="fr-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={f.fieldPhonePlaceholder}
                  dir="ltr"
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div>
                <label htmlFor="fr-email" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldEmail}
                </label>
                <input
                  id="fr-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={f.fieldEmailPlaceholder}
                  dir="ltr"
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div>
                <label htmlFor="fr-city" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldCity}
                </label>
                <input
                  id="fr-city"
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder={f.fieldCityPlaceholder}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div>
                <label htmlFor="fr-loc" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldHasLocation}
                </label>
                <select
                  id="fr-loc"
                  value={form.hasLocation}
                  onChange={(e) => setForm({ ...form, hasLocation: e.target.value as "yes" | "no" | "" })}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                >
                  <option value="">—</option>
                  <option value="yes">{f.fieldHasLocationYes}</option>
                  <option value="no">{f.fieldHasLocationNo}</option>
                </select>
              </div>
              <div>
                <label htmlFor="fr-area" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldArea}
                </label>
                <input
                  id="fr-area"
                  type="text"
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  placeholder={f.fieldAreaPlaceholder}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="fr-exp" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldExperience}
                </label>
                <input
                  id="fr-exp"
                  type="text"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  placeholder={f.fieldExperiencePlaceholder}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="fr-notes" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {f.fieldNotes}
                </label>
                <textarea
                  id="fr-notes"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder={f.fieldNotesPlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition resize-y"
                />
              </div>
            </div>

            <p className="mt-6 text-xs text-[#667085] leading-relaxed bg-[#F5F7FA] border border-[#E6EAF2] rounded-xl px-4 py-3">
              <span aria-hidden className="me-1.5 text-[#1F5EFF]">ℹ</span>
              {f.deliveryNote}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <button type="submit" className="btn-primary text-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                {f.submitWhatsapp}
              </button>
              <a href={emailHref()} className="btn-secondary text-sm">
                {f.submitEmail}
              </a>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] text-center leading-[1.2]">
            {f.faqTitle}
          </h2>
          <div className="mt-10 space-y-3">
            {f.faq.map((item, i) => {
              const open = faqOpen === i;
              return (
                <div key={i} className="card rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setFaqOpen(open ? null : i)}
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

      {/* Final CTA banner */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-12 text-center shadow-[0_20px_60px_-30px_rgba(11,31,58,0.5)]"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.2]">
              {f.ctaBanner}
            </h2>
            <div className="mt-8">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-[#1F5EFF] text-white font-bold hover:bg-[#1A50DA] transition-colors shadow-[0_10px_24px_-8px_rgba(31,94,255,0.55)] shine"
              >
                {f.ctaBannerButton}
                <span aria-hidden>→</span>
              </button>
            </div>
            <p className="mt-6 text-xs text-white/60">
              <Link href="/contact/" className="hover:text-white">
                {dict.nav.contact}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
