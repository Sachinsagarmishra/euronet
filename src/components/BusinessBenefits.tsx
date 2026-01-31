'use client';

import styles from './BusinessBenefits.module.css';
import Image from 'next/image';

export default function BusinessBenefits() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Large VSG Text */}
                <div className={styles.vsgText}>
                    <span>VSG</span>
                </div>

                {/* Divider Line */}
                <div className={styles.divider}></div>

                {/* Content */}
                <div className={styles.content}>
                    <h2 className={styles.title}>Improving Business Benefits</h2>
                    <p className={styles.description}>
                        Deye full series string inverter supports VSG application. When grid failure,
                        the string inverter is able to work with diesel generator directly without any
                        additional EMS device. With this frequency droop feature, Deye string
                        inverter is capable of using in poor grid area.
                    </p>
                </div>

                {/* Product Image with Animated Circle */}
                <div className={styles.productWrapper}>
                    <div className={styles.animatedCircle}></div>
                    <div className={styles.productImage}>
                        <Image
                            src="/products/inverter.png"
                            alt="String Inverter"
                            width={160}
                            height={200}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
