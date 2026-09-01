"use client";

import { useLang } from "./LanguageProvider";
import { APP_LINKS } from "@/lib/branches";
import { trackEvent } from "@/lib/analytics";

/**
 * Shared App Store + Google Play button pair. Booking is app-only per the
 * business rule, so this is the single canonical CTA for any surface where
 * a "download the app" or "book" action lives — hero, service pages,
 * pricing, branch cards, etc.
 *
 * variant:
 *   - "primary"   dark navy buttons (default, used on light backgrounds)
 *   - "onDark"    lighter surface for use on the navy anchor blocks
 *   - "compact"   smaller pill for card footers
 */
export default function StoreButtons({
  source,
  variant = "primary",
  align = "start",
  showNote = true,
}: {
  /** Analytics source label, e.g. "hero", "prices_cta", "branch_card". */
  source: string;
  variant?: "primary" | "onDark" | "compact";
  align?: "start" | "center";
  showNote?: boolean;
}) {
  const { dict } = useLang();

  const base =
    variant === "compact"
      ? "inline-flex items-center gap-2 h-11 px-4 rounded-xl font-semibold text-[13px]"
      : "inline-flex items-center gap-3 h-14 px-6 rounded-2xl font-bold text-sm";

  const primaryStyle =
    variant === "onDark"
      ? "bg-white text-[#0B1F3A] hover:bg-white/90"
      : "bg-[#0B1F3A] text-white hover:bg-[#122a4d]";

  const wrap = `${align === "center" ? "justify-center" : ""} flex flex-wrap gap-3`;

  return (
    <div>
      <div className={wrap}>
        <a
          href={APP_LINKS.ios}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("app_download_click", { platform: "ios", source })}
          aria-label={dict.common.downloadOnAppStore}
          className={`${base} ${primaryStyle} shine transition-colors`}
        >
          <svg viewBox="0 0 24 24" className={variant === "compact" ? "w-4 h-4" : "w-6 h-6"} fill="currentColor" aria-hidden>
            <path d="M17.05 12.04c-.03-2.95 2.41-4.36 2.52-4.43-1.38-2.01-3.52-2.29-4.28-2.32-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.86-1.01-1.98.03-3.81 1.16-4.83 2.93-2.06 3.57-.53 8.85 1.48 11.75.98 1.42 2.15 3.01 3.66 2.95 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.27.95 3.82.92 1.58-.03 2.58-1.44 3.55-2.87 1.12-1.64 1.58-3.23 1.61-3.31-.04-.02-3.08-1.18-3.11-4.67zM14.16 3.42c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.61.79-3.46 1.78-.76.87-1.43 2.27-1.25 3.62 1.32.1 2.66-.67 3.49-1.62z" />
          </svg>
          <span className="flex flex-col items-start leading-none text-start">
            {variant !== "compact" && (
              <span className="text-[10px] opacity-70">{dict.app.iosTop}</span>
            )}
            <span className={variant === "compact" ? "text-[13px]" : "text-base"}>
              {dict.common.appStoreLabel}
            </span>
          </span>
        </a>
        <a
          href={APP_LINKS.android}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("app_download_click", { platform: "android", source })}
          aria-label={dict.common.getItOnGooglePlay}
          className={`${base} ${primaryStyle} shine transition-colors`}
        >
          <svg viewBox="0 0 24 24" className={variant === "compact" ? "w-4 h-4" : "w-6 h-6"} aria-hidden>
            <path fill="#34A853" d="M3.6 20.5l9.2-9.2-3.1-3.1L3 16.9c-.1 1.3.1 2.6.6 3.6z" />
            <path fill="#FBBC04" d="M19.9 11.4l-3.4-2-3.4 3.4 3.4 3.4 3.4-2c1.2-.7 1.2-2.1 0-2.8z" />
            <path fill="#4285F4" d="M3.6 3.5c-.5 1-.7 2.3-.6 3.6l6.7 8.7L13 12.8 3.6 3.5z" />
            <path fill="#EA4335" d="M12.8 11.3l3.7-3.7L7.3 2.4c-1-.5-2.2-.7-3.3-.3-.2.1-.3.1-.4.2l9.2 9z" />
          </svg>
          <span className="flex flex-col items-start leading-none text-start">
            {variant !== "compact" && (
              <span className="text-[10px] opacity-70">{dict.app.androidTop}</span>
            )}
            <span className={variant === "compact" ? "text-[13px]" : "text-base"}>
              {dict.common.googlePlayLabel}
            </span>
          </span>
        </a>
      </div>
      {showNote && (
        <p
          className={`mt-3 text-xs ${
            variant === "onDark" ? "text-white/70" : "text-[#667085]"
          } ${align === "center" ? "text-center" : ""}`}
        >
          {dict.common.bookAppOnlyNote}
        </p>
      )}
    </div>
  );
}
