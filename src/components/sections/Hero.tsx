'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Text splitting for the title
    const titleWords = "Engineering".split("");
    const titleSecondary = "Experiences".split("");

    const letterAnimation: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const }
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-52"
        >
            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-10 text-xs md:text-sm font-bold border-primary/20 tracking-wide uppercase"
                    >
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-text-secondary">Building the future of AI & Web</span>
                    </motion.div>

                    {/* Main Title - Split Text Animation */}
                    <div className="mb-10 overflow-hidden">
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] flex flex-wrap justify-center"
                        >
                            <div className="flex">
                                {titleWords.map((letter, i) => (
                                    <motion.span key={i} variants={letterAnimation}>
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="w-full h-0" /> {/* LineBreak */}
                            <div className="flex gradient-text">
                                {titleSecondary.map((letter, i) => (
                                    <motion.span key={i} variants={letterAnimation}>
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-2xl text-text-secondary mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Hi, I'm <span className="text-text-primary font-bold">Saransh Aggarwal</span>.
                        I architect intelligent applications using AI/ML and modern full-stack technologies.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full"
                    >
                        <button
                            onClick={scrollToContact}
                            className="btn-premium group w-full sm:w-auto"
                        >
                            Hire Me
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a
                            href="/Saransh_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="btn-secondary group w-full sm:w-auto"
                        >
                            Download CV
                        </a>

                        <div className="flex items-center gap-3 ml-0 sm:ml-4 mt-4 sm:mt-0">
                            <a
                                href="https://github.com/Saransh-aggarwal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 glass-panel hover:text-primary transition-all hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/saransh-aggarwal-a0a418275/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 glass-panel hover:text-primary transition-all hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
