'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { projects, categories } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">
                            Selected <span className="gradient-text">Creations.</span>
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed mb-10">
                            A curated selection of projects focusing on artificial
                            intelligence and high-performance web applications.
                        </p>

                        {/* Filter Controls */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${activeCategory === cat.id
                                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                        : 'bg-surface/50 text-text-secondary border-card-border hover:border-primary/30'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-secondary/5 blur-[150px] -z-10 rounded-full" />
        </section>
    );
}
