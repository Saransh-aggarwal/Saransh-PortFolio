'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Brain, Code, Database, Globe, Layers, Terminal, Sparkles } from 'lucide-react';

const skillGroups = [
    {
        title: 'AI & Machine Learning',
        icon: Brain,
        color: 'text-primary',
        skills: ['LangChain/LangGraph', 'PyTorch & TensorFlow', 'RAG Architectures', 'LLM Fine-tuning', 'Vector Databases'],
    },
    {
        title: 'Backend Engineering',
        icon: Database,
        color: 'text-secondary',
        skills: ['Python / Django', 'PostgreSQL & Redis', 'REST & GraphQL', 'Scalable APIs', 'Real-time Systems'],
    },
    {
        title: 'Frontend Development',
        icon: Globe,
        color: 'text-accent',
        skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Web Performance'],
    },
    {
        title: 'Cloud & Infrastructure',
        icon: Layers,
        color: 'text-primary-light',
        skills: ['AWS (ECS, S3, IAM)', 'Docker & Kubernetes', 'CI/CD Pipelines', 'GitHub Actions', 'Serverless'],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="flex flex-col gap-24"
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
                            Technical <span className="gradient-text">Arsenal</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-text-secondary leading-relaxed">
                            A comprehensive stack designed for building robust,
                            intelligent, and scalable software solutions.
                        </motion.p>
                    </div>

                    {/* Skill Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillGroups.map((group, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="glass-panel p-8 md:p-10 group hover:border-primary/50 transition-all h-full flex flex-col items-start gap-8"
                            >
                                <div className={`p-4 rounded-2xl bg-surface/80 w-fit group-hover:scale-110 transition-transform ${group.color} ring-1 ring-inset ring-black/5 dark:ring-white/5`}>
                                    <group.icon size={32} />
                                </div>
                                <div className="space-y-6 flex-1 w-full">
                                    <h3 className="text-xl font-bold text-text-primary">{group.title}</h3>
                                    <ul className="space-y-4">
                                        {group.skills.map((skill, sIdx) => (
                                            <li key={sIdx} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Commandment/Quote */}
                    <motion.div
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="p-8 md:p-12 glass-panel text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Sparkles className="w-6 h-6 text-primary mx-auto mb-6 opacity-50" />
                            <p className="text-xl md:text-2xl font-display font-medium text-text-primary italic leading-relaxed relative z-10">
                                "The best code is not just functional; it's an elegant solution to a complex problem."
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
