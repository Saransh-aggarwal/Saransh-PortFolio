'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass-panel overflow-hidden flex flex-col h-full hover:border-primary/50 cursor-pointer"
        >
            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" aria-label={`View ${project.title}`} />

            {/* Image Visual */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-secondary/10">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                    {!imageError ? (
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl font-bold text-primary/5 select-none tracking-tighter">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                </div>

                {/* Links Over Image */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full glass-panel opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:text-primary bg-bg-primary/50 backdrop-blur-md"
                    >
                        <Github size={18} />
                    </a>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-8 md:p-9 gap-6 pointer-events-none">
                {/* Metadata */}
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary shrink-0">
                        {project.categoryLabel}
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                </div>

                {/* Title & Description Group */}
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-transform" />
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed line-clamp-3">
                        {project.shortDescription}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-semibold text-text-secondary bg-surface/50 rounded-md border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Button - Now a visual element since whole card is a link */}
                <div className="mt-auto pt-4">
                    <div className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-surface group-hover:bg-primary/10 border border-card-border group-hover:border-primary/30 text-text-primary group-hover:text-primary font-bold transition-all duration-300">
                        View Case Study
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
