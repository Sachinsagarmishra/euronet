'use client';

import styles from './CTASection.module.css';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Ready to Power Your Business?',
            subtitle: 'Join 500+ distributors growing with Euronet',
            browseProducts: 'Browse Products',
            becomePartner: 'Become a Partner',
            callUs: 'Or call us:',
            phone: '+971 55 552 7791'
        },
        ar: {
            title: 'هل أنت مستعد لتشغيل عملك؟',
            subtitle: 'انضم إلى أكثر من 500 موزع ينمون مع يوروناتٌ',
            browseProducts: 'تصفح المنتجات',
            becomePartner: 'كن شريكاً',
            callUs: 'أو اتصل بنا:',
            phone: '+971 55 552 7791'
        }
    };

    const t = language === 'ar' ? content.ar : content.en;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.title}</h2>
                <p className={styles.subtitle}>{t.subtitle}</p>

                <div className={styles.buttonGroup}>
                    <button className={styles.primaryBtn}>
                        {t.browseProducts}
                    </button>
                    <button className={styles.secondaryBtn}>
                        {t.becomePartner}
                    </button>
                </div>

                <p className={styles.callText}>
                    {t.callUs} <a href="tel:+971555527791" className={styles.phoneLink}>{t.phone}</a>
                </p>
            </div>
        </section>
    );
};

export default CTASection;
