'use client';

import { useState } from 'react';
import styles from './EmailSubscription.module.css';

export default function EmailSubscription() {
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribed:', { email, userType });
        setEmail('');
        setUserType('');
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Email Subscription</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="">I am a...</option>
                            <option value="installer">installer</option>
                            <option value="distributors">Distributors</option>
                            <option value="homeowners">Homeowners</option>
                            <option value="business-owners">Business owners</option>
                            <option value="power-plant-owner">Power plant owner</option>
                            <option value="media">media</option>
                        </select>
                    </div>

                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Please enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit" className={styles.button}>
                        subscription
                    </button>
                </form>
            </div>
        </section>
    );
}
