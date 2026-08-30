"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";

/**
 * Full-viewport-width banner. Logo is a separately-positioned overlay element
 * (NOT baked into the image) so it stays crisp and can be swapped/localized.
 */
export default function Banner() {
  const { dict } = useLang();
  return (
    <section
      aria-label={dict.footer.brand}
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden"
    >
      <div className="relative w-full aspect-[3.2/1]">
        <Image
          src="/images/ashafaq-banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute top-3 sm:top-5 lg:top-6 start-4 sm:start-8 lg:start-12 z-10">
          <Image
            src="/images/Logo_white.png"
            alt={dict.footer.brand}
            width={500}
            height={268}
            className="h-8 sm:h-12 lg:h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
