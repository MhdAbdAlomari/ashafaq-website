/**
 * Thin GA4 event helper. Guards against `gtag` being undefined (SSR, ad-block,
 * first-paint before analytics loads) so calls are always safe.
 *
 * Privacy rule: NEVER pass PII (names, phone numbers, email addresses typed
 * into the contact form) as event params. Only pass interaction/click
 * metadata — which button, which branch slug, which link URL.
 */
export const GA_MEASUREMENT_ID = "G-89R2NSHZG1";

type GtagFn = (
  command: "event" | "config" | "js" | "set",
  action: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}
