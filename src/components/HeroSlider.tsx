'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';
import { useLanguage } from '@/context/LanguageContext';

const HeroSlider = () => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            id: 1,
            media: '/slideer-bg/slide-1.mp4',
            isVideo: true,
            subtitle: t('slide1Subtitle'),
            title: t('slide1Title'),
            description: t('slide1Description'),
            primaryBtn: t('learnMore'),
        },
        {
            id: 2,
            media: '/slideer-bg/homepage-hero.mp4',
            isVideo: true,
            subtitle: '7 - 9 April 2026',
            title: "Meet Us at Middle East Energy 2026",
            description: "Join Euronet at the Middle East's definitive energy marketplace. Visit our booth at the Dubai World Trade Centre to explore our latest innovations.",
            primaryBtn: 'Register for Visitor Badge',
            secondaryBtn: 'Purchase VIP Experience',
            isEvent: true,
        },
        {
            id: 3,
            media: '/slideer-bg/slide-3.png',
            isVideo: false,
            subtitle: t('slide3Subtitle'),
            title: t('slide3Title'),
            description: t('slide3Description'),
            primaryBtn: t('learnMore'),
        },
    ];



    const goToSlide = useCallback((index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 800);
    }, [isAnimating, currentSlide]);

    const nextSlide = useCallback(() => {
        goToSlide((currentSlide + 1) % slides.length);
    }, [currentSlide, goToSlide, slides.length]);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <section
            className={styles.hero}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            <div className={styles.slidesContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        {/* Background Media */}
                        <div className={styles.slideBackground}>
                            {slide.isVideo ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.videoBackground}
                                >
                                    <source src={slide.media} type="video/mp4" />
                                </video>
                            ) : (
                                <Image
                                    src={slide.media}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    quality={90}
                                    style={{ objectFit: 'cover' }}
                                />
                            )}
                            <div className={styles.overlay}></div>
                        </div>

                        {/* Content */}
                        <div className={styles.slideContent}>
                            <div className={styles.container}>
                                <div className={styles.textContent}>
                                    <span className={`${styles.subtitle} ${index === currentSlide ? styles.animate : ''}`}>
                                        {slide.subtitle}
                                    </span>
                                    <h1 className={`${styles.title} ${index === currentSlide ? styles.animate : ''}`}>
                                        {slide.title.split('\n').map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                {i < slide.title.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </h1>
                                    <p className={`${styles.description} ${index === currentSlide ? styles.animate : ''}`}>
                                        {slide.description}
                                    </p>
                                    <div className={`${styles.buttons} ${index === currentSlide ? styles.animate : ''}`}>
                                        <button className={styles.primaryBtn}>
                                            {slide.primaryBtn}
                                        </button>
                                        {slide.secondaryBtn && (
                                            <button className={styles.secondaryBtn}>
                                                {slide.secondaryBtn}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className={styles.indicatorProgress}></span>
                    </button>
                ))}
            </div>



            {/* Navigation Arrows */}
            <button
                className={`${styles.navArrow} ${styles.prevArrow}`}
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>
            <button
                className={`${styles.navArrow} ${styles.nextArrow}`}
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>
        </section>
    );
};

export default HeroSlider;
