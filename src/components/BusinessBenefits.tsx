'use client';

import { useState, useEffect } from 'react';
import styles from './BusinessBenefits.module.css';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        vsg: 'SOL',
        title: 'Integrated Energy & Technology Solutions',
        subtitle: 'One partner for power, data, and smart infrastructure.',
        description: 'Euronet delivers solutions across renewable energy, power utilities, data centers, IoT devices, and smart systems, helping businesses deploy connected, future-ready infrastructure without juggling multiple vendors.',
        image: '/products/Integrated-Energy.png'
    },
    {
        id: 2,
        vsg: 'ENG',
        title: 'Engineered for Scale, Reliability, and Performance',
        subtitle: 'Solutions designed to perform in real-world conditions',
        description: 'From critical power systems to intelligent energy solutions, Euronet focuses on durability, system compatibility, and consistent performance, backed by technical expertise that supports deployment at scale.',
        image: '/products/Engineered-for-scale.png'
    },
    {
        id: 3,
        vsg: 'GLB',
        title: 'Global Standards, Regional Execution',
        subtitle: 'International capability with on-ground market understanding.',
        description: 'Operating across the Middle East, Africa, and South Asia, Euronet combines global quality benchmarks with localized execution, ensuring solutions align with regional regulations, climates, and operational needs.',
        image: '/products/Global-standards.png'
    }
];

export default function BusinessBenefits() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

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
