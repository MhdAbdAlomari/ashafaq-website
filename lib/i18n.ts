export type Locale = "ar" | "en";

export const CONTACT = {
  email: "ashafaq.wash@gmail.com",
  phone: "+966 50 971 3181",
  phoneE164: "+966509713181",
  whatsapp: "https://wa.me/966509713181",
  mailto: "mailto:ashafaq.wash@gmail.com",
  tel: "tel:+966509713181",
};

export const dictionaries = {
  ar: {
    dir: "rtl" as const,
    common: {
      ratingLabel: "تقييم العملاء",
      verified: "عميل موثّق",
      trustedBy: "موثوق من آلاف العملاء في الرياض",
      live: "مباشر",
      certified: "موثوقية",
      certifiedLabel: "جودة موثوقة",
      premiumService: "خدمة احترافية بجودة عالية",
      branchesShort: "فروع",
      foundedShort: "تأسست",
      onSiteShort: "عند موقعك",
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      app: "التطبيق",
      branches: "الفروع",
      franchise: "الامتياز",
      contact: "تواصل معنا",
      bookNow: "احجز الآن",
    },
    hero: {
      eyebrow: "الشفق لغسيل السيارات",
      headline: "غسيل سيارات احترافي أينما كنت",
      subheadline:
        "أكثر من 11 فرع في الرياض وخدمة غسيل متنقلة تصلك إلى المنزل أو مقر العمل.",
      downloadApp: "حمّل التطبيق",
      bookNow: "احجز الآن",
      sinceBadge: "منذ 2017",
    },
    trust: {
      title: "ثقتك ركيزتنا",
      subtitle: "أرقام تعكس التزامنا بالجودة والخدمة المميزة",
      stats: [
        { value: "2017", label: "تأسست عام" },
        { value: "+11", label: "فرع في الرياض" },
        { value: "★", label: "خدمة عند موقعك" },
        { value: "✓", label: "جودة موثوقة وخدمة احترافية" },
        { value: "100%", label: "منتجات عالمية مختارة" },
      ],
    },
    services: {
      title: "خدماتنا المميزة",
      subtitle: "باقة متكاملة من خدمات العناية بسيارتك بأعلى المعايير",
      items: [
        {
          title: "الغسيل اليدوي الاحترافي",
          desc: "أيادي خبيرة وعناية فائقة بكل تفصيلة في سيارتك.",
        },
        {
          title: "الغسيل الداخلي والخارجي",
          desc: "تنظيف عميق للمقصورة والهيكل بأحدث التقنيات.",
        },
        {
          title: "التلميع والعناية المتقدمة",
          desc: "إعادة بريق الطلاء وحمايته لمظهر يدوم طويلاً.",
        },
        {
          title: "حماية السيارة",
          desc: "طبقات حماية متقدمة ضد الخدوش والعوامل البيئية.",
        },
        {
          title: "الغسيل المتنقل",
          desc: "نأتي إليك في المنزل أو العمل بكامل المعدات.",
        },
        {
          title: "خدمات الفروع",
          desc: "أكثر من 11 فرع موزعة في أرجاء الرياض لخدمتك.",
        },
      ],
    },
    app: {
      eyebrow: "تطبيق الشفق",
      title: "اطلب غسيل سيارتك من جوالك",
      subtitle:
        "تجربة سلسة وسريعة لإدارة طلباتك ومدفوعاتك وتتبع موقع الفريق لحظة بلحظة.",
      features: [
        "طلب الغسيل خلال ثوانٍ",
        "تتبع الطلب لحظة بلحظة",
        "الدفع الإلكتروني الآمن",
        "اختيار الموقع بدقة",
      ],
      downloadIOS: "حمّل من App Store",
      downloadAndroid: "حمّل من Google Play",
      iosTop: "حمّل من",
      iosBottom: "App Store",
      androidTop: "متوفر على",
      androidBottom: "Google Play",
    },
    branches: {
      title: "فروعنا في الرياض",
      subtitle:
        "اكتشف أقرب فرع لك. اضغط على البطاقة أو علامة الخريطة للتفاصيل.",
      openInMaps: "افتح في خرائط Google",
      ariaMap: "خريطة فروع الشفق",
      loading: "جاري تحميل الخريطة…",
    },
    why: {
      title: "لماذا الشفق؟",
      subtitle: "أسباب تجعلنا الخيار الأول لعملائنا في المملكة",
      items: [
        "غسيل يدوي احترافي بأيادي مدربة",
        "حماية متقدمة لطلاء سيارتك",
        "منتجات عالمية مختارة بعناية",
        "خدمة سريعة بدون انتظار",
        "فرق ذات خبرة طويلة",
        "خدمة غسيل متنقلة فاخرة",
        "تغطية واسعة في الرياض",
      ],
    },
    franchise: {
      eyebrow: "فرص استثمارية",
      title: "استثمر مع الشفق",
      subtitle:
        "انضم إلى علامة سعودية رائدة في قطاع العناية بالسيارات. نوفر لك نموذجاً تشغيلياً ناجحاً ودعماً متكاملاً لتوسيع أعمالك في جميع مناطق المملكة.",
      cta: "ابدأ الاستثمار",
      points: [
        "نموذج تشغيلي مجرّب وناجح",
        "تدريب وتأهيل للفرق",
        "دعم تسويقي متكامل",
        "هوية بصرية موحّدة",
      ],
    },
    social: {
      title: "تابعنا على الشبكات الاجتماعية",
      subtitle: "كن أول من يطّلع على عروضنا وأخبارنا",
    },
    contact: {
      title: "جاهز لتجربة مختلفة؟",
      subtitle:
        "حمّل التطبيق الآن أو تواصل معنا مباشرة لحجز موعدك أو الاستفسار عن خدماتنا.",
      download: "حمّل التطبيق",
      contactUs: "تواصل معنا",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      phone: "اتصل بنا",
    },
    footer: {
      tagline:
        "علامة سعودية رائدة في غسيل السيارات والعناية بها منذ 2017. جودة موثوقة وخدمة احترافية.",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
      brand: "الشفق لغسيل السيارات",
      madeIn: "صُنع بعناية في الرياض، المملكة العربية السعودية",
      trustTitle: "جودة موثوقة",
      trustSubtitle: "منتجات عالمية مختارة بعناية",
    },
  },
  en: {
    dir: "ltr" as const,
    common: {
      ratingLabel: "Customer rating",
      verified: "Verified customer",
      trustedBy: "Trusted by thousands across Riyadh",
      live: "LIVE",
      certified: "Trusted",
      certifiedLabel: "Trusted Quality",
      premiumService: "Premium Professional Service",
      branchesShort: "Branches",
      foundedShort: "Founded",
      onSiteShort: "On‑site",
    },
    nav: {
      home: "Home",
      services: "Services",
      app: "App",
      branches: "Branches",
      franchise: "Franchise",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      eyebrow: "Ashafaq Car Wash",
      headline: "Professional Car Wash, Wherever You Are",
      subheadline:
        "More than 11 branches across Riyadh, plus a mobile car wash service that comes to your home or office.",
      downloadApp: "Download the App",
      bookNow: "Book Now",
      sinceBadge: "Since 2017",
    },
    trust: {
      title: "Built on Trust",
      subtitle: "Numbers that reflect our commitment to quality and service",
      stats: [
        { value: "2017", label: "Founded in" },
        { value: "11+", label: "Branches in Riyadh" },
        { value: "★", label: "Service At Your Location" },
        { value: "✓", label: "Trusted Quality & Professional Service" },
        { value: "100%", label: "Carefully Selected Global Products" },
      ],
    },
    services: {
      title: "Our Premium Services",
      subtitle: "A complete suite of vehicle care services to world-class standards",
      items: [
        {
          title: "Professional Hand Washing",
          desc: "Expert hands and meticulous attention to every detail of your car.",
        },
        {
          title: "Interior & Exterior Wash",
          desc: "Deep cleaning of cabin and body using the latest techniques.",
        },
        {
          title: "Polishing & Advanced Care",
          desc: "Restore paint brilliance with long-lasting protection.",
        },
        {
          title: "Vehicle Protection",
          desc: "Advanced protective coatings against scratches and the elements.",
        },
        {
          title: "Mobile Car Wash",
          desc: "We come to you at home or work with full equipment.",
        },
        {
          title: "Branch Services",
          desc: "11+ branches spread across Riyadh ready to serve you.",
        },
      ],
    },
    app: {
      eyebrow: "Ashafaq App",
      title: "Book Your Car Wash From Your Phone",
      subtitle:
        "A smooth, fast experience to manage orders, payments, and track the team in real time.",
      features: [
        "Book a wash in seconds",
        "Real-time order tracking",
        "Secure online payment",
        "Pinpoint location selection",
      ],
      downloadIOS: "Download on the App Store",
      downloadAndroid: "Get it on Google Play",
      iosTop: "Download on the",
      iosBottom: "App Store",
      androidTop: "GET IT ON",
      androidBottom: "Google Play",
    },
    branches: {
      title: "Our Branches in Riyadh",
      subtitle:
        "Find your nearest branch. Tap a card or a map marker for details.",
      openInMaps: "Open in Google Maps",
      ariaMap: "Ashafaq branches map",
      loading: "Loading map…",
    },
    why: {
      title: "Why Ashafaq?",
      subtitle: "Reasons our customers in Saudi Arabia choose us first",
      items: [
        "Professional hand washing by trained hands",
        "Advanced paint protection for your car",
        "Carefully selected international products",
        "Fast service with no waiting",
        "Highly experienced teams",
        "Premium mobile wash service",
        "Wide coverage across Riyadh",
      ],
    },
    franchise: {
      eyebrow: "Investment Opportunities",
      title: "Invest with Ashafaq",
      subtitle:
        "Join a leading Saudi brand in vehicle care. We provide a proven operational model and end-to-end support to grow your business across the Kingdom.",
      cta: "Start Investing",
      points: [
        "Proven, successful operating model",
        "Team training & onboarding",
        "End-to-end marketing support",
        "Unified brand identity",
      ],
    },
    social: {
      title: "Follow Us on Social Media",
      subtitle: "Be the first to know about our offers and news",
    },
    contact: {
      title: "Ready for a Different Experience?",
      subtitle:
        "Download the app now or reach out to book your appointment or ask about our services.",
      download: "Download the App",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Call Us",
    },
    footer: {
      tagline:
        "A leading Saudi brand in car washing and care since 2017. Trusted quality and professional service.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      contact: "Contact",
      rights: "All rights reserved",
      brand: "Ashafaq Car Wash",
      madeIn: "Made with care in Riyadh, Saudi Arabia",
      trustTitle: "Trusted Quality",
      trustSubtitle: "Carefully selected international products",
    },
  },
};

export type Dictionary = (typeof dictionaries)[Locale];
