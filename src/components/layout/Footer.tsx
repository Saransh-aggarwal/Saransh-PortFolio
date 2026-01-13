'use client';

import { Github, Linkedin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-card-border relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center gap-8 mb-12">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <span className="text-2xl font-bold tracking-tighter">
                                Saransh Aggarwal
                            </span>
                        </div>
                        <p className="text-text-secondary text-lg max-w-md">
                            Building intelligent experiences with purpose.
                            Let's architect the future together.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/Saransh-aggarwal"
                            target="_blank"
                            className="p-3 glass-panel hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saransh-aggarwal-a0a418275/"
                            target="_blank"
                            className="p-3 glass-panel hover:text-primary transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="p-3 glass-panel hover:text-primary transition-colors group"
                        >
                            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
                    <p>© {new Date().getFullYear()} Saransh Aggarwal. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Designed & Built with <Heart size={14} className="text-accent fill-accent" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
