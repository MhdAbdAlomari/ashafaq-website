export type TestimonialCategory = {
  id: string;
  emoji: string;
  title: string;
  sourceNote?: string; // which platform(s) these were gathered from
  quotes: string[];
};

// Real customer quotes gathered from App Store, Instagram, and Snapchat.
// Names and per-quote star ratings were intentionally NOT recorded, so the
// rendering side must not fabricate either. Quotes are Arabic-only by design
// (dialect Arabic verbatim from the source platforms) — the Testimonials
// component forces dir="rtl" lang="ar" on the quote text regardless of the
// site's language toggle.
export const TESTIMONIAL_CATEGORIES: TestimonialCategory[] = [
  {
    id: "quality",
    emoji: "🧼",
    title: "جودة ونظافة الغسيل",
    sourceNote: "من: App Store",
    quotes: [
      "اشهد بالله انها افضل مغسله سيارات عندي جوده مواد ونظافه وانصح بها",
      "م شاء الله شغل بذمه وضميير مغسلة ١٠/١٠",
      "تنظيفهم ممتاز جداً، يركزون على التفاصيل الصغيرة داخل السيارة والجنوط تطلع تلمع",
      "الغسيل اليدوي عندهم مميز والمناشف نظيفة وما تخدش البودي، شغل احترافي",
      "جربت فروع كثيرة بالرياض، لكن لمعة الشفق غير، والمواد المستخدمة واضحة جودتها",
    ],
  },
  {
    id: "mobile",
    emoji: "🚗",
    title: "خدمة الغسيل المتنقل (عبر التطبيق)",
    sourceNote: "من: إنستقرام، سناب شات، App Store",
    quotes: [
      "خدمة الغسيل المتنقل فكت لي أزمة، جوني عند البيت والسيارة رجعت وكالة",
      "التطبيق سهل وسريع بالحجز، وتتبع الخدمة دقيق والعمال يوصلون على الموعد",
      "أفضل غسيل متنقل جربته في الرياض، يجيبون معهم كل المعدات والنتيجة تبيض الوجه",
      "شغلهم مرتب جداً في الخدمة المنزلية، وسياراتهم مجهزة بالكامل ومحترفين",
      "العروض والخصومات في التطبيق ممتازة، جودة عالية وسعر منافس جداً",
    ],
  },
  {
    id: "service",
    emoji: "🤝",
    title: "التعامل والأمانة والاحترافية",
    quotes: [
      "العمالة أخلاقهم عالية جداً، ويتقبلون الملاحظات بصدر رحب قبل ما يسلمونك السيارة",
      "أمانة وسرعة في الإنجاز، نسيت غرض ثمين بالسيارة وحفظوه لي، شكراً لتعاملهم الراقي",
      "استقبال ممتاز في الفرع، وتنظيم وسرعة في الدخول بالرغم من الزحمة",
      "فريق العمل متناغم وكل واحد يعرف شغله، تشوف سيارتك تتنظف بلمحة بصر",
      "مغسلة وطنية نفتخر بها، استمرارهم بنفس الجودة من سنوات يثبت نجاحهم",
    ],
  },
];
