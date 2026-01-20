'use client';

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showMinimized, setShowMinimized] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookieConsent = localStorage.getItem('euronet_cookie_consent');
        if (cookieConsent === 'accepted') {
            setShowMinimized(true);
            setShowBanner(false);
        } else {
            setShowBanner(true);
            setShowMinimized(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('euronet_cookie_consent', 'accepted');
        setShowBanner(false);
        setShowMinimized(true);
    };

    const handleDecline = () => {
        localStorage.setItem('euronet_cookie_consent', 'declined');
        setShowBanner(false);
        setShowMinimized(true);
    };

    const handleOpenSettings = () => {
        setShowBanner(true);
        setShowMinimized(false);
    };

    return (
        <>
            {/* Cookie Consent Banner */}
            {showBanner && (
                <div className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="#2F3091" />
                                <circle cx="8" cy="10" r="1.5" fill="white" />
                                <circle cx="14" cy="8" r="1" fill="white" />
                                <circle cx="16" cy="14" r="1.5" fill="white" />
                                <circle cx="10" cy="15" r="1" fill="white" />
                                <circle cx="12" cy="12" r="1" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.textContent}>
                            <h3 className={styles.title}>We use cookies</h3>
                            <p className={styles.description}>
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                            </p>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.declineBtn} onClick={handleDecline}>
                                Decline
                            </button>
                            <button className={styles.acceptBtn} onClick={handleAccept}>
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Minimized Cookie Icon */}
            {showMinimized && !showBanner && (
                <button
                    className={styles.minimizedIcon}
                    onClick={handleOpenSettings}
                    aria-label="Cookie settings"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#1a1a2e" />
                        <circle cx="8" cy="10" r="1.5" fill="white" />
                        <circle cx="14" cy="8" r="1" fill="white" />
                        <circle cx="16" cy="14" r="1.5" fill="white" />
                        <circle cx="10" cy="15" r="1" fill="white" />
                        <circle cx="12" cy="12" r="1" fill="white" />
                        <path d="M19 5L21 3M21 3L19 1M21 3H17" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default CookieConsent;
