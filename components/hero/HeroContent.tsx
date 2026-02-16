"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export const HeroContent = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-2 rounded-full border border-[var(--color-neon-blue)]/30 bg-[var(--color-surface)]/50 backdrop-blur-sm"
            >
                <span className="text-[var(--color-neon-blue)] text-sm font-mono flex items-center gap-2 px-3">
                    <Terminal size={14} />Raditya_Fauzan
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-deep-blue)]">Intelligence</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-[var(--foreground)]/60 max-w-2xl mb-10"
            >
                Unveiling hidden patterns in chaos. Building intelligent systems for the next generation of the web.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4"
            >
                <a
                    href="#projects"
                    onClick={handleScrollToProjects}
                    className="group relative px-6 py-3 rounded-full bg-[var(--color-neon-blue)]/10 border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] font-medium hover:bg-[var(--color-neon-blue)] hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                    View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:raditya.fauzan05@gmail.com" className="px-6 py-3 rounded-full border border-gray-800 hover:border-gray-600 text-[var(--foreground)] transition-colors">
                    Contact Me
                </a>
            </motion.div>
        </div>
    );
};
