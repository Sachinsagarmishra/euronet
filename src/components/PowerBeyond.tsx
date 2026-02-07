'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './PowerBeyond.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

interface StatItem {
    number: number;
    suffix: string;
    label: string;
    labelAr: string;
}

const stats: StatItem[] = [
    { number: 15, suffix: '+', label: 'Industries', labelAr: 'صناعة' },
    { number: 3000, suffix: '+', label: 'Distributor Partners', labelAr: 'شريك توزيع' },
    { number: 250, suffix: '+', label: 'Product Categories & SKUs', labelAr: 'فئات المنتجات' },
    { number: 20, suffix: '+', label: 'Years of Excellence', labelAr: 'سنوات من التميز' },
    { number: 60, suffix: '+', label: 'Countries & Region', labelAr: 'دولة ومنطقة' },
];

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!startCounting) {
            setCount(0);
            countRef.current = 0;
            startTimeRef.current = null;
            return;
        }

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(percentage) * end);

            if (currentCount !== countRef.current) {
                countRef.current = currentCount;
                setCount(currentCount);
            }

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, startCounting]);

    return count;
};

// Individual stat counter component
const StatCounter = ({ stat, startCounting }: { stat: StatItem; startCounting: boolean }) => {
    const { language } = useLanguage();
    const count = useCountUp(stat.number, 2000, startCounting);

    return (
        <div className={styles.statItem}>
            <span className={styles.statNumber}>
                {count}{stat.suffix}
            </span>
            <span className={styles.statLabel}>
                {language === 'ar' ? stat.labelAr : stat.label}
            </span>
        </div>
    );
};

const PowerBeyond = () => {
    const { language, t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [showStats, setShowStats] = useState(false);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress within the 200vh section
            // sectionTop starts positive (below viewport), becomes negative as we scroll past
            // When sectionTop = 0, we're at the start of the section
            // When sectionTop = -windowHeight, we've scrolled one full viewport into the section

            const scrolledIntoSection = -sectionTop;
            const scrollProgress = scrolledIntoSection / windowHeight;

            // First 100vh (0 to 1): Show title
            // Second 100vh (1 to 2): Show stats

            if (scrollProgress >= 0.5 && scrollProgress < 2) {
                // We're scrolled past the first half of the first screen
                // Start transitioning to stats
                setShowStats(true);

                // Start counting when we're well into the transition
                if (scrollProgress >= 0.7) {
                    setStartCounting(true);
                } else {
                    setStartCounting(false);
                }
            } else if (scrollProgress < 0.5) {
                // Still showing title
                setShowStats(false);
                setStartCounting(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            {/* Sticky wrapper keeps the visual content fixed during scroll */}
            <div className={styles.stickyWrapper}>
                {/* Background Video */}
                <video
                    className={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/power-beyond.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className={styles.overlay}></div>

                {/* Content Container */}
                <div className={styles.content}>
                    {/* Title - Shows first, fades out on scroll */}
                    <div className={`${styles.titleContainer} ${showStats ? styles.hidden : ''}`}>
                        <AnimateOnScroll animation="fadeUp" delay={0}>
                            <h2 className={styles.title}>{t('powerBeyond')}</h2>
                        </AnimateOnScroll>
                    </div>

                    {/* Stats - Appears on scroll */}
                    <div className={`${styles.statsContainer} ${showStats ? styles.visible : ''}`}>
                        {/* First Row - 3 stats */}
                        <div className={styles.statsRow}>
                            {stats.slice(0, 3).map((stat, index) => (
                                <StatCounter key={index} stat={stat} startCounting={startCounting} />
                            ))}
                        </div>

                        {/* Second Row - 2 stats */}
                        <div className={styles.statsRow}>
                            {stats.slice(3, 5).map((stat, index) => (
                                <StatCounter key={index + 3} stat={stat} startCounting={startCounting} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PowerBeyond;
