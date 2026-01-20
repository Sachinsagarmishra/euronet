'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

const countries = [
    { code: '+971', name: 'UAE', flag: 'https://flagcdn.com/w40/ae.png' },
    { code: '+86', name: 'China', flag: 'https://flagcdn.com/w40/cn.png' },
    { code: '+966', name: 'Saudi Arabia', flag: 'https://flagcdn.com/w40/sa.png' },
    { code: '+234', name: 'Nigeria', flag: 'https://flagcdn.com/w40/ng.png' },
    { code: '+27', name: 'South Africa', flag: 'https://flagcdn.com/w40/za.png' },
    { code: '+91', name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    { code: '+1', name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
    { code: '+44', name: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
];

const countryList = [
    'United Arab Emirates',
    'China',
    'Saudi Arabia',
    'Nigeria',
    'South Africa',
    'India',
    'United States',
    'United Kingdom',
    'Germany',
    'France',
    'Kenya',
    'Tanzania',
    'Egypt',
    'Other',
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
    const [selectedCountryCode, setSelectedCountryCode] = useState(countries[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
        <section className={styles.section}>
            {/* Animated Background Elements */}
            <div className={styles.bgElements}>
                <div className={styles.bgCircle1}></div>
                <div className={styles.bgCircle2}></div>
                <div className={styles.bgCircle3}></div>
                <div className={styles.bgGrid}></div>
            </div>

            <div className={styles.container}>
                {/* Left Side - Info */}
                <div className={styles.infoSide}>
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
                <div className={styles.formSide}>
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

                            {/* Email & Phone Row */}
                            <div className={styles.inputRow}>
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

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>
                                        {language === 'ar' ? 'رقم الهاتف' : 'Phone'} <span className={styles.required}>*</span>
                                    </label>
                                    <div className={styles.phoneWrapper}>
                                        <div
                                            className={styles.countrySelector}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            <img src={selectedCountryCode.flag} alt={selectedCountryCode.name} className={styles.countryFlagImg} width="24" height="18" />
                                            <span className={styles.countryCode}>{selectedCountryCode.code}</span>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>

                                            {isDropdownOpen && (
                                                <div className={styles.countryDropdown}>
                                                    {countries.map((country) => (
                                                        <div
                                                            key={country.code}
                                                            className={styles.countryOption}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedCountryCode(country);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            <img src={country.flag} alt={country.name} width="24" height="18" />
                                                            <span>{country.name}</span>
                                                            <span className={styles.optionCode}>{country.code}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
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
                                        onChange={handleInputChange}
                                        required
                                        className={styles.select}
                                    >
                                        <option value="">{language === 'ar' ? 'اختر بلدك' : 'Select your country'}</option>
                                        {countryList.map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
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
