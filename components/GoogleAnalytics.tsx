"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * Client-side GA4 loader + route-change page_view emitter.
 *
 * On initial load: the gtag.js snippet fires an automatic `page_view` via the
 * default `config` call in the inline init script.
 * On <Link>-based client navigation: usePathname + useSearchParams re-run this
 * component's effect, and we manually fire a `page_view` event with the new
 * URL. Without this, Next.js App Router client navigation would only track
 * the first page load (a well-known GA4 + Next gotcha).
 */
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    // Skip the first fire (already handled by config's initial page_view).
    // Distinguish via a small module-scoped flag on window.
    const w = window as unknown as { __gaInitialPageview?: boolean };
    if (!w.__gaInitialPageview) {
      w.__gaInitialPageview = true;
      return;
    }
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.origin + path,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
