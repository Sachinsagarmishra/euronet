'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './GlobalPresence.module.css';

interface Location {
    id: string;
    name: string;
    country: string;
    flag: string;
    isHeadquarters?: boolean;
    address?: string;
    email: string;
    phone: string;
    image: string;
}

const locations: Location[] = [
    {
        id: 'dubai',
        name: 'DUBAI, UAE',
        country: 'Dubai',
        flag: '🇦🇪',
        isHeadquarters: true,
        address: 'Shop no 2 & 3, Al Shams Building, 21a Street, Deira Dubai - UAE',
        email: 'contact@smarteuronet.com',
        phone: '+971 55 552 7791',
        image: '/Global Presence/dubai.png'
    },
    {
        id: 'china',
        name: 'CHINA',
        country: 'China',
        flag: '🇨🇳',
        email: 'contact@smarteuronet.com',
        phone: '+971 55 552 7791',
        image: '/Global Presence/China.png'
    },
    {
        id: 'nigeria',
        name: 'NIGERIA',
        country: 'Nigeria',
        flag: '🇳🇬',
        address: 'Shop no 79, Opebi Road, Ikeja Lagos - Nigeria',
        email: 'contact@smarteuronet.com',
        phone: '+234 916 304 1000',
        image: '/Global Presence/Nigeria.png'
    },
    {
        id: 'south-africa',
        name: 'SOUTH AFRICA',
        country: 'South Africa',
        flag: '🇿🇦',
        address: 'Unit 18 Theta Business Park Ormonde, Johannesburg South Africa',
        email: 'contact@smarteuronet.com',
        phone: '+27 83 958 0585',
        image: '/Global Presence/South Africa.png'
    },
    {
        id: 'saudi-arabia',
        name: 'SAUDI ARABIA',
        country: 'K.S.A',
        flag: '🇸🇦',
        address: 'King Abdul Aziz Road, Al-Rajhi Building No.5, Riyadh - Saudi Arabia',
        email: 'contact@smarteuronet.com',
        phone: '+966 58 133 1759',
        image: '/Global Presence/Saudi Arabia.png'
    }
];

const GlobalPresence: React.FC = () => {
    const [activeLocation, setActiveLocation] = useState<string>('dubai');

    const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

    return (
        <section className={styles.globalPresence}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Global Presence</h2>

                {/* Tabs */}
                <div className={styles.tabsContainer}>
                    {locations.map((location) => (
                        <button
                            key={location.id}
                            className={`${styles.tab} ${activeLocation === location.id ? styles.activeTab : ''}`}
                            onClick={() => setActiveLocation(location.id)}
                        >
                            <span className={styles.flag}>{location.flag}</span>
                            <span className={styles.tabName}>{location.name}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className={styles.contentContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={currentLocation.image}
                            alt={`${currentLocation.country} office`}
                            width={320}
                            height={220}
                            className={styles.locationImage}
                        />
                    </div>

                    <div className={styles.detailsWrapper}>
                        <h3 className={styles.locationTitle}>
                            <span className={styles.countryHighlight}>{currentLocation.country},</span>
                            {' '}
                            {currentLocation.name !== currentLocation.country && (
                                <>
                                    {currentLocation.id === 'dubai' ? 'United Arab Emirates' : currentLocation.name}
                                </>
                            )}
                            {currentLocation.isHeadquarters && (
                                <span className={styles.headquarters}> (Headquarters)</span>
                            )}
                        </h3>

                        <div className={styles.contactDetails}>
                            {currentLocation.address && (
                                <div className={styles.contactItem}>
                                    <i className={`fa-solid fa-location-dot ${styles.contactIcon}`}></i>
                                    <div className={styles.contactText}>
                                        <span className={styles.contactLabel}>Add:</span>
                                        <span>{currentLocation.address}</span>
                                    </div>
                                </div>
                            )}

                            <div className={styles.contactItem}>
                                <i className={`fa-regular fa-envelope ${styles.contactIcon}`}></i>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>Email:</span>
                                    <a href={`mailto:${currentLocation.email}`} className={styles.contactLink}>
                                        {currentLocation.email}
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <i className={`fa-solid fa-phone ${styles.contactIcon}`}></i>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>Tel:</span>
                                    <a href={`tel:${currentLocation.phone.replace(/\s/g, '')}`} className={styles.contactLink}>
                                        {currentLocation.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <button className={styles.contactButton}>
                            Contact Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
