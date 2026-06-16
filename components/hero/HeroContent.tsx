"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Download, ChevronDown } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: Github, href: "https://github.com/RadityF", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raditya-fauzan-0942b7309/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:raditya.fauzan05@gmail.com", label: "Email" },
];

export const HeroContent = () => {
    const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-5 p-2 rounded-full border border-[var(--color-neon-blue)]/30 bg-[var(--color-surface)]/50 backdrop-blur-sm"
            >
                <span className="text-[var(--color-neon-blue)] text-sm font-mono flex items-center gap-2 px-3">
                    <Terminal size={14} />Raditya_Fauzan
                </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            >
                Engineering <span className="gradient-text-animated">Intelligence</span>
            </motion.h1>

            {/* Professional Title */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-sm font-mono text-[var(--foreground)]/40 mb-6 tracking-widest uppercase"
            >
                AI · ML Engineer &nbsp;·&nbsp; Data Scientist &nbsp;·&nbsp; Software Engineer &nbsp;·&nbsp; Mathematics @ UI
            </motion.p>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-lg md:text-xl text-[var(--foreground)]/60 max-w-2xl mb-10"
            >
                Unveiling hidden patterns in chaos. Building intelligent systems backed by solid mathematical intuition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3"
            >
                <a
                    href="#projects"
                    onClick={handleScrollTo("projects")}
                    className="group relative px-6 py-3 rounded-full bg-[var(--color-neon-blue)]/10 border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] font-medium hover:bg-[var(--color-neon-blue)] hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                    View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                    href="/raditya_fauzan_cv.pdf"
                    download
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/20 hover:bg-white hover:text-black text-[var(--foreground)] transition-all duration-300 flex items-center gap-2"
                >
                    <Download size={16} /> Download CV
                </a>
                <a
                    href="mailto:raditya.fauzan05@gmail.com"
                    className="px-6 py-3 rounded-full border border-gray-800 hover:border-gray-600 text-[var(--foreground)] transition-colors"
                >
                    Contact Me
                </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-4 mt-8"
            >
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        aria-label={label}
                        className="p-2 rounded-full border border-white/10 text-[var(--foreground)]/40 hover:border-[var(--color-neon-blue)]/60 hover:text-[var(--color-neon-blue)] transition-all"
                    >
                        <Icon size={18} />
                    </a>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="text-[var(--foreground)]/25"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </div>
    );
};
