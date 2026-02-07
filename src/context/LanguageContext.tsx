'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
    [key: string]: {
        en: string;
        ar: string;
    };
}

const translations: Translations = {
    // Header
    download: { en: 'Download', ar: 'تحميل' },
    home: { en: 'Home', ar: 'الرئيسية' },
    solutions: { en: 'Solutions', ar: 'الحلول' },
    products: { en: 'Products', ar: 'المنتجات' },
    services: { en: 'Services', ar: 'الخدمات' },
    aboutUs: { en: 'About Us', ar: 'من نحن' },
    resourcesDownloads: { en: 'Resources / Downloads', ar: 'الموارد / التحميلات' },
    partnerWithUs: { en: 'Partner With Us', ar: 'شارك معنا' },
    searchPlaceholder: { en: 'Search products, solutions...', ar: 'البحث عن المنتجات، الحلول...' },
    search: { en: 'Search', ar: 'بحث' },
    popularSolutions: { en: 'Popular Solutions', ar: 'اقتراحات الحلول' },
    model: { en: 'Model', ar: 'الموديل' },
    viewAllProducts: { en: 'View All Products', ar: 'عرض جميع المنتجات' },
    powerBeyond: { en: 'Power Beyond', ar: 'طاقة بلا حدود' },

    // Solutions dropdown
    telecomDataCenter: { en: 'Telecom & Data Center', ar: 'الاتصالات ومركز البيانات' },
    powerUtility: { en: 'Power Utility', ar: 'مرافق الطاقة' },
    iotDevices: { en: 'IoT Devices', ar: 'أجهزة إنترنت الأشياء' },
    oem: { en: 'OEM', ar: 'المعدات الأصلية' },
    security: { en: 'Security', ar: 'الأمن' },
    solarSolutions: { en: 'Solar Solutions', ar: 'حلول الطاقة الشمسية' },

    // Hero Slider
    slide1Subtitle: { en: 'SOLAR ENERGY SERVICE', ar: 'خدمة الطاقة الشمسية' },
    slide1Title: { en: 'Energy Without\nLimits', ar: 'طاقة بلا\nحدود' },
    slide1Description: { en: 'Switch to solar today. Clean power, long-term savings, and a brighter future for you and the planet.', ar: 'انتقل إلى الطاقة الشمسية اليوم. طاقة نظيفة، وفورات طويلة الأمد، ومستقبل أفضل لك وللكوكب.' },

    slide2Subtitle: { en: '7 - 9 April 2026', ar: '7 - 9 أبريل 2026' },
    slide2Title: { en: 'Meet Us at Middle East Energy 2026', ar: 'قابلنا في معرض الشرق الأوسط للطاقة 2026' },
    slide2Description: { en: 'Join Euronet at the Middle East\'s definitive energy marketplace. Visit our booth at the Dubai World Trade Centre to explore our latest innovations.', ar: 'انضم إلى يورونت في سوق الطاقة الأبرز في الشرق الأوسط. تفضل بزيارة جناحنا في مركز دبي التجاري العالمي لاستكشاف أحدث ابتكاراتنا.' },

    slide3Subtitle: { en: 'BLOG TOPIC', ar: 'موضوع المدونة' },
    slide3Title: { en: 'Energy That Keeps Data Centres Running', ar: 'الطاقة التي تضمن استمرارية مراكز البيانات' },
    slide3Description: { en: 'How scalable solar, energy storage, and electrical solutions support uptime, efficiency, and cost control in data centre operations.', ar: 'كيف تدعم حلول الطاقة الشمسية القابلة للتوسع وتخزين الطاقة والحلول الكهربائية وقت التشغيل والكفاءة والتحكم في التكاليف في عمليات مراكز البيانات.' },

    seeMore: { en: 'See More', ar: 'شاهد المزيد' },
    learnMore: { en: 'Learn More', ar: 'اعرف المزيد' },

    // Features
    lowerElectricityBills: { en: 'Lower Electricity Bills', ar: 'فواتير كهرباء أقل' },
    cleanRenewableEnergy: { en: 'Clean & Renewable Energy', ar: 'طاقة نظيفة ومتجددة' },
    energyIndependence: { en: 'Energy Independence', ar: 'استقلالية الطاقة' },
    lowMaintenance: { en: 'Low Maintenance', ar: 'صيانة منخفضة' },

    // Who We Are
    whoWeAre: { en: 'Who We Are', ar: 'من نحن' },
    whoWeAreSubtitle: { en: 'Largest B2B & Project Supplier of Solar & Electric Products In Africa and Asia', ar: 'أكبر مورد B2B ومشاريع للمنتجات الشمسية والكهربائية في أفريقيا وآسيا' },
    whoWeAreDescription: { en: 'EURONET is the leading brand in the Middle East, African region and Central Asia, over the decade we have achieved many milestones in more than 48 countries worldwide. We have always catered high quality with cost efficient products to our customers. We have full range of advanced technology Solar Products, Solar Appliances, Electric Products and Home appliances in our product portfolio. We look for Business opportunities across the world supplying our products in large quantities', ar: 'يورونت هي العلامة التجارية الرائدة في الشرق الأوسط والمنطقة الأفريقية وآسيا الوسطى، وخلال العقد الماضي حققنا العديد من الإنجازات في أكثر من 48 دولة حول العالم. نقدم دائماً منتجات عالية الجودة بأسعار تنافسية لعملائنا. لدينا مجموعة كاملة من منتجات الطاقة الشمسية والأجهزة الشمسية والمنتجات الكهربائية والأجهزة المنزلية المتطورة. نسعى للحصول على فرص تجارية في جميع أنحاء العالم لتوريد منتجاتنا بكميات كبيرة' },
    knowMore: { en: 'Know More', ar: 'اعرف المزيد' },
    contactUs: { en: 'Contact Us', ar: 'اتصل بنا' },

    // Contact Form
    getInTouch: { en: 'GET IN TOUCH', ar: 'تواصل معنا' },
    workWithEuronetTitle: { en: 'Work With Euronet', ar: 'اعمل مع يورونت' },
    officesSubtitle: { en: 'Offices In Dubai - U.A.E, China, Saudi Arabia, Nigeria, South Africa', ar: 'مكاتب في دبي - الإمارات، الصين، السعودية، نيجيريا، جنوب أفريقيا' },
    globalOfficesTitle: { en: 'Our Global Offices', ar: 'مكاتبنا العالمية' },
    sendMessageTitle: { en: 'Send us a Message', ar: 'أرسل لنا رسالة' },
    sendMessageSubtitle: { en: "We'll get back to you within 24 hours", ar: 'سنعود إليك خلال 24 ساعة' },
    fullNameLabel: { en: 'Full Name', ar: 'الاسم الكامل' },
    fullNamePlaceholder: { en: 'Enter your full name', ar: 'أدخل اسمك الكامل' },
    emailLabel: { en: 'Email', ar: 'البريد الإلكتروني' },
    emailPlaceholder: { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' },
    countryLabel: { en: 'Country', ar: 'البلد' },
    selectCountry: { en: 'Select your country', ar: 'اختر بلدك' },
    phoneLabel: { en: 'Phone', ar: 'رقم الهاتف' },
    phonePlaceholder: { en: 'Enter phone number', ar: 'أدخل رقم الهاتف' },
    messageLabel: { en: 'Type Your Message Here', ar: 'رسالتك' },
    messagePlaceholder: { en: 'Write your message here...', ar: 'اكتب رسالتك هنا...' },
    sending: { en: 'Sending...', ar: 'جاري الإرسال...' },
    sentSuccessfully: { en: 'Sent Successfully!', ar: 'تم الإرسال!' },
    apply: { en: 'Apply', ar: 'تقديم' },

    // Who We Are (Detailed)
    statsEfficiency: { en: 'Efficiency', ar: 'الكفاءة' },
    statsEfficiencyDesc: { en: 'Optimized systems for maximum energy utilization', ar: 'أنظمة محسنة لأقصى استفادة من الطاقة' },
    statsEnergySavings: { en: 'Energy Savings', ar: 'توفير الطاقة' },
    statsEnergySavingsDesc: { en: 'Helping clients reduce operational costs sustainably', ar: 'مساعدة العملاء على تقليل التكاليف التشغيلية بشكل مستدام' },
    statsReliability: { en: 'Reliability', ar: 'الموثوقية' },
    statsReliabilityDesc: { en: 'Proven performance in demanding environments', ar: 'أداء مثبت في البيئات الصعبة' },
    aboutUsUppercase: { en: 'ABOUT US', ar: 'من نحن' },
    whoWeAreTitle: { en: 'Powering a Sustainable Future', ar: 'نحو مستقبل مستدام' },
    whoWeAreMainDesc: { en: 'Euronet delivers advanced energy solutions across residential, agricultural, commercial, industrial, and off-grid sectors. Our systems are designed for reliability, efficiency, and sustainability, helping clients reduce energy costs and environmental impact.', ar: 'تقدم يورونت حلول طاقة متقدمة عبر القطاعات السكنية والزراعية والتجارية والصناعية وخارج الشبكة. تم تصميم أنظمتنا للموثوقية والكفاءة والاستدامة، مما يساعد العملاء على تقليل تكاليف الطاقة والأثر البيئي.' },
    ratingText: { en: 'Rated 5 Stars by 150+ Happy Customers!', ar: 'تقييم 5 نجوم من 150+ عميل سعيد!' },

    // Why Choose Us / Our Solutions
    ourSolutions: { en: 'Our Solutions', ar: 'حلولنا' },
    telecomAndDataCenterTitle: { en: 'Telecom & Data Center', ar: 'الاتصالات ومركز البيانات' },
    telecomAndDataCenterDesc: { en: 'Telecom and data center solutions delivering reliable power, uptime, and energy efficiency', ar: 'حلول الاتصالات ومراكز البيانات التي توفر طاقة موثوقة واستمرارية التشغيل وكفاءة الطاقة' },
    powerUtilityTitle: { en: 'Power Utility', ar: 'مرافق الطاقة' },
    powerUtilityDesc: { en: 'Providing innovative solutions for efficient power generation, transmission, and distribution', ar: 'تقديم حلول مبتكرة لتوليد ونقل وتوزيع الطاقة بكفاءة' },
    iotDevicesTitle: { en: 'IoT Devices', ar: 'أجهزة إنترنت الأشياء' },
    iotDevicesDesc: { en: 'IoT device solutions enabling smart connectivity, real-time monitoring, and efficient energy management.', ar: 'حلول أجهزة إنترنت الأشياء التي تمكن الاتصال الذكي والمراقبة في الوقت الفعلي وإدارة الطاقة بكفاءة.' },
    oemTitle: { en: 'OEM', ar: 'تصنيع المعدات الأصلية' },
    oemDesc: { en: 'OEM solutions delivering customized, reliable solar and power components for diverse manufacturing needs.', ar: 'حلول OEM التي توفر مكونات طاقة وشمسية مخصصة وموثوقة لاحتياجات التصنيع المتنوعة.' },
    securityTitle: { en: 'Security', ar: 'الأمن' },
    securityDesc: { en: 'Security solutions delivering reliable power, surveillance support, and uninterrupted protection.', ar: 'حلول أمنية توفر طاقة موثوقة ودعم المراقبة وحماية غير منقطعة.' },
    solarSolutionsTitle: { en: 'Solar Solutions', ar: 'حلول الطاقة الشمسية' },
    solarSolutionsDesc: { en: 'Advanced solar systems delivering clean, sustainable power and long-term energy savings.', ar: 'أنظمة شمسية متقدمة توفر طاقة نظيفة ومستدامة وتوفيراً للطاقة على المدى الطويل.' },

    // Business Benefits
    integratedEnergyTitle: { en: 'Integrated Energy & Technology Solutions', ar: 'حلول الطاقة والتكنولوجيا المتكاملة' },
    integratedEnergySubtitle: { en: 'One partner for power, data, and smart infrastructure.', ar: 'شريك واحد للطاقة والبيانات والبنية التحتية الذكية.' },
    integratedEnergyDescription: { en: 'Euronet delivers solutions across renewable energy, power utilities, data centers, IoT devices, and smart systems, helping businesses deploy connected, future-ready infrastructure without juggling multiple vendors.', ar: 'تقدم يورونت حلولاً عبر الطاقة المتجددة ومرافق الطاقة ومراكز البيانات وأجهزة إنترنت الأشياء والأنظمة الذكية، مما يساعد الشركات على نشر بنية تحتية متصلة وجاهزة للمستقبل.' },
    engineeredScaleTitle: { en: 'Engineered for Scale, Reliability, and Performance', ar: 'مصمم للتوسع والموثوقية والأداء' },
    engineeredScaleSubtitle: { en: 'Solutions designed to perform in real-world conditions', ar: 'حلول مصممة للأداء في ظروف العالم الحقيقي' },
    engineeredScaleDescription: { en: 'From critical power systems to intelligent energy solutions, Euronet focuses on durability, system compatibility, and consistent performance, backed by technical expertise that supports deployment at scale.', ar: 'من أنظمة الطاقة الحرجة إلى حلول الطاقة الذكية، تركز يورونت على المتانة وتوافق الأنظمة والأداء المتسق، مدعومة بخبرة فنية تدعم النشر على نطاق واسع.' },
    globalStandardsTitle: { en: 'Global Standards, Regional Execution', ar: 'معايير عالمية، تنفيذ إقليمي' },
    globalStandardsSubtitle: { en: 'International capability with on-ground market understanding.', ar: 'قدرة دولية مع فهم السوق على أرض الواقع.' },
    globalStandardsDescription: { en: 'Operating across the Middle East, Africa, and South Asia, Euronet combines global quality benchmarks with localized execution, ensuring solutions align with regional regulations, climates, and operational needs.', ar: 'تعمل يورونت في جميع أنحاء الشرق الأوسط وأفريقيا وجنوب آسيا، وتجمع بين معايير الجودة العالمية والتنفيذ المحلي، مما يضمن توافق الحلول مع اللوائح الإقليمية والمناخ والاحتياجات التشغيلية.' },

    // Latest Updates
    latestUpdates: { en: 'Latest Updates', ar: 'أحدث التحديثات' },
    news: { en: 'News', ar: 'أخبار' },
    blog: { en: 'Blog', ar: 'مدونة' },
    viewMore: { en: 'View More', ar: 'عرض المزيد' },
    news1Title: { en: 'The Future of Solar and Renewable Energy Solutions Worldwide', ar: 'مستقبل حلول الطاقة الشمسية والمتجددة في جميع أنحاء العالم' },
    news2Title: { en: 'How Euronetworld Is Driving Innovation in Solar and Electrical Systems', ar: 'كيف تقود يورونيت وورلد الابتكار في الأنظمة الشمسية والكهربائية' },
    news3Title: { en: 'Choosing the Right Solar Power Products for Industrial and Commercial Use', ar: 'اختيار منتجات الطاقة الشمسية المناسبة للاستخدام الصناعي والتجاري' },
    blog1Title: { en: 'Top 5 Benefits of Installing Solar Panels for Your Home', ar: 'أهم 5 فوائد لتركيب الألواح الشمسية لمنزلك' },
    blog2Title: { en: 'Understanding Solar Energy: A Complete Guide for Beginners', ar: 'فهم الطاقة الشمسية: دليل كامل للمبتدئين' },
    blog3Title: { en: 'Sustainable Living: How Solar Energy Reduces Your Carbon Footprint', ar: 'الحياة المستدامة: كيف تقلل الطاقة الشمسية من بصمتك الكربونية' },

    // Email Subscription
    emailSubscription: { en: 'Email Subscription', ar: 'الاشتراك بالبريد الإلكتروني' },
    enterName: { en: 'Please enter your name', ar: 'الرجاء إدخال اسمك' },
    enterEmail: { en: 'Please enter your email address', ar: 'الرجاء إدخال عنوان بريدك الإلكتروني' },
    subscribe: { en: 'subscription', ar: 'الاشتراك' },

    // Footer
    footerTagline: { en: 'Powering Africa\'s solar revolution with quality energy solutions from the Middle East to the continent.', ar: 'نقدم ثورة الطاقة الشمسية في أفريقيا مع حلول طاقة عالية الجودة من الشرق الأوسط إلى القارة.' },
    footerSol: { en: 'SOLUTIONS', ar: 'الحلول' },
    footerCompany: { en: 'COMPANY', ar: 'الشركة' },
    footerRegions: { en: 'REGIONS', ar: 'المناطق' },
    footerCopyright: { en: '© 2026 Euronet Electronics | All Rights Reserved to Euronet & its Affiliates', ar: '© 2026 يورونت للإلكترونيات | جميع الحقوق محفوظة لشركة يورونت وفروعها' },
    middleEast: { en: 'Middle East (HQ)', ar: 'الشرق الأوسط (المقر الرئيسي)' },
    westAfrica: { en: 'West Africa', ar: 'غرب أفريقيا' },
    eastAfrica: { en: 'East Africa', ar: 'شرق أفريقيا' },
    southernAfrica: { en: 'Southern Africa', ar: 'جنوب أفريقيا' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[key]?.[language] || key;
    };

    const isRTL = language === 'ar';

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language, isRTL]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
