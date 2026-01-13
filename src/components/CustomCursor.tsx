'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [hoverType, setHoverType] = useState<'none' | 'link' | 'card' | 'action'>('none');
    const [isMobile, setIsMobile] = useState(false);
    const { theme } = useTheme();

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Fast spring for precise inner dot
    const dotSpring = { damping: 30, stiffness: 800 };
    const dotX = useSpring(mouseX, dotSpring);
    const dotY = useSpring(mouseY, dotSpring);

    // Slower, trailing spring for the outer ring/glow
    const glowSpring = { damping: 35, stiffness: 200 };
    const glowX = useSpring(mouseX, glowSpring);
    const glowY = useSpring(mouseY, glowSpring);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                document.body.style.cursor = 'auto';
            } else {
                document.body.style.cursor = 'none';
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const updateCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            const link = target?.closest('a');
            const button = target?.closest('button');
            const card = target?.closest('.glass-panel');
            const input = target?.closest('input, textarea');

            if (link || button || input) {
                setHoverType('link');
            } else if (card) {
                setHoverType('card');
            } else {
                setHoverType('none');
            }
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('resize', checkMobile);
            document.body.style.cursor = 'auto';
        };
    }, []);

    if (!mounted || isMobile) return null;

    const isDark = theme === 'dark';

    const getGlowStyles = () => {
        switch (hoverType) {
            case 'link':
                return {
                    scale: isDark ? 1.8 : 1.2,
                    backgroundColor: isDark ? 'rgba(124, 58, 237, 0.55)' : 'rgba(124, 58, 237, 0.25)',
                    width: isDark ? '180px' : '120px',
                    height: isDark ? '180px' : '120px',
                    filter: isDark ? 'blur(50px)' : 'blur(30px)',
                    opacity: 1,
                };
            case 'card':
                return {
                    scale: isDark ? 2.2 : 1.5,
                    backgroundColor: isDark ? 'rgba(14, 165, 233, 0.35)' : 'rgba(14, 165, 233, 0.15)',
                    width: isDark ? '220px' : '160px',
                    height: isDark ? '220px' : '160px',
                    filter: isDark ? 'blur(60px)' : 'blur(40px)',
                    opacity: 1,
                };
            default:
                return {
                    scale: 0.5,
                    backgroundColor: 'transparent',
                    width: '140px',
                    height: '140px',
                    filter: 'blur(50px)',
                    opacity: 0,
                };
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* 1. Enhanced Dynamic Background Glow */}
            <motion.div
                className="absolute top-0 left-0 rounded-full"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={getGlowStyles()}
                transition={{ type: 'spring', damping: 30, stiffness: 100 }}
            />

            {/* 2. Outer Adaptive Ring with Lens Effect */}
            <motion.div
                className="absolute top-0 left-0 border rounded-full overflow-hidden"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 44,
                    height: 44,
                }}
                animate={{
                    scale: hoverType !== 'none' ? 1.6 : 1,
                    borderColor: isDark
                        ? (hoverType === 'none' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.9)')
                        : (hoverType === 'none' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.7)'),
                    borderWidth: hoverType === 'none' ? '1px' : '2px',
                    backdropFilter: hoverType === 'link' ? 'blur(2px)' : 'blur(0px)',
                }}
            />

            {/* 3. Central Precision Dot */}
            <motion.div
                className="absolute top-0 left-0 rounded-full"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 6,
                    height: 6,
                }}
                animate={{
                    scale: hoverType !== 'none' ? 0.3 : 1,
                    backgroundColor: isDark ? '#FFFFFF' : '#000000',
                    boxShadow: hoverType !== 'none' ? `0 0 10px ${isDark ? '#fff' : '#000'}` : 'none'
                }}
            />

            {/* 4. Click Notification / Feedback */}
            <AnimatePresence>
                {hoverType === 'link' && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className={`absolute top-0 left-0 w-12 h-12 rounded-full border border-primary/30 ${isDark ? 'bg-primary/10' : 'bg-primary/5'}`}
                        style={{
                            x: dotX,
                            y: dotY,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
