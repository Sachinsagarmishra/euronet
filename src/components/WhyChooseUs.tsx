'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.css';
import AnimateOnScroll from './AnimateOnScroll';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyChooseUs() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const industries = [
        {
            id: 'telecom-data-center',
            title: t('telecomAndDataCenterTitle'),
            description: t('telecomAndDataCenterDesc'),
            image: '/othersolutions/telecom-bg.png',
            showcaseImage: '/othersolutions/telecom-showcase.png',
            buttons: ['Data Centers', 'Telecom Infrastructure'],
        },
        {
            id: 'power-utility',
            title: t('powerUtilityTitle'),
            description: t('powerUtilityDesc'),
            image: '/othersolutions/power-bg.png',
            showcaseImage: '/othersolutions/power-showcase.png',
            buttons: ['Distribution Grid', 'Transmission Grid'],
        },
        {
            id: 'iot-devices',
            title: t('iotDevicesTitle'),
            description: t('iotDevicesDesc'),
            image: '/othersolutions/iot-bg.png',
            showcaseImage: '/othersolutions/iot-showcase.webp',
            buttons: ['Smart Sensors', 'Connected Devices'],
        },
        {
            id: 'oem',
            title: t('oemTitle'),
            description: t('oemDesc'),
            image: '/othersolutions/oem-bg.png',
            // showcaseImage: '/othersolutions/OEM4.png',
            buttons: ['Solar Components', 'Power Systems'],
        },
        {
            id: 'security',
            title: t('securityTitle'),
            description: t('securityDesc'),
            image: '/othersolutions/security-bg.png',
            showcaseImage: '/othersolutions/security-showcase.webp',
            buttons: ['Surveillance', 'Access Control'],
        },
        {
            id: 'solar-solutions',
            title: t('solarSolutionsTitle'),
            description: t('solarSolutionsDesc'),
            image: '/othersolutions/solar-bg.png',
            showcaseImage: '/othersolutions/solar-showcase.webp',
            buttons: ['Photovoltaics', 'Energy Storage'],
        },
    ];

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle scroll to update current slide
    const handleScroll = useCallback(() => {
        if (sliderRef.current && isMobile) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const slideWidth = sliderRef.current.offsetWidth;
            const newSlide = Math.round(scrollLeft / slideWidth);
            if (newSlide !== currentSlide && newSlide >= 0 && newSlide < industries.length) {
                setCurrentSlide(newSlide);
            }
        }
    }, [currentSlide, isMobile, industries.length]);

    // Go to specific slide
    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
        }
    };

    return (
        <section className={styles.section} id="why-choose-us">
            {/* Section Heading */}
            <AnimateOnScroll animation="fadeUp" delay={0}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>{t('ourSolutions')}</h2>
                </div>
            </AnimateOnScroll>

            {/* Desktop View - Columns */}
            <div className={styles.columnsWrapper}>
                {industries.map((item, index) => (
                    <div
                        key={item.id}
                        className={`${styles.column} ${activeIndex === index ? styles.active : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        {/* Background Image */}
                        <div
                            className={styles.columnBg}
                            style={{ backgroundImage: `url(${item.image})` }}
                        />

                        {/* Default Content (shown when not active) */}
                        <div className={styles.defaultContent}>
                            <h3 className={styles.columnTitle}>{item.title}</h3>
                            <p className={styles.columnDescription}>{item.description}</p>
                        </div>

                        {/* Expanded Content (shown on hover) */}
                        <div className={styles.expandedContent}>
                            <div className={styles.expandedCard}>
                                {/* Image on left side */}
                                {item.showcaseImage && (
                                    <div className={styles.showcaseImageWrapper}>
                                        <Image
                                            src={item.showcaseImage}
                                            alt={`${item.title} products`}
                                            width={450}
                                            height={350}
                                            className={styles.showcaseImage}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                )}
                                {/* Text content on right side */}
                                <div className={styles.expandedInner}>
                                    <h3 className={styles.expandedTitle}>{item.title}</h3>
                                    <p className={styles.expandedDescription}>{item.description}</p>
                                    <div className={styles.divider}></div>
                                    <a href={`/solutions/${item.id}`} className={styles.expandedLink}>
                                        {item.title}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View - Slider */}
            <div className={styles.mobileSliderContainer}>
                <div
                    className={styles.mobileSlider}
                    ref={sliderRef}
                    onScroll={handleScroll}
                >
                    {industries.map((item) => (
                        <div
                            key={item.id}
                            className={styles.mobileSlide}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className={styles.mobileSlideContent}>
                                <h3 className={styles.mobileSlideTitle}>{item.title}</h3>
                                <p className={styles.mobileSlideDescription}>{item.description}</p>
                                <a href={`/solutions/${item.id}`} className={styles.mobileSlideBtn}>
                                    {t('learnMore')}
                                </a>

                                {/* Dot Indicators inside slide */}
                                <div className={styles.dotsContainer}>
                                    {industries.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                                            onClick={() => goToSlide(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
