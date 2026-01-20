'use client';

import { useState } from 'react';
import styles from './WhyChooseUs.module.css';

const industries = [
    {
        id: 'telecom-data-center',
        title: 'Telecom & Data Center',
        description: 'Telecom and data center solutions delivering reliable power, uptime, and energy efficiency',
        image: '/othersolutions/TELECOM.png',
    },
    {
        id: 'power-utility',
        title: 'Power Utility',
        description: 'Power utility solutions delivering reliable, scalable energy infrastructure for modern grids.',
        image: '/othersolutions/POWER%20UTILITY.png',
    },
    {
        id: 'iot-devices',
        title: 'IoT Devices',
        description: 'IoT device solutions enabling smart connectivity, real-time monitoring, and efficient energy management.',
        image: '/othersolutions/IOT%20DEVICES.png',
    },
    {
        id: 'oem',
        title: 'OEM',
        description: 'OEM solutions delivering customized, reliable solar and power components for diverse manufacturing needs.',
        image: '/othersolutions/OEM.png',
    },
    {
        id: 'security',
        title: 'Security',
        description: 'Security solutions delivering reliable power, surveillance support, and uninterrupted protection.',
        image: '/othersolutions/SECURITY.png',
    },
    {
        id: 'industry',
        title: 'Industry',
        description: 'Industrial solutions delivering high-capacity, reliable power to support continuous and efficient operations.',
        image: '/othersolutions/INDUSTRY.png',
    },
];

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className={styles.section} id="why-choose-us">
            {/* Section Heading */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Why Distributors Choose Us</h2>
            </div>

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
        </section>
    );
}
