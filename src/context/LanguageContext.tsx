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
    aboutUs: { en: 'About us', ar: 'من نحن' },
    getFobCifPricing: { en: 'Get FOB/CIF Pricing', ar: 'احصل على أسعار FOB/CIF' },
    searchPlaceholder: { en: 'Search products, solutions...', ar: 'البحث عن المنتجات، الحلول...' },
    search: { en: 'Search', ar: 'بحث' },

    // Solutions dropdown
    residentialSolar: { en: 'Residential Solar', ar: 'الطاقة الشمسية السكنية' },
    commercialSolar: { en: 'Commercial Solar', ar: 'الطاقة الشمسية التجارية' },
    industrialSolar: { en: 'Industrial Solar', ar: 'الطاقة الشمسية الصناعية' },
    solarFarms: { en: 'Solar Farms', ar: 'مزارع الطاقة الشمسية' },

    // Hero Slider
    slide1Subtitle: { en: 'SOLAR ENERGY SERVICE', ar: 'خدمة الطاقة الشمسية' },
    slide1Title: { en: 'Energy Without\nLimits', ar: 'طاقة بلا\nحدود' },
    slide1Description: { en: 'Switch to solar today. Clean power, long-term savings, and a brighter future for you and the planet.', ar: 'انتقل إلى الطاقة الشمسية اليوم. طاقة نظيفة، وفورات طويلة الأمد، ومستقبل أفضل لك وللكوكب.' },

    slide2Subtitle: { en: 'SUSTAINABLE POWER', ar: 'طاقة مستدامة' },
    slide2Title: { en: 'Go Green Today', ar: 'انطلق نحو الأخضر اليوم' },
    slide2Description: { en: 'Join thousands of businesses saving with solar. Expert installation and support across Africa & Asia.', ar: 'انضم إلى آلاف الشركات التي توفر مع الطاقة الشمسية. تركيب احترافي ودعم في أفريقيا وآسيا.' },

    slide3Subtitle: { en: 'RENEWABLE SOLUTIONS', ar: 'حلول متجددة' },
    slide3Title: { en: 'Power Your\nFuture', ar: 'أنر\nمستقبلك' },
    slide3Description: { en: 'B2B supplier with stock in Dubai, Lagos, Johannesburg, Riyadh, Sar es Salaam. Container-ready.', ar: 'مورد B2B مع مخزون في دبي، لاغوس، جوهانسبرغ، الرياض، دار السلام. جاهز للحاويات.' },

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
