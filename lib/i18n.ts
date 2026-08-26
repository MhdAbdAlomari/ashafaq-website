export type Locale = "ar" | "en";

export const CONTACT = {
  email: "ashafaq.wash@gmail.com",
  phone: "0114787878",
  phoneE164: "0114787878",
  whatsapp: "https://wa.me/966114787878",
  whatsappDisplay: "+966114787878",
  mailto: "mailto:ashafaq.wash@gmail.com",
  tel: "tel:0114787878",
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
      servicesGroup: "الخدمات",
      prices: "الأسعار",
      mobileWash: "الغسيل المتنقل",
      app: "التطبيق",
      companies: "الشركات",
      fleet: "الشركات",
      branches: "الفروع",
      blog: "المدونة",
      faq: "الأسئلة الشائعة",
      franchise: "الامتياز",
      contact: "تواصل معنا",
      bookNow: "احجز الآن",
      openMenu: "افتح القائمة",
      closeMenu: "أغلق القائمة",
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
    companies: {
      eyebrow: "للشركات",
      title: "أسطول نظيف دائماً — بطلب واحد، لا عشرة",
      subtitle:
        "نظام متكامل لغسيل سيارات الشركات: احجز لأسطولك كاملاً بطلب مجمّع واحد، بأي مزيج أحجام، وتابعه كمجموعة واحدة من الحجز حتى الإنجاز.",
      billingHeading: "نظاما فوترة",
      billing: [
        {
          title: "اشتراك شهري ثابت (نظام الحصص)",
          desc: "حصة غسلات محددة لكل حجم سيارة، تُخصم منها الطلبات مباشرة بلا أي دفع، مع متابعة المتبقي وتقارير قابلة للتصدير.",
        },
        {
          title: "ادفع وقت الاستخدام (نظام المحفظة)",
          desc: "رصيد مرن يُخصم منه كل طلب بسعره، كشف حساب لكل عملية، وتقارير مالية قابلة للتصدير.",
        },
      ],
      channelsHeading: "ثلاث طرق نصل بها لسياراتك",
      channels: [
        {
          title: "عنوان الشركة",
          desc: "فريقنا يحضر لموقعكم.",
        },
        {
          title: "أحد فروعنا",
          desc: "استقبال الأسطول في أي فرع.",
        },
        {
          title: "الخدمة المتنقلة",
          desc: "غسيل سريع في الموقع الذي تختارونه.",
        },
      ],
      sizesHeading: "نخدم جميع أحجام السيارات",
      sizes: [
        { label: "سيارة صغيرة", src: "/images/Small_Car_new.png" },
        { label: "سيارة وسط", src: "/images/Medium_Car_new.png" },
        { label: "سيارة كبيرة", src: "/images/Big_car_new.png" },
        { label: "فان", src: "/images/van_car.png" },
        { label: "باص", src: "/images/Bus_Car_new.png" },
        { label: "شاحنة", src: "/images/Truck_Car_new.png" },
      ],
      featuresHeading: "مزايا الإدارة",
      features: [
        "طلب مجمّع شفاف بسعر لكل سيارة ومعاينة قبل التأكيد",
        "متابعة الطلب كمجموعة واحدة حتى الإنجاز",
        "لوحة أسطول بحصص كل حجم والمتبقي",
        "إضافة أعضاء يحجزون بسيارات الشركة",
        "تقارير غسلات وسيارات وحركات مالية قابلة للتصدير Excel",
        "أربع فترات يومية تناسب دوامكم",
      ],
      ctaHeading: "جاهزون تبدأون؟",
      ctaWhatsapp: "واتساب",
      ctaCall: "اتصال",
      ctaEmail: "البريد الإلكتروني",
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
    testimonials: {
      eyebrow: "آراء حقيقية",
      title: "ماذا يقول عملاؤنا",
      subtitle: "تجارب حقيقية جمعناها من عملائنا عبر التطبيق ووسائل التواصل.",
      sourceLabel: "المصدر",
      placeholder: "قريبًا: آراء عملائنا الحقيقية",
      placeholderSubtitle: "نجمع الآن مراجعات موثّقة من عملائنا لنشرها هنا.",
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
      columns: {
        services: "الخدمات",
        fleet: "الشركات",
        support: "الدعم",
        blog: "المدونة",
      },
    },
    servicesPage: {
      eyebrow: "الخدمات",
      title: "خدمات الغسيل لدى الشفق",
      subtitle:
        "تختار الخدمة التي تناسب سيارتك، ونحن ننجزها بأيدٍ مدربة ومنتجات عناية عالمية.",
      tiers: [
        {
          title: "غسيل خارجي",
          desc: "غسيل شامل للهيكل الخارجي للسيارة لإزالة الغبار والأتربة وإعادة اللمعان للطلاء.",
          bullets: [
            "غسيل الهيكل بمنتجات آمنة على الطلاء",
            "تنظيف الجنوط والإطارات",
            "تلميع نهائي سريع للطلاء",
          ],
        },
        {
          title: "غسيل داخلي وخارجي",
          desc: "تنظيف كامل من الداخل والخارج ليصبح مقصورتك ومظهر سيارتك كالجديدة.",
          bullets: [
            "غسيل خارجي كامل للهيكل والجنوط",
            "تنظيف عميق للمقصورة والأرضيات",
            "تلميع الطبلون وتعطير المقصورة",
          ],
        },
      ],
      touchesEyebrow: "لمسة الشفق",
      touchesTitle: "لمسات مجانية مع كل غسلة",
      touchesSubtitle: "تفاصيل صغيرة تصنع فرقاً كبيراً في تجربتك.",
      touches: [
        {
          title: "تلبيس الدركسون",
          desc: "غطاء واقٍ للدركسون يحافظ على نظافة سيارتك بعد الغسيل.",
        },
        {
          title: "تلبيس القير",
          desc: "غطاء للقير يحمي المنطقة من أي أثر خلال التنقل.",
        },
        {
          title: "تعليقة عطر الشفق",
          desc: "عطر مميز يترك مقصورتك بانتعاش يدوم بعد كل غسلة.",
        },
      ],
      viewPrices: "شاهد الأسعار",
      bookNow: "احجز الآن",
    },
    pricesPage: {
      eyebrow: "الأسعار",
      title: "أسعار الغسيل حسب حجم السيارة",
      subtitle:
        "خدمتان أساسيتان لكل حجم: غسيل خارجي، أو غسيل داخلي وخارجي. الأسعار واضحة وثابتة.",
      currency: "ريال",
      tierExterior: "غسيل خارجي",
      tierInterior: "غسيل داخلي وخارجي",
      rows: [
        {
          size: "سيارات صغيرة",
          priceExterior: "20",
          priceInterior: "30",
          note: "سيدان صغيرة، هاتشباك",
        },
        {
          size: "سيارات متوسطة",
          priceExterior: "25",
          priceInterior: "35",
          note: "سيدان متوسطة وكروس أوفر",
        },
        {
          size: "سيارات كبيرة",
          priceExterior: "30",
          priceInterior: "40",
          note: "SUV وسيارات عائلية كبيرة",
        },
      ],
      whatsIncluded: "تعرف على ما تشمله كل خدمة",
      ctaTitle: "جاهز نبدأ؟",
      ctaSubtitle: "احجز غسلتك خلال ثوانٍ من التطبيق أو تواصل معنا مباشرة.",
      downloadApp: "حمّل التطبيق",
      contactUs: "تواصل معنا",
      whySizeTitle: "لماذا يختلف السعر حسب حجم السيارة؟",
      whySizeBody:
        "السيارة الأكبر لها مساحة هيكل وزجاج ومقصورة أكبر، فتحتاج وقتًا أطول وكميات أعلى من الماء والمواد المستخدمة. لهذا يُحدَّد السعر بحسب الحجم ليكون واضحًا وعادلًا للجميع.",
      whatIncludedTitle: "ماذا تشمل الخدمة؟",
      whatIncludedBody:
        "يشمل السعر خدمة الغسيل التي تختارها — سواء غسيل خارجي فقط أو غسيل داخلي وخارجي متكامل — مع الاعتناء بالتفاصيل ولمسات الشفق المجانية.",
      whatIncludedLink: "تعرف على تفاصيل الخدمات",
      mobileNoteTitle: "تفضّل الخدمة عند موقعك؟",
      mobileNoteBody:
        "لدينا خيار الغسيل المتنقل الذي يصلك في المنزل أو العمل بكامل المعدات، بموعد يناسبك.",
      mobileNoteLink: "تعرف على الغسيل المتنقل",
      guideEyebrow: "الدليل الكامل",
      guideTitle: "دليل أسعار غسيل السيارات في الرياض",
      guideExcerpt:
        "شرح مفصّل عن أسعار الغسيل حسب حجم السيارة، وما تشمله الخدمة، ونصائح اختيار المغسلة المناسبة.",
      guideCta: "اقرأ الدليل الكامل",
    },
    branchesPage: {
      eyebrow: "الفروع",
      title: "فروع الشفق في الرياض",
      subtitle:
        "أكثر من 11 فرعاً موزعة في أرجاء الرياض لخدمتك. اختر الفرع الأقرب وابدأ رحلتك مع الشفق.",
      openBranch: "شاهد صفحة الفرع",
    },
    branchPage: {
      breadcrumbBranches: "الفروع",
      openDirections: "افتح الاتجاهات",
      openInMaps: "افتح في خرائط Google",
      hoursTitle: "ساعات العمل",
      hoursUnknown:
        "لا تتوفر ساعات عمل محدّثة في الموقع حالياً. ننصح بمراجعة أحدث معلومات الفرع على خرائط Google.",
      checkGoogleHours: "تحقق من آخر تحديث على خرائط Google",
      servicesTitle: "الخدمات المتوفرة",
      servicesFallback:
        "يقدّم هذا الفرع خدمات الغسيل الأساسية لدى الشفق: الغسيل الخارجي، والغسيل الداخلي والخارجي. تعرّف على تفاصيل كل خدمة.",
      servicesLink: "تفاصيل الخدمات",
      photoAlt: "صورة الفرع",
      googleReviews: "شاهد التقييمات على Google",
      ctaTitle: "جاهز لتجربة الفرع؟",
      ctaSubtitle: "افتح الاتجاهات مباشرة أو تواصل معنا لأي استفسار.",
      contactUs: "تواصل معنا",
      relatedBranches: "فروع أخرى قريبة",
    },
    fleetPage: {
      eyebrow: "للشركات",
      title: "غسيل أساطيل الشركات",
      subtitle:
        "نظام متكامل لغسيل سيارات الشركات: احجز أسطولك كاملاً بطلب مجمّع واحد، وتابعه كمجموعة واحدة من الحجز حتى الإنجاز.",
      checklistTitle: "قبل ما تطلب عرض سعر",
      checklistIntro:
        "لا تحتاج إلى إعداد ملف معقد. كلما كانت هذه المعلومات أوضح، أصبح تصميم العرض المناسب لك أسهل.",
      checklist: [
        "عدد المركبات",
        "أنواع المركبات وأحجامها",
        "مواقع وجود الأسطول",
        "عدد مرات الغسيل المتوقع شهريًا",
        "نوع الخدمة المطلوبة",
        "الأيام أو الأوقات المناسبة",
        "هل الخدمة منتظمة أم موسمية",
      ],
      pricingNoteTitle: "لماذا يختلف السعر من أسطول لآخر؟",
      pricingNoteBody:
        "يتأثر سعر غسيل الأساطيل بعوامل عدة: حجم الأسطول وأحجام المركبات، تكرار الخدمة ونوع الغسيل المطلوب، مواقع السيارات وآلية التنفيذ، ومدة الاتفاق. لهذا يكون طلب عرض سعر أدق للشركات من وضع سعر موحد لا يناسب جميع الحالات.",
      guideEyebrow: "الدليل الكامل",
      guideTitle: "دليل غسيل أساطيل الشركات في الرياض",
      guideExcerpt:
        "شرح مفصّل لخدمة غسيل الأساطيل: التنظيم، التسعير، طرق التنفيذ، وأمثلة على المنشآت التي تناسبها الخدمة.",
      guideCta: "اقرأ الدليل الكامل",
      documentsTitle: "مستندات ومصادر",
      documentsSubtitle: "حمّل تفاصيل خدمة الأساطيل بصيغة PDF.",
      brochureLabel: "تحميل بروشور الشركة",
      subscriptionLabel: "تحميل تفاصيل اشتراك الأسطول",
    },
    appPage: {
      eyebrow: "تطبيق الشفق",
      title: "تطبيق الشفق: كل خدماتك في مكان واحد",
      subtitle:
        "احجز غسيل سيارتك من هاتفك خلال ثوانٍ، وتابع طلبك لحظة بلحظة، وأدر مدفوعاتك بسهولة.",
      capabilitiesEyebrow: "من التطبيق",
      capabilitiesTitle: "شو فيك تسوي من التطبيق؟",
      capabilities: [
        {
          title: "حجز غسيل متنقل لموقعك",
          desc: "اطلب فريقنا يوصل إلى منزلك أو مقر عملك بالمعدات الكاملة.",
          href: null,
        },
        {
          title: "حجز موعد في أي فرع من فروع الشفق",
          desc: "اختر الفرع الأنسب لك ورتّب موعدك مسبقًا لتوفير الوقت.",
          href: null,
        },
        {
          title: "إدارة اشتراك أسطول شركتك",
          desc: "تابع أسطول شركتك، تحقق من الحصص، واطلع على التقارير من مكان واحد.",
          href: "/fleet/",
        },
      ],
    },
    mobileWashPage: {
      eyebrow: "الغسيل المتنقل",
      title: "الغسيل المتنقل: خدمتنا تصلك أينما كنت",
      subtitle:
        "فرقنا تصلك بكامل المعدات إلى المنزل أو العمل بموعد يناسبك، فتحصل على غسلة احترافية دون أن تتحرك من مكانك.",
      ctaText: "احجز غسلتك المتنقلة الآن من التطبيق.",
      openApp: "افتح التطبيق",
      howTitle: "كيف تعمل الخدمة؟",
      howBody:
        "بدل أن تقود سيارتك إلى المغسلة، يصل فريقنا إلى موقعك لتنفيذ الغسيل وفق الخيارات المتاحة. الأمر ليس مجرد «غسيل في البيت»، بل طريقة مختلفة للحصول على الخدمة تعتمد على راحتك ووقتك.",
      audienceTitle: "مين بتناسبه الخدمة؟",
      audience: [
        "أصحاب الجداول المزدحمة",
        "الموظفين أثناء وجودهم في العمل",
        "العائلات التي تملك أكثر من سيارة",
        "من يفضل الحصول على الخدمة في المنزل",
        "من يريد ترتيب موعد الغسيل مسبقًا",
      ],
      coverageTitle: "التغطية والمناطق المتاحة",
      coverageBody:
        "تعتمد الخدمة المتنقلة على نطاق التغطية المتاح لكل منطقة. ننصح دائمًا بالتحقق من توفّر الخدمة في موقعك من داخل التطبيق قبل تأكيد الحجز.",
      bookInApp: "احجز عبر التطبيق",
      guideEyebrow: "الدليل الكامل",
      guideTitle: "دليل غسيل السيارات المتنقل في الرياض",
      guideExcerpt:
        "شرح مفصّل عن الغسيل المتنقل: كيف يعمل، لمن يناسب، متى يكون الأفضل، وكيف تطلب الخدمة.",
      guideCta: "اقرأ الدليل الكامل",
    },
    faqPage: {
      eyebrow: "الأسئلة الشائعة",
      title: "الأسئلة الأكثر شيوعاً",
      subtitle: "إجابات سريعة على ما يهمك قبل حجز خدمتك.",
      categoriesLabel: "التصنيفات",
      categories: [
        {
          key: "prices",
          label: "الأسعار",
          items: [
            {
              q: "كم أسعار غسيل السيارات في الشفق؟",
              a: "لدينا تسعير من مستويين حسب حجم السيارة: للغسيل الخارجي فقط: الصغيرة 20 ريالًا، المتوسطة 25 ريالًا، الكبيرة 30 ريالًا. وللغسيل الداخلي والخارجي معًا: الصغيرة 30 ريالًا، المتوسطة 35 ريالًا، الكبيرة 40 ريالًا. وقد تختلف بعض الخدمات الإضافية حسب نوع الخدمة أو السيارة.",
            },
            {
              q: "هل الأسعار نفسها في جميع الفروع؟",
              a: "الأسعار الأساسية تكون موضحة في الموقع، لكن قد توجد عروض أو خدمات إضافية تختلف حسب الفرع أو الفترة.",
            },
            {
              q: "هل توجد عروض وخصومات؟",
              a: "نعم، تطلق الشفق عروضًا من وقت لآخر، وتظهر العروض الحالية في الموقع والتطبيق وحسابات الفروع الرسمية.",
            },
            {
              q: "هل يمكن استخدام العرض في جميع الفروع؟",
              a: "يُحدد ذلك في شروط كل عرض. بعض العروض تكون شاملة، وأخرى قد تكون مرتبطة بفروع أو فترة زمنية محددة.",
            },
            {
              q: "هل يوجد اشتراكات أو باقات؟",
              a: "قد تتوفر باقات وعروض مختلفة عبر التطبيق أو الفروع. ويمكن الاطلاع على الخيارات الحالية من صفحة العروض أو التطبيق.",
            },
          ],
        },
        {
          key: "service",
          label: "الخدمة",
          items: [
            {
              q: "ماذا يشمل غسيل السيارة؟",
              a: "تشمل الخدمة الأساسية الغسيل والعناية بالتفاصيل بحسب الباقة أو الخدمة المختارة، مع الاهتمام بنظافة السيارة من الداخل والخارج.",
            },
            {
              q: "هل توجد إضافات مجانية؟",
              a: "نعم، من اللمسات التي تقدمها الشفق: تلبيس الدركسون، تلبيس القير، تعليقة عطر الشفق.",
            },
            {
              q: "هل يوجد غسيل داخلي وخارجي؟",
              a: "نعم، تتوفر خدمات العناية بالسيارة من الداخل والخارج بحسب نوع الخدمة المختارة.",
            },
            {
              q: "كم يستغرق غسيل السيارة؟",
              a: "مدة الغسيل تختلف حسب حجم السيارة، حالتها، نوع الخدمة، وحجم الإقبال في الفرع وقت الزيارة.",
            },
            {
              q: "هل يجب الحجز قبل زيارة الفرع؟",
              a: "لا يلزم بالضرورة في جميع الحالات، ويمكن زيارة الفرع مباشرة. أما الخدمات التي تعتمد على الموقع أو الموعد فيفضل طلبها من خلال التطبيق.",
            },
            {
              q: "كيف أختار الخدمة المناسبة لسيارتي؟",
              a: "يعتمد الاختيار على حجم السيارة وحالتها واحتياجك. إذا كانت السيارة تحتاج تنظيفًا دوريًا فالغسيل المعتاد مناسب، أما إذا كان احتياجك أكبر فقد تكون هناك خدمات إضافية أنسب.",
            },
            {
              q: "متى أحتاج إلى غسل سيارتي؟",
              a: "لا توجد مدة واحدة تناسب الجميع. يعتمد ذلك على الاستخدام اليومي، مكان الوقوف، حالة السيارة والظروف الجوية. في الرياض، الغبار قد يجعل بعض السيارات تحتاج إلى الغسيل بشكل متكرر أكثر من غيرها.",
            },
          ],
        },
        {
          key: "branches",
          label: "الفروع",
          items: [
            {
              q: "أين توجد فروع الشفق؟",
              a: "توجد فروع الشفق في عدة أحياء داخل مدينة الرياض، ويمكن معرفة أقرب فرع من خلال صفحة الفروع في الموقع وفتح الاتجاهات مباشرة عبر الخريطة.",
            },
            {
              q: "كيف أعرف أقرب فرع لي؟",
              a: "ادخل إلى صفحة الفروع، اختر موقعك أو الحي الأقرب لك، ثم اضغط على الاتجاهات للوصول إلى الفرع عبر Google Maps.",
            },
            {
              q: "هل تختلف ساعات العمل من فرع لآخر؟",
              a: "نعم، قد تختلف ساعات العمل بحسب الفرع أو الموسم. لذلك ننصح بالرجوع إلى صفحة الفرع أو حسابه على Google Maps لمعرفة أحدث أوقات العمل.",
            },
            {
              q: "كيف أتأكد من موقع وساعات عمل الفرع قبل الذهاب؟",
              a: "أفضل طريقة هي الدخول إلى صفحة الفرع في موقع الشفق أو ملفه الرسمي على Google Maps، لأن بيانات الموقع وساعات العمل قد يتم تحديثها عند الحاجة.",
            },
          ],
        },
        {
          key: "app-mobile",
          label: "التطبيق والغسيل المتنقل",
          items: [
            {
              q: "هل يوجد غسيل سيارات متنقل؟",
              a: "نعم، تتوفر خدمة غسيل السيارات المتنقل حسب نطاق التغطية والخدمات المتاحة.",
            },
            {
              q: "كيف أطلب الغسيل المتنقل؟",
              a: "يمكن طلب الخدمة من خلال تطبيق الشفق واختيار الخدمة والموقع المناسب بحسب التغطية المتاحة.",
            },
            {
              q: "هل يمكن الحجز من التطبيق؟",
              a: "نعم، يتيح تطبيق الشفق الوصول إلى الخدمات والحجز واختيار الخيارات المتاحة بطريقة أسرع من الجوال.",
            },
            {
              q: "أين أحمّل تطبيق الشفق؟",
              a: "يمكن تحميل التطبيق من App Store وGoogle Play من خلال الروابط الموجودة في صفحة التطبيق داخل الموقع.",
            },
            {
              q: "هل الغسيل المتنقل متوفر في جميع أحياء الرياض؟",
              a: "التغطية قد تختلف حسب المنطقة وطبيعة الخدمة، لذلك الأفضل التحقق من الموقع داخل التطبيق قبل إكمال الطلب.",
            },
            {
              q: "هل الأفضل زيارة الفرع أم طلب الغسيل المتنقل؟",
              a: "إذا كان الفرع قريبًا من طريقك فزيارته قد تكون الأسرع. أما إذا كنت مشغولًا وتفضل الحصول على الخدمة في موقعك، فقد يكون الغسيل المتنقل هو الأنسب.",
            },
          ],
        },
        {
          key: "fleet",
          label: "الأساطيل",
          items: [
            {
              q: "هل يمكن غسل سيارات الشركات والأساطيل؟",
              a: "نعم، تقدم الشفق خدمة غسيل أساطيل الشركات للمنشآت التي لديها عدة مركبات وتحتاج إلى خدمة دورية ومنظمة.",
            },
            {
              q: "كيف أطلب عرض سعر لغسيل الأسطول؟",
              a: "من خلال صفحة غسيل الأساطيل والشركات، يتم إرسال عدد المركبات ونوعها وموقعها وعدد مرات الغسيل المطلوبة، ثم يتم إعداد العرض المناسب.",
            },
            {
              q: "هل خدمة الأساطيل مناسبة للشركات الصغيرة؟",
              a: "نعم، الخدمة ليست مقتصرة على الأساطيل الكبيرة، ويمكن دراسة احتياج المنشآت التي تملك عددًا محدودًا من المركبات أيضًا.",
            },
            {
              q: "هل يمكن خدمة الأسطول في مقر الشركة؟",
              a: "يعتمد ذلك على موقع المنشأة وطبيعة المركبات ونطاق الخدمة المتاح، ويتم تحديد الطريقة الأنسب عند دراسة الطلب.",
            },
            {
              q: "هل يوجد فواتير أو تنظيم للشركات؟",
              a: "يمكن تنظيم الخدمة والفوترة بحسب الاتفاق وطبيعة احتياج الجهة.",
            },
          ],
        },
        {
          key: "general",
          label: "عام",
          items: [
            {
              q: "هل يمكن التواصل في حال وجود ملاحظة على الخدمة؟",
              a: "نعم، يمكن التواصل مع الشفق من خلال قنوات التواصل الرسمية الموجودة في صفحة تواصل معنا، وسيتم التعامل مع الملاحظة بحسب تفاصيل الحالة.",
            },
            {
              q: "هل توجد طريقة لإرسال اقتراح أو شكوى؟",
              a: "نعم، يمكن إرسال الملاحظات والاقتراحات من خلال نموذج التواصل أو القنوات الرسمية الموضحة في الموقع.",
            },
            {
              q: "لماذا أختار الشفق؟",
              a: "لأن الهدف ليس مجرد غسل السيارة، بل تقديم تجربة واضحة في الخدمة، الأسعار، سهولة الوصول للفروع، التطبيق، والغسيل المتنقل والأساطيل ضمن منظومة واحدة.",
            },
          ],
        },
      ],
    },
    contactPage: {
      eyebrow: "تواصل معنا",
      title: "نحن هنا للإجابة على استفساراتك",
      subtitle:
        "اختر الطريقة الأنسب لك للتواصل، أو أرسل لنا رسالة مباشرة من النموذج أدناه.",
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "سنعاود التواصل معك في أقرب وقت.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك الكامل",
      phoneLabel: "رقم الجوال",
      phonePlaceholder: "05xxxxxxxx",
      messageLabel: "رسالتك",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      sendWhatsapp: "أرسل عبر واتساب",
      sendEmail: "أرسل عبر البريد",
      channels: "قنوات التواصل",
    },
    blogPage: {
      eyebrow: "المدونة",
      title: "مدونة الشفق",
      subtitle:
        "مقالات ونصائح عملية حول العناية بالسيارات وخدمات الغسيل في الرياض.",
      readMore: "اقرأ المزيد",
      backToBlog: "العودة إلى المدونة",
      published: "منشور في",
    },
    homeTeasers: {
      seeMore: "شاهد المزيد",
      servicesEyebrow: "الخدمات",
      servicesTitle: "خدمات مصممة لكل سيارة",
      servicesSubtitle: "اختر بين الغسيل الخارجي أو غسيل كامل داخلي وخارجي.",
      pricesEyebrow: "الأسعار",
      pricesTitle: "أسعار واضحة لكل حجم",
      pricesSubtitle:
        "خدمتان أساسيتان بأسعار ثابتة: غسيل داخلي وخارجي، أو غسيل خارجي فقط.",
      pricesRangeCaption: "خارجي / داخلي وخارجي",
      appEyebrow: "التطبيق",
      appTitle: "اطلب من هاتفك خلال ثوانٍ",
      appSubtitle: "احجز، تابع، وادفع من تطبيق الشفق بكل سهولة.",
      openApp: "افتح صفحة التطبيق",
      fleetEyebrow: "للشركات",
      fleetTitle: "أسطول نظيف بطلب واحد",
      fleetSubtitle:
        "حلول متكاملة لغسيل أساطيل الشركات مع لوحة إدارة وتقارير.",
      fleetLink: "شاهد خدمة الشركات",
      branchesEyebrow: "الفروع",
      branchesTitle: "أكثر من 11 فرعاً في الرياض",
      branchesSubtitle: "اعثر على أقرب فرع لك واستمتع بخدمتنا.",
      branchesLink: "شاهد الفروع",
      contactStripTitle: "تواصل معنا مباشرة",
      contactStripSubtitle:
        "فريقنا جاهز لخدمتك عبر الاتصال أو واتساب أو من خلال التطبيق.",
      contactStripLink: "افتح صفحة التواصل",
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
      servicesGroup: "Services",
      prices: "Prices",
      mobileWash: "Mobile Wash",
      app: "App",
      companies: "Companies",
      fleet: "Companies",
      branches: "Branches",
      blog: "Blog",
      faq: "FAQ",
      franchise: "Franchise",
      contact: "Contact",
      bookNow: "Book Now",
      openMenu: "Open menu",
      closeMenu: "Close menu",
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
    companies: {
      eyebrow: "For Companies",
      title: "A Clean Fleet — In One Order, Not Ten",
      subtitle:
        "A complete corporate car-wash system: book your entire fleet in a single grouped order with any mix of vehicle sizes, and track it as one group from booking to completion.",
      billingHeading: "Two Billing Models",
      billing: [
        {
          title: "Fixed Monthly Subscription (Quota Model)",
          desc: "A defined wash quota per vehicle size, deducted directly with no per-order payment. Track the remaining balance with exportable reports.",
        },
        {
          title: "Pay-As-You-Go (Wallet Model)",
          desc: "A flexible balance charged per order at its listed price, itemized statements for every transaction, and exportable financial reports.",
        },
      ],
      channelsHeading: "Three Ways We Reach Your Cars",
      channels: [
        {
          title: "At Your Company Address",
          desc: "Our team comes to your location.",
        },
        {
          title: "At One of Our Branches",
          desc: "Bring the fleet to any branch.",
        },
        {
          title: "Mobile Service",
          desc: "Fast washes wherever you choose.",
        },
      ],
      sizesHeading: "We Serve All Vehicle Sizes",
      sizes: [
        { label: "Small Car", src: "/images/Small_Car_new.png" },
        { label: "Mid-Size Car", src: "/images/Medium_Car_new.png" },
        { label: "Large Car", src: "/images/Big_car_new.png" },
        { label: "Van", src: "/images/van_car.png" },
        { label: "Bus", src: "/images/Bus_Car_new.png" },
        { label: "Truck", src: "/images/Truck_Car_new.png" },
      ],
      featuresHeading: "Management Features",
      features: [
        "Transparent grouped order with per-vehicle pricing and preview before confirmation",
        "Track the order as a single group until completion",
        "Fleet dashboard with per-size quotas and remaining balance",
        "Add members who book with company vehicles",
        "Exportable reports for washes, vehicles, and finances (Excel)",
        "Four daily time slots to fit your working hours",
      ],
      ctaHeading: "Ready to start?",
      ctaWhatsapp: "WhatsApp",
      ctaCall: "Call",
      ctaEmail: "Email",
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
    testimonials: {
      eyebrow: "Real reviews",
      title: "What our customers say",
      subtitle: "Real customer experiences gathered from the app and social platforms.",
      sourceLabel: "Source",
      placeholder: "Coming soon: real reviews from our customers",
      placeholderSubtitle: "We're gathering verified reviews from our customers to publish here.",
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
      columns: {
        services: "Services",
        fleet: "Companies",
        support: "Support",
        blog: "Blog",
      },
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Ashafaq Wash Services",
      subtitle:
        "Choose the package that fits your car — expert hands and premium care products handle the rest.",
      tiers: [
        {
          title: "Exterior Wash",
          desc: "A complete exterior wash to remove dust and dirt and restore shine to your paintwork.",
          bullets: [
            "Body wash with paint-safe products",
            "Wheels and tires cleaning",
            "Quick final polish for the paint",
          ],
        },
        {
          title: "Interior & Exterior Wash",
          desc: "Full inside-and-out cleaning so your cabin and exterior feel brand-new again.",
          bullets: [
            "Full exterior body, wheels, and tires",
            "Deep cabin and floor cleaning",
            "Dashboard polish and cabin freshener",
          ],
        },
      ],
      touchesEyebrow: "Ashafaq Touch",
      touchesTitle: "Free finishing touches with every wash",
      touchesSubtitle: "Small details that make a big difference to your experience.",
      touches: [
        {
          title: "Steering Wheel Cover",
          desc: "A protective cover keeps your car spotless right after the wash.",
        },
        {
          title: "Gear Cover",
          desc: "A gear-lever cover keeps the area clean while you drive off.",
        },
        {
          title: "Ashafaq Air Freshener",
          desc: "A signature scent that leaves your cabin fresh after every wash.",
        },
      ],
      viewPrices: "View prices",
      bookNow: "Book now",
    },
    pricesPage: {
      eyebrow: "Prices",
      title: "Wash prices by vehicle size",
      subtitle:
        "Two core services per size: exterior wash, or interior + exterior wash. Clear, fixed prices — no surprises.",
      currency: "SAR",
      tierExterior: "Exterior wash",
      tierInterior: "Interior + exterior wash",
      rows: [
        {
          size: "Small cars",
          priceExterior: "20",
          priceInterior: "30",
          note: "Small sedans and hatchbacks",
        },
        {
          size: "Mid-size cars",
          priceExterior: "25",
          priceInterior: "35",
          note: "Mid-size sedans and crossovers",
        },
        {
          size: "Large cars",
          priceExterior: "30",
          priceInterior: "40",
          note: "SUVs and large family vehicles",
        },
      ],
      whatsIncluded: "See what each service includes",
      ctaTitle: "Ready to start?",
      ctaSubtitle: "Book your wash in seconds from the app, or reach us directly.",
      downloadApp: "Download the app",
      contactUs: "Contact us",
      whySizeTitle: "Why does the price change with vehicle size?",
      whySizeBody:
        "A larger vehicle has more body, glass, and cabin surface — so it needs more time and more water and cleaning materials. Sizing the price by vehicle is the clearest and fairest way to bill.",
      whatIncludedTitle: "What does the service include?",
      whatIncludedBody:
        "The price covers the wash package you pick — exterior only, or a full interior + exterior wash — with attention to detail and the free Ashafaq finishing touches.",
      whatIncludedLink: "See service details",
      mobileNoteTitle: "Prefer the service at your location?",
      mobileNoteBody:
        "We offer a mobile wash that comes to your home or workplace with full equipment, at a time that suits you.",
      mobileNoteLink: "About mobile wash",
      guideEyebrow: "Full guide",
      guideTitle: "Full guide to car-wash prices in Riyadh",
      guideExcerpt:
        "A detailed look at wash prices by vehicle size, what each service covers, and how to pick the right wash for your car.",
      guideCta: "Read the full guide",
    },
    branchesPage: {
      eyebrow: "Branches",
      title: "Ashafaq branches in Riyadh",
      subtitle:
        "More than 11 branches across Riyadh. Pick the closest one and start your Ashafaq experience.",
      openBranch: "View branch page",
    },
    branchPage: {
      breadcrumbBranches: "Branches",
      openDirections: "Open directions",
      openInMaps: "Open in Google Maps",
      hoursTitle: "Opening hours",
      hoursUnknown:
        "Up-to-date opening hours aren't published on the site yet — please check the latest info on Google Maps.",
      checkGoogleHours: "Check the latest on Google Maps",
      servicesTitle: "Services available",
      servicesFallback:
        "This branch offers Ashafaq's core wash packages: exterior wash and full interior + exterior wash. See the details of each service.",
      servicesLink: "Service details",
      photoAlt: "Branch photo",
      googleReviews: "Read reviews on Google",
      ctaTitle: "Ready to visit?",
      ctaSubtitle: "Open directions right away, or reach us with any question.",
      contactUs: "Contact us",
      relatedBranches: "Other nearby branches",
    },
    fleetPage: {
      eyebrow: "For Companies",
      title: "Company fleet washing",
      subtitle:
        "A complete corporate car-wash system: book your whole fleet in a single grouped order and track it as one from booking to completion.",
      checklistTitle: "Before you request a quote",
      checklistIntro:
        "You don't need a complex brief. The clearer these details are, the easier it is to design the right offer for you.",
      checklist: [
        "Number of vehicles",
        "Vehicle types and sizes",
        "Where the fleet is based",
        "Expected number of washes per month",
        "Type of service required",
        "Preferred days or time windows",
        "Whether the service is ongoing or seasonal",
      ],
      pricingNoteTitle: "Why does fleet pricing vary?",
      pricingNoteBody:
        "Fleet pricing depends on several factors: fleet size and vehicle sizes, service frequency and wash type, vehicle locations and delivery method, and agreement duration. A tailored quote is more accurate than a flat rate that fits no one.",
      guideEyebrow: "Full guide",
      guideTitle: "Full guide to company fleet washing in Riyadh",
      guideExcerpt:
        "A detailed look at fleet-wash service: organization, pricing, delivery methods, and which types of business it fits best.",
      guideCta: "Read the full guide",
      documentsTitle: "Documents & resources",
      documentsSubtitle: "Download the fleet service details as PDF.",
      brochureLabel: "Download company brochure",
      subscriptionLabel: "Download fleet subscription details",
    },
    appPage: {
      eyebrow: "Ashafaq App",
      title: "Ashafaq App — everything in one place",
      subtitle:
        "Book your car wash from your phone in seconds, track your order in real time, and manage payments easily.",
      capabilitiesEyebrow: "From the app",
      capabilitiesTitle: "What can you do from the app?",
      capabilities: [
        {
          title: "Book a mobile wash to your location",
          desc: "Have our team come to your home or workplace with full equipment.",
          href: null,
        },
        {
          title: "Book an appointment at any Ashafaq branch",
          desc: "Pick the branch that fits you and schedule ahead to save time.",
          href: null,
        },
        {
          title: "Manage your company fleet subscription",
          desc: "Track your fleet, check remaining quotas, and view reports — all in one place.",
          href: "/fleet/",
        },
      ],
    },
    mobileWashPage: {
      eyebrow: "Mobile Wash",
      title: "Mobile Wash — our service comes to you",
      subtitle:
        "Our teams arrive with full equipment at your home or workplace at a time that suits you — a professional wash without leaving where you are.",
      ctaText: "Book your mobile wash from the app now.",
      openApp: "Open the app",
      howTitle: "How does the service work?",
      howBody:
        "Instead of driving to a branch, our team comes to your location and performs the wash according to the available options. It's not just \"a wash at home\" — it's a different way to get the service, built around your time and comfort.",
      audienceTitle: "Who is it for?",
      audience: [
        "People with busy schedules",
        "Employees while they're at work",
        "Families with more than one car",
        "Anyone who prefers the service at home",
        "Anyone who wants to schedule the wash in advance",
      ],
      coverageTitle: "Coverage and available areas",
      coverageBody:
        "Mobile wash availability depends on the coverage zone in each area. We recommend checking service availability in your location from within the app before confirming your booking.",
      bookInApp: "Book via the app",
      guideEyebrow: "Full guide",
      guideTitle: "Full guide to mobile car wash in Riyadh",
      guideExcerpt:
        "A detailed look at mobile wash: how it works, who it fits, when it's the better choice, and how to book.",
      guideCta: "Read the full guide",
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Quick answers to what matters most before you book.",
      categoriesLabel: "Categories",
      categories: [
        {
          key: "prices",
          label: "Prices",
          items: [
            {
              q: "How much does an Ashafaq wash cost?",
              a: "We have two service tiers per size. Exterior wash only: small 20 SAR, mid-size 25 SAR, large 30 SAR. Interior + exterior wash: small 30 SAR, mid-size 35 SAR, large 40 SAR. Add-on services may vary by service type or vehicle.",
            },
            {
              q: "Are prices the same at every branch?",
              a: "Base prices are published on the site, but branch-specific offers or add-on services can vary by location or period.",
            },
            {
              q: "Do you run offers and discounts?",
              a: "Yes — Ashafaq runs offers from time to time. Current promotions show up on the website, in the app, and on the branches' official accounts.",
            },
            {
              q: "Can I use an offer at any branch?",
              a: "Each offer sets its own terms. Some apply everywhere; others are tied to specific branches or a limited time window.",
            },
            {
              q: "Are there subscriptions or packages?",
              a: "Packages and offers may be available through the app or at branches. Check the current options on the offers page or in the app.",
            },
          ],
        },
        {
          key: "service",
          label: "Service",
          items: [
            {
              q: "What does a car wash include?",
              a: "The core service covers the wash and attention to detail based on the package you pick, taking care of both the interior and the exterior of your car.",
            },
            {
              q: "Are there any free add-ons?",
              a: "Yes — Ashafaq's finishing touches include: a steering wheel cover, a gear cover, and an Ashafaq air freshener.",
            },
            {
              q: "Do you offer an interior + exterior wash?",
              a: "Yes — interior and exterior care are available depending on the service you choose.",
            },
            {
              q: "How long does a wash take?",
              a: "Wash time varies with your car's size, its condition, the type of service, and how busy the branch is when you arrive.",
            },
            {
              q: "Do I need to book before visiting a branch?",
              a: "Not always — you can drop by directly. Services tied to a specific location or time slot are best booked through the app.",
            },
            {
              q: "How do I pick the right service for my car?",
              a: "It depends on the car's size, its condition, and what you need. For routine cleaning a standard wash is fine; if you need more care, additional services may fit better.",
            },
            {
              q: "How often should I wash my car?",
              a: "There's no one-size-fits-all answer. It depends on your daily usage, where you park, the car's condition, and the weather. In Riyadh, dust can make some cars need washes more often than others.",
            },
          ],
        },
        {
          key: "branches",
          label: "Branches",
          items: [
            {
              q: "Where are Ashafaq branches located?",
              a: "Ashafaq branches are spread across several Riyadh neighborhoods. You can find the nearest one from the Branches page on the site and open directions straight from the map.",
            },
            {
              q: "How do I find the branch closest to me?",
              a: "Open the Branches page, pick your location or nearest neighborhood, then tap directions to route to the branch via Google Maps.",
            },
            {
              q: "Do opening hours differ by branch?",
              a: "Yes — hours can vary by branch or season. We recommend checking the branch page or its Google Maps profile for the most up-to-date times.",
            },
            {
              q: "How do I confirm a branch's location and hours before heading out?",
              a: "The best source is the branch's page on the Ashafaq site or its official Google Maps profile, since location and hours info may be updated when needed.",
            },
          ],
        },
        {
          key: "app-mobile",
          label: "App & Mobile Wash",
          items: [
            {
              q: "Is there a mobile car wash service?",
              a: "Yes — mobile wash is available depending on coverage zones and available services.",
            },
            {
              q: "How do I request a mobile wash?",
              a: "You can request the service through the Ashafaq app by picking the service and location that fit you, based on the coverage available.",
            },
            {
              q: "Can I book through the app?",
              a: "Yes — the Ashafaq app lets you browse services, book, and pick from the available options faster than by phone.",
            },
            {
              q: "Where can I download the Ashafaq app?",
              a: "The app is available on the App Store and Google Play. Use the links on the App page on our site.",
            },
            {
              q: "Is mobile wash available in every Riyadh neighborhood?",
              a: "Coverage can vary by area and service type, so it's best to check your location inside the app before completing your order.",
            },
            {
              q: "Which is better — visiting a branch or requesting a mobile wash?",
              a: "If a branch is near your route, visiting it is usually the quickest option. If you're busy and prefer the service at your location, a mobile wash may be the better fit.",
            },
          ],
        },
        {
          key: "fleet",
          label: "Fleets",
          items: [
            {
              q: "Do you wash company cars and fleets?",
              a: "Yes — Ashafaq offers a fleet-wash service for businesses that own multiple vehicles and need regular, organized service.",
            },
            {
              q: "How do I request a fleet-wash quote?",
              a: "Through the Fleet page, share your vehicle count, types, locations, and how many washes you need. We'll put together a suitable quote.",
            },
            {
              q: "Is the fleet service suitable for small businesses?",
              a: "Yes — the service isn't limited to large fleets. We're happy to review the needs of businesses with a smaller number of vehicles too.",
            },
            {
              q: "Can the fleet be serviced at the company's location?",
              a: "That depends on your location, the vehicle types, and available coverage. The best delivery method is determined when we review the request.",
            },
            {
              q: "Do you provide invoicing and organization for companies?",
              a: "Yes — service and billing can be organized based on the agreement and the company's specific needs.",
            },
          ],
        },
        {
          key: "general",
          label: "General",
          items: [
            {
              q: "Can I get in touch if I have feedback on the service?",
              a: "Yes — you can reach Ashafaq through the official channels listed on the Contact page. Feedback is handled based on the details of each case.",
            },
            {
              q: "Is there a way to send a suggestion or a complaint?",
              a: "Yes — you can send feedback or suggestions through the contact form or the official channels shown on the site.",
            },
            {
              q: "Why choose Ashafaq?",
              a: "Because the goal isn't just washing a car — it's a clear experience across service, pricing, branch accessibility, the app, mobile wash, and fleet solutions, all in one system.",
            },
          ],
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact us",
      title: "We're here to help",
      subtitle: "Pick the channel that suits you, or send us a message directly from the form below.",
      formTitle: "Send us a message",
      formSubtitle: "We'll get back to you as soon as possible.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      phoneLabel: "Phone number",
      phonePlaceholder: "05xxxxxxxx",
      messageLabel: "Your message",
      messagePlaceholder: "How can we help?",
      sendWhatsapp: "Send via WhatsApp",
      sendEmail: "Send via email",
      channels: "Contact channels",
    },
    blogPage: {
      eyebrow: "Blog",
      title: "Ashafaq Blog",
      subtitle: "Practical articles and tips on car care and wash services in Riyadh.",
      readMore: "Read more",
      backToBlog: "Back to blog",
      published: "Published on",
    },
    homeTeasers: {
      seeMore: "See more",
      servicesEyebrow: "Services",
      servicesTitle: "Services built for every car",
      servicesSubtitle: "Choose an exterior wash or a full interior + exterior clean.",
      pricesEyebrow: "Prices",
      pricesTitle: "Clear prices for every size",
      pricesSubtitle:
        "Two core services at fixed prices: interior + exterior wash, or exterior wash only.",
      pricesRangeCaption: "Exterior / Interior + Exterior",
      appEyebrow: "App",
      appTitle: "Order from your phone in seconds",
      appSubtitle: "Book, track, and pay from the Ashafaq app with ease.",
      openApp: "Open the app page",
      fleetEyebrow: "For Companies",
      fleetTitle: "A clean fleet in one order",
      fleetSubtitle:
        "Complete corporate fleet washing with a management dashboard and reports.",
      fleetLink: "See the company service",
      branchesEyebrow: "Branches",
      branchesTitle: "More than 11 branches in Riyadh",
      branchesSubtitle: "Find your nearest branch and enjoy our service.",
      branchesLink: "See branches",
      contactStripTitle: "Reach us directly",
      contactStripSubtitle:
        "Our team is ready to help you by phone, WhatsApp, or via the app.",
      contactStripLink: "Open contact page",
    },
  },
};

export type Dictionary = (typeof dictionaries)[Locale];
