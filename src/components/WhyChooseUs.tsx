import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

const features = [
    {
        icon: '/whychooseus/Authentic-Products.png',
        title: 'Authentic Products',
        description: 'Every product verified with QR authentication system. Combat counterfeits, protect your reputation.',
    },
    {
        icon: '/whychooseus/Global-Logistics.png',
        title: 'Global Logistics',
        description: 'Fast shipping to 40+ markets with regional warehouses and local support teams.',
    },
    {
        icon: '/whychooseus/Competitive-Pricing.png',
        title: 'Competitive Pricing',
        description: 'Volume-based pricing tiers designed to protect your margins and grow your business.',
    },
    {
        icon: '/whychooseus/Technical-Support.png',
        title: 'Technical Support',
        description: '24/7 expert assistance in 5 languages. Pre-sales guidance and post-sales troubleshooting.',
    },
    {
        icon: '/whychooseus/Self-Service-Portal.png',
        title: 'Self-Service Portal',
        description: 'Quote, order, and track online without phone calls. Your business runs on your schedule.',
    },
    {
        icon: '/whychooseus/Warranty-Protection.png',
        title: 'Warranty Protection',
        description: 'Comprehensive manufacturer warranty with streamlined digital claims process.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className={styles.whyChooseUs} id="why-choose-us">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Why Distributors Choose Euronet</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={90}
                                    height={90}
                                    className={styles.icon}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
