'use client';

import { useState } from 'react';
import styles from './EmailSubscription.module.css';

export default function EmailSubscription() {
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
                <h3 className={styles.title}>Email Subscription</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.nameWrapper}>
                        <input
                            type="text"
                            className={styles.nameInput}
                            placeholder="Please enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
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
