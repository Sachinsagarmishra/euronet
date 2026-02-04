'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <div className={styles.footerTop}>
                        {/* Brand Column */}
                        <div className={styles.brandColumn}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    src="/Logo - White.svg"
                                    alt="Euronet"
                                    width={180}
                                    height={45}
                                    className={styles.logo}
                                />
                            </div>
                            <p className={styles.tagline}>
                                Powering Africa's solar revolution with quality energy solutions from the Middle East to the continent.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className={styles.linksColumn}>
                            <h4 className={styles.columnTitle}>SOLUTIONS</h4>
                            <ul className={styles.linksList}>
                                <li><a href="/solutions/telecom-data-center">{t('telecomDataCenter')}</a></li>
                                <li><a href="/solutions/power-utility">{t('powerUtility')}</a></li>
                                <li><a href="/solutions/iot-devices">{t('iotDevices')}</a></li>
                                <li><a href="/solutions/oem">{t('oem')}</a></li>
                                <li><a href="/solutions/security">{t('security')}</a></li>
                                <li><a href="/solutions/solar-solutions">{t('solarSolutions')}</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className={styles.linksColumn}>
                            <h4 className={styles.columnTitle}>COMPANY</h4>
                            <ul className={styles.linksList}>
                                <li><a href="/about">{t('aboutUs')}</a></li>
                                <li><a href="/contact">{t('partnerWithUs')}</a></li>
                                <li><a href="/download">{t('resourcesDownloads')}</a></li>
                            </ul>
                        </div>

                        {/* Regions Column */}
                        <div className={styles.linksColumn}>
                            <h4 className={styles.columnTitle}>REGIONS</h4>
                            <ul className={styles.linksList}>
                                <li><a href="#">Middle East (HQ)</a></li>
                                <li><a href="#">West Africa</a></li>
                                <li><a href="#">East Africa</a></li>
                                <li><a href="#">Southern Africa</a></li>
                            </ul>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Footer Bottom */}
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © 2026 Euronet Electronics | All Rights Reserved to Euronet & its Affiliates
                    </p>
                    <p className={styles.email}>
                        E-mail : contact@smarteuronet.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
