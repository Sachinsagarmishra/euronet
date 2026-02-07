'use client';

import Image from 'next/image';
import styles from './WhoWeAre.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

const WhoWeAre = () => {
    const { language, t } = useLanguage();

    const stats = [
        {
            value: '87%',
            label: t('statsEfficiency'),
            description: t('statsEfficiencyDesc'),
        },
        {
            value: '30%',
            label: t('statsEnergySavings'),
            description: t('statsEnergySavingsDesc'),
        },
        {
            value: '95%',
            label: t('statsReliability'),
            description: t('statsReliabilityDesc'),
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
                            {t('aboutUsUppercase')}
                        </span>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={0.1}>
                        <h2 className={styles.title}>
                            {t('whoWeAreTitle')}
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={0.2}>
                        <p className={styles.description}>
                            {t('whoWeAreMainDesc')}
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
                                {t('ratingText')}
                            </span>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={0.4}>
                        <a href="/about" className={styles.link}>
                            {t('learnMore')}
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
