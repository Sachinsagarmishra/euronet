'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ContactForm.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

const countriesWithCodes = [
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'China', code: '+86' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Nigeria', code: '+234' },
    { name: 'South Africa', code: '+27' },
    { name: 'India', code: '+91' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'Kenya', code: '+254' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Egypt', code: '+20' },
    { name: 'Australia', code: '+61' },
    { name: 'Canada', code: '+1' },
    { name: 'Brazil', code: '+55' },
    { name: 'Japan', code: '+81' },
    { name: 'South Korea', code: '+82' },
    { name: 'Singapore', code: '+65' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Russia', code: '+7' },
    { name: 'Italy', code: '+39' },
    { name: 'Spain', code: '+34' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Turkey', code: '+90' },
    { name: 'Thailand', code: '+66' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Philippines', code: '+63' },
    { name: 'Mexico', code: '+52' },
    { name: 'Argentina', code: '+54' },
    { name: 'Colombia', code: '+57' },
    { name: 'Chile', code: '+56' },
    { name: 'Peru', code: '+51' },
    { name: 'Morocco', code: '+212' },
    { name: 'Algeria', code: '+213' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Ghana', code: '+233' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Qatar', code: '+974' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Oman', code: '+968' },
    { name: 'Jordan', code: '+962' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Iraq', code: '+964' },
    { name: 'Iran', code: '+98' },
    { name: 'Afghanistan', code: '+93' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Nepal', code: '+977' },
    { name: 'Other', code: '+' },
];

const ContactForm = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });
    const [phoneCode, setPhoneCode] = useState('+971');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Parallax effect state
    const sectionRef = useRef<HTMLElement>(null);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much of the section is in view
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    setParallaxOffset(progress * 40); // Max 40px movement
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = e.target.value;
        setFormData(prev => ({ ...prev, country: selectedCountry }));

        // Find and set the phone code for selected country
        const countryData = countriesWithCodes.find(c => c.name === selectedCountry);
        if (countryData) {
            setPhoneCode(countryData.code);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');

        // Reset form after success
        setTimeout(() => {
            setFormData({ fullName: '', email: '', phone: '', country: '', message: '' });
            setSubmitStatus('idle');
        }, 3000);
    };

    return (
        <section className={styles.section} ref={sectionRef}>
            {/* Background Image with Minimal Parallax */}
            <div
                className={styles.bgImage}
                style={{ transform: `translateY(${parallaxOffset * -0.15}px)` }}
            ></div>

            {/* Animated Background Elements */}
            <div className={styles.bgElements}>
                <div className={styles.bgOverlay}></div>
                <div
                    className={styles.bgCircle1}
                    style={{ transform: `translate(${parallaxOffset * 0.5}px, ${parallaxOffset * 0.3}px)` }}
                ></div>
                <div
                    className={styles.bgCircle2}
                    style={{ transform: `translate(${-parallaxOffset * 0.4}px, ${-parallaxOffset * 0.2}px)` }}
                ></div>
                <div
                    className={styles.bgCircle3}
                    style={{ transform: `translate(${parallaxOffset * 0.3}px, ${-parallaxOffset * 0.4}px)` }}
                ></div>
                <div className={styles.bgGrid}></div>
            </div>

            <div className={styles.container}>
                {/* Left Side - Info */}
                <div
                    className={styles.infoSide}
                    style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
                >
                    <div className={styles.infoContent}>
                        <AnimateOnScroll animation="fadeUp" delay={0}>
                            <span className={styles.label}>
                                <span className={styles.labelDot}></span>
                                {language === 'ar' ? 'تواصل معنا' : 'GET IN TOUCH'}
                            </span>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeUp" delay={0.1}>
                            <h2 className={styles.title}>
                                {language === 'ar' ? 'اعمل مع يورونت' : 'Work With Euronet'}
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeUp" delay={0.2}>
                            <p className={styles.subtitle}>
                                {language === 'ar'
                                    ? 'مكاتب في دبي - الإمارات، الصين، السعودية، نيجيريا، جنوب أفريقيا'
                                    : 'Offices In Dubai - U.A.E, China, Saudi Arabia, Nigeria, South Africa'}
                            </p>
                        </AnimateOnScroll>

                        <div className={styles.contactInfo}>
                            <a href="mailto:Contact@smarteuronet.com" className={styles.emailLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Contact@smarteuronet.com
                            </a>
                        </div>

                        {/* Global Offices */}
                        <div className={styles.offices}>
                            <h4 className={styles.officesTitle}>
                                {language === 'ar' ? 'مكاتبنا العالمية' : 'Our Global Offices'}
                            </h4>
                            <div className={styles.officeFlags}>
                                <div className={styles.officeFlag} title="UAE - Dubai">
                                    <img src="https://flagcdn.com/w40/ae.png" alt="UAE" width="32" height="24" />
                                </div>
                                <div className={styles.officeFlag} title="China">
                                    <img src="https://flagcdn.com/w40/cn.png" alt="China" width="32" height="24" />
                                </div>
                                <div className={styles.officeFlag} title="Saudi Arabia">
                                    <img src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia" width="32" height="24" />
                                </div>
                                <div className={styles.officeFlag} title="Nigeria">
                                    <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria" width="32" height="24" />
                                </div>
                                <div className={styles.officeFlag} title="South Africa">
                                    <img src="https://flagcdn.com/w40/za.png" alt="South Africa" width="32" height="24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div
                    className={styles.formSide}
                    style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
                >
                    <div className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <h3 className={styles.formTitle}>
                                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
                            </h3>
                            <p className={styles.formSubtitle}>
                                {language === 'ar'
                                    ? 'سنعود إليك خلال 24 ساعة'
                                    : "We'll get back to you within 24 hours"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {/* Name & Email Row */}
                            <div className={styles.inputRow}>
                                {/* Full Name */}
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>
                                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className={styles.required}>*</span>
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                                            required
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>
                                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} <span className={styles.required}>*</span>
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                                            required
                                            className={styles.input}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Country & Phone Row */}
                            <div className={styles.inputRow}>
                                {/* Country */}
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>
                                        {language === 'ar' ? 'البلد' : 'Country'} <span className={styles.required}>*</span>
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleCountryChange}
                                            required
                                            className={styles.select}
                                        >
                                            <option value="">{language === 'ar' ? 'اختر بلدك' : 'Select your country'}</option>
                                            {countriesWithCodes.map((country) => (
                                                <option key={country.name} value={country.name}>{country.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>
                                        {language === 'ar' ? 'رقم الهاتف' : 'Phone'} <span className={styles.required}>*</span>
                                    </label>
                                    <div className={styles.phoneWrapper}>
                                        <div className={styles.phoneCodeDisplay}>
                                            <span className={styles.countryCode}>{phoneCode}</span>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder={language === 'ar' ? 'أدخل رقم الهاتف' : 'Enter phone number'}
                                            required
                                            className={styles.phoneInput}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    {language === 'ar' ? 'رسالتك' : 'Type Your Message Here'}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                                    rows={4}
                                    className={styles.textarea}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''} ${submitStatus === 'success' ? styles.success : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {language === 'ar' ? 'تم الإرسال!' : 'Sent Successfully!'}
                                    </>
                                ) : (
                                    <>
                                        {language === 'ar' ? 'تقديم' : 'Apply'}
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
