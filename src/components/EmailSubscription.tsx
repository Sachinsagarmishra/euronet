'use client';

import { useState } from 'react';
import styles from './EmailSubscription.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function EmailSubscription() {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribed:', { email, name });
        setEmail('');
        setName('');
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>{t('emailSubscription')}</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.nameWrapper}>
                        <input
                            type="text"
                            className={styles.nameInput}
                            placeholder={t('enterName')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <input
                        type="email"
                        className={styles.input}
                        placeholder={t('enterEmail')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit" className={styles.button}>
                        {t('subscribe')}
                    </button>
                </form>
            </div>
        </section>
    );
}
