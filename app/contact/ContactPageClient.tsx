"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { useLang } from "@/components/LanguageProvider";
import { CONTACT } from "@/lib/i18n";

export default function ContactPageClient() {
  const { dict } = useLang();
  const c = dict.contactPage;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const composed = () => {
    const lines = [
      name ? `${c.nameLabel}: ${name}` : "",
      phone ? `${c.phoneLabel}: ${phone}` : "",
      message ? `${c.messageLabel}: ${message}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const whatsappHref = () => {
    const text = encodeURIComponent(composed() || "مرحباً، أود الاستفسار عن خدماتكم.");
    return `${CONTACT.whatsapp}?text=${text}`;
  };

  const emailHref = () => {
    const subject = encodeURIComponent("استفسار من موقع الشفق");
    const body = encodeURIComponent(composed());
    return `${CONTACT.mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
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
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
                {c.formTitle}
              </h2>
              <p className="mt-1 text-sm text-[#667085]">{c.formSubtitle}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {c.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.namePlaceholder}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {c.phoneLabel}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={c.phonePlaceholder}
                  className="w-full h-11 px-4 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition"
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                  {c.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#E6EAF2] bg-white text-[#0B1F3A] placeholder-[#B0B7C3] focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/15 transition resize-y"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="btn-primary text-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                {c.sendWhatsapp}
              </button>
              <a href={emailHref()} className="btn-secondary text-sm">
                {c.sendEmail}
              </a>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Reuse existing Contact CTA block for channels */}
      <Contact />
    </>
  );
}
