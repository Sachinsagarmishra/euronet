'use client';

import Image from 'next/image';
import styles from './WhoWeAre.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

const WhoWeAre = () => {
    const { language } = useLanguage();

    const stats = [
        {
            value: '87%',
            label: language === 'ar' ? 'الكفاءة' : 'Efficiency',
            description: language === 'ar'
                ? 'أنظمة محسنة لأقصى استفادة من الطاقة'
                : 'Optimized systems for maximum energy utilization',
        },
        {
            value: '30%',
            label: language === 'ar' ? 'توفير الطاقة' : 'Energy Savings',
            description: language === 'ar'
                ? 'مساعدة العملاء على تقليل التكاليف التشغيلية بشكل مستدام'
                : 'Helping clients reduce operational costs sustainably',
        },
        {
            value: '95%',
            label: language === 'ar' ? 'الموثوقية' : 'Reliability',
            description: language === 'ar'
                ? 'أداء مثبت في البيئات الصعبة'
                : 'Proven performance in demanding environments',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>
                    <AnimateOnScroll animation="fadeUp" delay={0}>
                        <span className={styles.label}>
                            <span className={styles.labelDot}></span>
                            {language === 'ar' ? 'من نحن' : 'ABOUT US'}
                        </span>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={0.1}>
                        <h2 className={styles.title}>
                            {language === 'ar' ? 'نحو مستقبل مستدام' : 'Powering a Sustainable Future'}
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={0.2}>
                        <p className={styles.description}>
                            {language === 'ar'
                                ? 'تقدم يورونت حلول طاقة متقدمة عبر القطاعات السكنية والزراعية والتجارية والصناعية وخارج الشبكة. تم تصميم أنظمتنا للموثوقية والكفاءة والاستدامة، مما يساعد العملاء على تقليل تكاليف الطاقة والأثر البيئي.'
                                : 'Euronet delivers advanced energy solutions across residential, agricultural, commercial, industrial, and off-grid sectors. Our systems are designed for reliability, efficiency, and sustainability, helping clients reduce energy costs and environmental impact.'}
                        </p>
                    </AnimateOnScroll>

                    {/* Rating */}
                    <AnimateOnScroll animation="fadeUp" delay={0.3}>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFD700">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <span className={styles.ratingText}>
                                {language === 'ar' ? 'تقييم 5 نجوم من 150+ عميل سعيد!' : 'Rated 5 Stars by 150+ Happy Customers!'}
                            </span>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={0.4}>
                        <a href="/about" className={styles.link}>
                            {language === 'ar' ? 'اعرف المزيد' : 'Learn more'}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </AnimateOnScroll>
                </div>

                {/* Right Side - Image with Stats */}
                <div className={styles.rightSide}>
                    <AnimateOnScroll animation="fadeRight" delay={0.2}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/who-we-are.png"
                                alt="Euronet Solar Experts"
                                width={420}
                                height={520}
                                quality={90}
                                className={styles.image}
                            />
                        </div>
                    </AnimateOnScroll>

                    {/* Floating Stats */}
                    <div className={styles.statsContainer}>
                        <AnimateOnScroll animation="fadeLeft" delay={0.3}>
                            <div className={`${styles.statCard} ${styles.statCard1}`}>
                                <div className={styles.statHeader}>
                                    <span className={styles.statValue}>{stats[0].value}</span>
                                    <span className={styles.statLabel}>{stats[0].label}</span>
                                </div>
                                <p className={styles.statDescription}>{stats[0].description}</p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeLeft" delay={0.4}>
                            <div className={`${styles.statCard} ${styles.statCard2}`}>
                                <div className={styles.statHeader}>
                                    <span className={styles.statValue}>{stats[1].value}</span>
                                    <span className={styles.statLabel}>{stats[1].label}</span>
                                </div>
                                <p className={styles.statDescription}>{stats[1].description}</p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeLeft" delay={0.5}>
                            <div className={`${styles.statCard} ${styles.statCard3}`}>
                                <div className={styles.statHeader}>
                                    <span className={styles.statValue}>{stats[2].value}</span>
                                    <span className={styles.statLabel}>{stats[2].label}</span>
                                </div>
                                <p className={styles.statDescription}>{stats[2].description}</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
