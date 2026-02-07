'use client';

import { useState, useEffect } from 'react';
import styles from './BusinessBenefits.module.css';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function BusinessBenefits() {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            vsg: 'SOL',
            title: t('integratedEnergyTitle'),
            subtitle: t('integratedEnergySubtitle'),
            description: t('integratedEnergyDescription'),
            image: '/products/Integrated-Energy.png'
        },
        {
            id: 2,
            vsg: 'ENG',
            title: t('engineeredScaleTitle'),
            subtitle: t('engineeredScaleSubtitle'),
            description: t('engineeredScaleDescription'),
            image: '/products/Engineered-for-scale.png'
        },
        {
            id: 3,
            vsg: 'GLB',
            title: t('globalStandardsTitle'),
            subtitle: t('globalStandardsSubtitle'),
            description: t('globalStandardsDescription'),
            image: '/products/Global-standards.png'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className={styles.section}>
            <div className={styles.sliderWrapper}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.container} ${index === currentSlide ? styles.active : styles.inactive}`}
                    >
                        {/* Large Background Text */}
                        <div className={styles.vsgText}>
                            <span>{slide.vsg}</span>
                        </div>

                        {/* Divider Line */}
                        <div className={styles.divider}></div>

                        {/* Content */}
                        <div className={styles.content}>
                            <h2 className={styles.title}>{slide.title}</h2>
                            {slide.subtitle && <p className={styles.subtitle}>{slide.subtitle}</p>}
                            <p className={styles.description}>{slide.description}</p>
                        </div>

                        {/* Product Image with Animated Circle */}
                        <div className={styles.productWrapper}>
                            <div className={styles.animatedCircle}></div>
                            <div className={styles.productImage}>
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={450}
                                    height={320}
                                    className={styles.mainImage}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className={styles.dots}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
