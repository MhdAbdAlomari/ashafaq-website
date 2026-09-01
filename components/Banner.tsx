"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";

/**
 * Full-viewport-width homepage banner rendered as the very first element on
 * the page. The Ashafaq logo is already baked into the top corner of this
 * artwork, so no separate overlay logo is layered on top.
 *
 * Extra top padding leaves clean space under the fixed navbar so the banner
 * subject (the workers + car) isn't clipped or masked by the header.
 */
export default function Banner() {
  const { dict } = useLang();
  return (
    <section
      aria-label={dict.common.brandOfficial}
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="relative w-full aspect-[3.2/1]">
        <Image
          src="/images/ashafaq-banner.png"
          alt={dict.common.brandOfficial}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
