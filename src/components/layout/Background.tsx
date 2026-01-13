'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import GridCanvas from './GridCanvas';

export default function Background() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <div className={`fixed inset-0 -z-20 overflow-hidden pointer-events-none transition-colors duration-700 ${isDark
            ? 'bg-gradient-to-b from-[#020617] via-[#0b0f21] to-[#000000]'
            : 'bg-bg-primary'
            }`}>
            <GridCanvas />
            {/* Animated Grid Pattern */}
            <div className="grid-pattern opacity-[0.10]" />

            {/* Floating Glass Elements */}
            <div className="absolute inset-0 z-[-5]">
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 10, 0],
                        x: [-10, 10, -10],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-[15%] left-[10%] w-64 h-64 border rounded-3xl backdrop-blur-3xl rotate-12 ${isDark ? 'bg-white/5 border-white/10' : 'bg-primary/5 border-primary/10 shadow-xl shadow-primary/5'}`}
                />
                <motion.div
                    animate={{
                        y: [20, -20, 20],
                        rotate: [0, -10, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-[20%] right-[15%] w-96 h-96 border rounded-[4rem] backdrop-blur-2xl -rotate-12 ${isDark ? 'bg-primary/5 border-white/5' : 'bg-secondary/5 border-secondary/10 shadow-xl shadow-secondary/5'}`}
                />
                {!isDark && (
                    <motion.div
                        animate={{
                            x: [-30, 30, -30],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-[20%] right-[10%] w-72 h-72 bg-accent/5 border border-accent/10 rounded-full backdrop-blur-3xl"
                    />
                )}
            </div>

            {/* Celestial Effects - Dark Mode Only */}
            {isDark && (
                <div className="absolute inset-0">
                    <div className="stars" />
                </div>
            )}

            {/* Dynamic Blobs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={isDark ? 'opacity-40' : 'opacity-60'}
            >
                <div className="blur-blob blob-1" />
                <div className="blur-blob blob-2" />
                <div className="blur-blob blob-3" />

                {/* Rotating rings */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border rounded-full ${isDark ? 'border-primary/10' : 'border-primary/20'}`}
                />
                {!isDark && (
                    <motion.div
                        animate={{
                            rotate: [360, 0],
                        }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[600px] h-[600px] border border-secondary/10 rounded-full"
                    />
                )}
            </motion.div>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/30" />
        </div>
    );
}
