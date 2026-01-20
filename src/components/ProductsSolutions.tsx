'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductsSolutions.module.css';
import { useLanguage } from '@/context/LanguageContext';
import AnimateOnScroll from './AnimateOnScroll';

interface Product {
    id: number;
    name: string;
    nameAr: string;
    model: string;
    image: string;
}

interface TabData {
    id: string;
    label: string;
    labelAr: string;
    bannerImage: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    products: Product[];
}

// Fixed 4 products for all tabs using user's images
const defaultProducts: Product[] = [
    { id: 1, name: 'Smart Energy Controller', nameAr: 'وحدة التحكم الذكية بالطاقة', model: 'SUN2000-5/6/8/10/12K-MAP0', image: '/products/Rectangle 26154.png' },
    { id: 2, name: 'Smart Energy Controller', nameAr: 'وحدة التحكم الذكية بالطاقة', model: 'SUN2000-5/6/8/10/12K-MAP0', image: '/products/Component 10.png' },
    { id: 3, name: 'Smart Energy Controller', nameAr: 'وحدة التحكم الذكية بالطاقة', model: 'SUN2000-5/6/8/10/12K-MAP0', image: '/products/Component 11.png' },
    { id: 4, name: 'Smart Energy Controller', nameAr: 'وحدة التحكم الذكية بالطاقة', model: 'SUN2000-5/6/8/10/12K-MAP0', image: '/products/Component 12.png' },
];

// Additional products for carousel on desktop (only first 4 visible initially)
const extendedProducts: Product[] = [
    ...defaultProducts,
    { id: 5, name: 'Hybrid Inverter', nameAr: 'محول هجين', model: 'SUN2000-3/4/5/6KTL-L1', image: '/products/Rectangle 26154.png' },
    { id: 6, name: 'Battery Storage', nameAr: 'تخزين البطارية', model: 'LUNA2000-5/10/15-S0', image: '/products/Component 10.png' },
];

const tabsData: TabData[] = [
    {
        id: 'residential',
        label: 'Residential Solution',
        labelAr: 'الحلول السكنية',
        bannerImage: '/products/residential-banner.jpg',
        title: 'Residential Solution',
        titleAr: 'الحلول السكنية',
        description: 'Residential solar systems deliver clean, cost-efficient energy with battery storage, smart monitoring, long-term savings, and energy independence.',
        descriptionAr: 'توفر أنظمة الطاقة الشمسية السكنية طاقة نظيفة وفعالة من حيث التكلفة مع تخزين البطارية والمراقبة الذكية والتوفير طويل الأمد واستقلالية الطاقة.',
        products: extendedProducts,
    },
    {
        id: 'ci',
        label: 'C&I Solution',
        labelAr: 'الحلول التجارية والصناعية',
        bannerImage: '/products/ci-banner.jpg',
        title: 'Commercial & Industrial Solution',
        titleAr: 'الحلول التجارية والصناعية',
        description: 'Power your business with reliable, scalable solar solutions. Reduce operational costs and achieve sustainability goals with our C&I systems.',
        descriptionAr: 'قم بتشغيل عملك بحلول الطاقة الشمسية الموثوقة والقابلة للتوسع. قلل تكاليف التشغيل وحقق أهداف الاستدامة مع أنظمتنا التجارية والصناعية.',
        products: extendedProducts,
    },
    {
        id: 'agriculture',
        label: 'Agriculture Solution',
        labelAr: 'الحلول الزراعية',
        bannerImage: '/products/agriculture-banner.jpg',
        title: 'Agriculture Solution',
        titleAr: 'الحلول الزراعية',
        description: 'Optimize your farm operations with solar-powered irrigation, lighting, and equipment. Sustainable farming starts with clean energy.',
        descriptionAr: 'حسّن عمليات مزرعتك مع الري والإضاءة والمعدات التي تعمل بالطاقة الشمسية. الزراعة المستدامة تبدأ بالطاقة النظيفة.',
        products: extendedProducts,
    },
    {
        id: 'solar-light',
        label: 'Solar Light',
        labelAr: 'الإضاءة الشمسية',
        bannerImage: '/products/solar-light-banner.jpg',
        title: 'Solar Lighting Solutions',
        titleAr: 'حلول الإضاءة الشمسية',
        description: 'Illuminate your spaces with eco-friendly solar lighting. From street lights to garden lamps, we have complete lighting solutions.',
        descriptionAr: 'أضئ مساحاتك بإضاءة شمسية صديقة للبيئة. من إضاءة الشوارع إلى مصابيح الحدائق، لدينا حلول إضاءة كاملة.',
        products: extendedProducts,
    },
];

const ProductsSolutions = () => {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('residential');
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

    // On mobile, show only 4 products (no carousel). On desktop, show all products with carousel.
    const products = isMobile ? defaultProducts : activeTabData.products;
    const visibleProducts = 4; // Always show 4 at a time

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Reset carousel when tab changes
        setCurrentIndex(0);
    }, [activeTab]);

    const maxIndex = Math.max(0, products.length - visibleProducts);

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Title */}
                <AnimateOnScroll animation="fadeUp" delay={0}>
                    <h2 className={styles.sectionTitle}>
                        {language === 'ar' ? 'المنتجات والحلول' : 'Products & Solutions'}
                    </h2>
                </AnimateOnScroll>

                {/* Tabs */}
                <AnimateOnScroll animation="fadeUp" delay={0.1}>
                    <div className={styles.tabs}>
                        {tabsData.map(tab => (
                            <button
                                key={tab.id}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                {language === 'ar' ? tab.labelAr : tab.label}
                            </button>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Banner */}
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={activeTabData.bannerImage}
                            alt={activeTabData.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            onError={(e) => {
                                // Fallback to a gradient if image doesn't exist
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                        <div className={styles.bannerOverlay}></div>
                    </div>
                    <div className={styles.bannerContent}>
                        <h3 className={styles.bannerTitle}>
                            {language === 'ar' ? activeTabData.titleAr : activeTabData.title}
                        </h3>
                        <p className={styles.bannerDescription}>
                            {language === 'ar' ? activeTabData.descriptionAr : activeTabData.description}
                        </p>
                        <button className={styles.learnMoreBtn}>
                            {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                        </button>
                    </div>
                </div>

                {/* Products - Grid on Mobile, Carousel on Desktop */}
                <div className={`${styles.carouselWrapper} ${isMobile ? styles.mobileGrid : ''}`}>
                    {/* Arrows only on desktop */}
                    {!isMobile && (
                        <button
                            className={`${styles.carouselArrow} ${styles.prevArrow}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous products"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                    )}

                    <div className={styles.carouselContainer} ref={carouselRef}>
                        <div
                            className={`${styles.carouselTrack} ${isMobile ? styles.mobileTrack : ''}`}
                            style={!isMobile ? {
                                transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
                            } : undefined}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={styles.productCard}
                                    style={!isMobile ? { flex: `0 0 ${100 / visibleProducts}%` } : undefined}
                                >
                                    <div className={styles.productImageWrapper}>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={200}
                                            height={280}
                                            className={styles.productImage}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/products/placeholder.png';
                                            }}
                                        />
                                    </div>
                                    <h4 className={styles.productName}>
                                        {language === 'ar' ? product.nameAr : product.name}
                                    </h4>
                                    <p className={styles.productModel}>Model: {product.model}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows only on desktop */}
                    {!isMobile && (
                        <button
                            className={`${styles.carouselArrow} ${styles.nextArrow}`}
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            aria-label="Next products"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* View All Button */}
                <div className={styles.viewAllWrapper}>
                    <button className={styles.viewAllBtn}>
                        {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSolutions;
