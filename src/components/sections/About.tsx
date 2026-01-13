'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Code2, Brain, Cloud, Database, Cpu, Sparkles } from 'lucide-react';

const stats = [
    { label: 'Specialized In', value: 'AI & Full-Stack' },
    { label: 'Core Skills', value: 'LLMs • DevOps • Python' },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        About <span className="gradient-text">Me.</span>
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        I am an AI/ML Engineer and Full-Stack Developer dedicated to merging the
                        power of artificial intelligence with intuitive user experiences.
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid lg:grid-cols-2 gap-20 items-center"
                >
                    {/* Left side: Visual Bento */}
                    <motion.div variants={fadeInUp} className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass-panel p-8 flex flex-col items-start justify-center text-left space-y-4 col-span-2 md:col-span-1 h-full">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                    <Brain size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">AI Native</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">Building with LLMs and LangChain from day one.</p>
                                </div>
                            </div>
                            <div className="glass-panel p-8 flex flex-col items-start justify-center text-left space-y-4 mt-0 md:mt-8 h-full">
                                <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                                    <Code2 size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Full Stack</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">Crafting seamless end-to-end applications.</p>
                                </div>
                            </div>
                            <div className="glass-panel p-8 flex flex-col items-start justify-center text-left space-y-4 hidden md:flex h-full">
                                <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                                    <Cloud size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Cloud</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">Robust deployment and scalable infra.</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background glow */}
                        <div className="absolute -z-10 inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50" />
                    </motion.div>

                    {/* Right side: Content */}
                    <motion.div variants={fadeInUp} className="space-y-8">
                        <div>
                            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                                <Sparkles size={16} />
                                My Philosophy
                            </h3>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                Crafting the next <br />
                                <span className="gradient-text">digital frontier.</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-text-secondary leading-relaxed">
                                My approach is simple: Solve complex problems using state-of-the-art
                                technology while maintaining a relentless focus on performance and usability.
                            </p>
                            <p className="text-text-secondary">
                                I believe that AI shouldn't just be an "add-on" but a core part of
                                how we build faster, smarter, and more human-centric software.
                            </p>

                            <div className="flex flex-wrap gap-8 pt-4">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-3xl font-bold text-text-primary">{stat.value}</span>
                                        <span className="text-sm text-text-secondary uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
