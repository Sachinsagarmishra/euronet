'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
}

export default function AnimateOnScroll({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    className = '',
}: AnimateOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const getInitialStyles = () => {
        switch (animation) {
            case 'fadeUp':
                return { opacity: 0, transform: 'translateY(30px)' };
            case 'fadeIn':
                return { opacity: 0 };
            case 'fadeLeft':
                return { opacity: 0, transform: 'translateX(-30px)' };
            case 'fadeRight':
                return { opacity: 0, transform: 'translateX(30px)' };
            case 'scaleUp':
                return { opacity: 0, transform: 'scale(0.95)' };
            default:
                return { opacity: 0 };
        }
    };

    const getAnimatedStyles = () => {
        return {
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1)',
        };
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...(isVisible ? getAnimatedStyles() : getInitialStyles()),
                transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}
