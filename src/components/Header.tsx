'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    const handleDropdownToggle = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            // Add search logic here
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const handleLanguageChange = (lang: 'en' | 'ar') => {
        setLanguage(lang);
        setIsLangDropdownOpen(false);
    };

    const navItems = [
        { label: t('aboutUs'), href: '/about' },
        {
            label: t('solutions'),
            href: '/solutions',
            hasDropdown: true,
            dropdownItems: [
                { label: t('telecomDataCenter'), href: '/solutions/telecom-data-center' },
                { label: t('powerUtility'), href: '/solutions/power-utility' },
                { label: t('iotDevices'), href: '/solutions/iot-devices' },
                { label: t('oem'), href: '/solutions/oem' },
                { label: t('security'), href: '/solutions/security' },
                { label: t('solarSolutions'), href: '/solutions/solar-solutions' },
            ]
        },
        { label: t('products'), href: '/products' },
        { label: t('resourcesDownloads'), href: '/download' },
        { label: t('partnerWithUs'), href: '/partner' },
    ];

    const languages = [
        { code: 'en' as const, label: 'English', short: 'EN' },
        { code: 'ar' as const, label: 'العربية', short: 'AR' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className={`${styles.topBar} ${isScrolled ? styles.hidden : ''}`}>
                <div className={styles.topBarContent}>
                    <Link href="/download" className={styles.topBarLink}>
                        {t('download')}
                    </Link>
                    <button
                        className={styles.topBarLink}
                        onClick={() => setIsSearchOpen(true)}
                        aria-label="Open search"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                    </button>
                    <div className={styles.langDropdownWrapper}>
                        <button
                            className={styles.topBarLink}
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span>{language.toUpperCase()}</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {isLangDropdownOpen && (
                            <div className={styles.langDropdown}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`${styles.langOption} ${language === lang.code ? styles.active : ''}`}
                                        onClick={() => handleLanguageChange(lang.code)}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Search Overlay */}
            <div className={`${styles.searchOverlay} ${isSearchOpen ? styles.open : ''}`}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchWrapper}>
                        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                            <svg className={styles.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                                ref={searchInputRef}
                                type="text"
                                className={styles.searchInput}
                                placeholder={t('searchPlaceholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className={styles.searchSubmit}>
                                {t('search')}
                            </button>
                        </form>

                        <div className={styles.searchRecommendations}>
                            <h4 className={styles.recommendationTitle}>{language === 'ar' ? 'اقتراحات الحلول' : 'Popular Solutions'}</h4>
                            <ul className={styles.recommendationList}>
                                {[
                                    { label: t('telecomDataCenter'), icon: 'fa-server' },
                                    { label: t('powerUtility'), icon: 'fa-plug-circle-bolt' },
                                    { label: t('iotDevices'), icon: 'fa-microchip' },
                                    { label: t('solarSolutions'), icon: 'fa-sun' }
                                ].map((item, idx) => (
                                    <li key={idx} className={styles.recommendationItem}>
                                        <Link href={`/solutions/${item.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} onClick={() => setIsSearchOpen(false)}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span>{item.label}</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button
                        className={styles.searchClose}
                        onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                        }}
                        aria-label="Close search"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Header */}
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.headerContainer}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={isScrolled ? "/Logo-blue.svg" : "/Logo - White.svg"}
                            alt="Euronet"
                            width={180}
                            height={35}
                            priority
                            className={styles.logoImage}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {navItems.map((item) => (
                                <li
                                    key={item.label}
                                    className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ''}`}
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                                >
                                    <Link href={item.href} className={styles.navLink}>
                                        {item.label}
                                        {item.hasDropdown && (
                                            <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        )}
                                    </Link>
                                    {item.hasDropdown && item.dropdownItems && (
                                        <div className={`${styles.dropdown} ${activeDropdown === item.label ? styles.active : ''}`}>
                                            <ul className={styles.dropdownList}>
                                                {item.dropdownItems.map((subItem) => (
                                                    <li key={subItem.label}>
                                                        <Link href={subItem.href} className={styles.dropdownLink}>
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                const offset = 100; // Adjust offset if header is fixed
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        className={styles.ctaButton}
                    >
                        {t('contactUs')}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileNavList}>
                            {navItems.map((item) => (
                                <li key={item.label} className={styles.mobileNavItem}>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                className={styles.mobileNavLink}
                                                onClick={() => handleDropdownToggle(item.label)}
                                            >
                                                {item.label}
                                                <svg
                                                    className={`${styles.mobileDropdownIcon} ${activeDropdown === item.label ? styles.rotated : ''}`}
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                            <ul className={`${styles.mobileDropdown} ${activeDropdown === item.label ? styles.open : ''}`}>
                                                {item.dropdownItems?.map((subItem) => (
                                                    <li key={subItem.label}>
                                                        <Link
                                                            href={subItem.href}
                                                            className={styles.mobileDropdownLink}
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={styles.mobileNavLink}
                                            onClick={toggleMobileMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        className={styles.mobileCta}
                        onClick={() => {
                            toggleMobileMenu();
                            setTimeout(() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    const offset = 80;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                }
                            }, 300); // Wait for menu transition
                        }}
                    >
                        {t('contactUs')}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
