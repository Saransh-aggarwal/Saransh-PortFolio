'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Github, Play, ExternalLink, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/lib/projects';

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
        return match ? match[1] : null;
    };

    const videoId = project.demoVideo ? getYouTubeId(project.demoVideo) : null;

    return (
        <div className="min-h-screen pt-40 pb-20 relative">
            {/* Background Accents */}
            <div className="blur-blob blob-1 opacity-10" />
            <div className="blur-blob blob-2 opacity-10" />

            <div className="container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    {/* Navigation */}
                    <motion.div variants={fadeInUp} className="mb-12">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary font-bold uppercase tracking-widest text-xs group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div variants={fadeInUp} className="mb-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {project.categoryLabel}
                            </span>
                            <div className="h-px w-12 bg-primary/20" />
                            <span className="text-sm text-text-secondary font-mono">{project.date}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                            {project.shortDescription}
                        </p>
                    </motion.div>

                    {/* Video Embed */}
                    {videoId && (
                        <motion.div variants={fadeInUp} className="mb-20">
                            <div className="relative aspect-video rounded-[32px] overflow-hidden glass-panel p-2">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={`${project.title} Demo`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-[24px] overflow-hidden"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        {/* Sidebar Info */}
                        <motion.div variants={fadeInUp} className="md:col-span-1 space-y-10">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-4 flex items-center gap-2">
                                    <Sparkles size={14} className="text-primary" />
                                    The Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-surface/50 border border-card-border rounded-lg text-sm font-mono text-text-secondary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <a href={project.githubUrl} target="_blank" className="btn-premium py-4">
                                    <Github size={20} /> Repository
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" className="p-4 glass-panel text-center font-bold hover:text-primary">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        {/* Main Description */}
                        <motion.div variants={fadeInUp} className="md:col-span-2">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-6">Overview</h3>
                            <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-6 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Nav */}
                    <motion.div variants={fadeInUp} className="pt-20 border-t border-card-border text-center">
                        <Link href="/#projects" className="text-text-secondary hover:text-primary font-bold uppercase tracking-[0.3em] text-xs transition-colors">
                            Next Project coming soon
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
