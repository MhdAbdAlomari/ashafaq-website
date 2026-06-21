"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { dictionaries, type Dictionary, type Locale } from "@/lib/i18n";

type Ctx = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ashafaq:locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "ar" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const dict = dictionaries[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = dict.dir;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(
    () => setLocaleState((l) => (l === "ar" ? "en" : "ar")),
    []
  );

  return (
    <LanguageContext.Provider
      value={{ locale, dict: dictionaries[locale], setLocale, toggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
