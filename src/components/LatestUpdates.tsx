'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './LatestUpdates.module.css';
import AnimateOnScroll from './AnimateOnScroll';
import { useLanguage } from '@/context/LanguageContext';

interface Article {
    id: string;
    date: string;
    title: string;
    image: string;
    category: 'news' | 'blog';
}

const LatestUpdates: React.FC = () => {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState<'news' | 'blog'>('news');
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const articles: Article[] = [
        // News Articles
        {
            id: 'news-1',
            date: language === 'ar' ? '15 يناير 2026' : 'JANUARY 15, 2026',
            title: t('news1Title'),
            image: '/blog/The Future of Solar and Renewable Energy Solutions Worldwide.png',
            category: 'news'
        },
        {
            id: 'news-2',
            date: language === 'ar' ? '12 يناير 2026' : 'JANUARY 12, 2026',
            title: t('news2Title'),
            image: '/blog/How Euronetworld Is Driving Innovation in Solar and Electrical Systems.png',
            category: 'news'
        },
        {
            id: 'news-3',
            date: language === 'ar' ? '09 يناير 2026' : 'JANUARY 09, 2026',
            title: t('news3Title'),
            image: '/blog/Choosing the Right Solar Power Products for Industrial and Commercial Use.png',
            category: 'news'
        },
        // Blog Articles
        {
            id: 'blog-1',
            date: language === 'ar' ? '14 يناير 2026' : 'JANUARY 14, 2026',
            title: t('blog1Title'),
            image: '/blog/The Future of Solar and Renewable Energy Solutions Worldwide.png',
            category: 'blog'
        },
        {
            id: 'blog-2',
            date: language === 'ar' ? '10 يناير 2026' : 'JANUARY 10, 2026',
            title: t('blog2Title'),
            image: '/blog/How Euronetworld Is Driving Innovation in Solar and Electrical Systems.png',
            category: 'blog'
        },
        {
            id: 'blog-3',
            date: language === 'ar' ? '07 يناير 2026' : 'JANUARY 07, 2026',
            title: t('blog3Title'),
            image: '/blog/Choosing the Right Solar Power Products for Industrial and Commercial Use.png',
            category: 'blog'
        }
    ];

    const filteredArticles = articles.filter(article => article.category === activeTab);

    // Auto scroll functionality
    const startAutoScroll = useCallback(() => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        autoScrollRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % filteredArticles.length);
        }, 4000);
    }, [filteredArticles.length]);

    const stopAutoScroll = useCallback(() => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [startAutoScroll, stopAutoScroll, activeTab]);

    // Reset slide when tab changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [activeTab]);

    // Scroll to current slide
    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({
                left: currentSlide * slideWidth,
                behavior: 'smooth'
            });
        }
    }, [currentSlide]);

    // Handle manual scroll
    const handleScroll = useCallback(() => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            const scrollLeft = sliderRef.current.scrollLeft;
            const newSlide = Math.round(scrollLeft / slideWidth);
            if (newSlide !== currentSlide && newSlide < filteredArticles.length) {
                setCurrentSlide(newSlide);
            }
        }
    }, [currentSlide, filteredArticles.length]);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000); // Resume auto scroll after 5 seconds
    };

    const handleSliderInteraction = () => {
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000); // Resume auto scroll after 5 seconds of inactivity
    };

    return (
        <section className={styles.latestUpdates}>
            <div className={styles.container}>
                {/* Header */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>{t('latestUpdates')}</h2>

                        <div className={styles.tabsWrapper}>
                            <button
                                className={`${styles.tab} ${activeTab === 'news' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('news')}
                            >
                                {t('news')}
                            </button>
                            <span className={styles.tabDivider}></span>
                            <button
                                className={`${styles.tab} ${activeTab === 'blog' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('blog')}
                            >
                                {t('blog')}
                            </button>
                        </div>

                        <button className={styles.viewMoreBtn}>{t('viewMore')}</button>
                    </div>
                </AnimateOnScroll>

                {/* Desktop Grid */}
                <div className={styles.articlesGrid}>
                    {filteredArticles.map((article) => (
                        <article key={article.id} className={styles.articleCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className={styles.articleImage}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.articleContent}>
                                <span className={styles.articleDate}>{article.date}</span>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className={styles.mobileSliderContainer}>
                    <div
                        className={styles.mobileSlider}
                        ref={sliderRef}
                        onScroll={handleScroll}
                        onTouchStart={handleSliderInteraction}
                        onMouseDown={handleSliderInteraction}
                    >
                        {filteredArticles.map((article) => (
                            <article key={article.id} className={styles.slideCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className={styles.articleImage}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.articleContent}>
                                    <span className={styles.articleDate}>{article.date}</span>
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className={styles.dotsContainer}>
                        {filteredArticles.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestUpdates;
