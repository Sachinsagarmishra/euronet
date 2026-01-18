'use client';

import Image from 'next/image';
import styles from './WhoWeAre.module.css';
import { useLanguage } from '@/context/LanguageContext';

const WhoWeAre = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t('whoWeAre')}</h2>
                    <h3 className={styles.subtitle}>
                        {t('whoWeAreSubtitle')}
                    </h3>
                    <p className={styles.description}>
                        {t('whoWeAreDescription')}
                    </p>
                    <a href="/about" className={styles.link}>
                        {t('knowMore')}
                    </a>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/who-we-are.png"
                        alt="Euronet Solar Products"
                        width={600}
                        height={400}
                        quality={90}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
