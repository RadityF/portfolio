"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { HeroBackground } from "@/components/hero/HeroBackground";

export const Contact = () => {
    return (
        <section id="contact" className="relative w-full py-40 px-4 overflow-hidden bg-[var(--color-background)]">
            <HeroBackground />
            {/* gradient fade top & bottom biar nyambung */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-transparent to-[var(--color-background)] pointer-events-none z-[1]" />

            <div className="relative z-[2] max-w-3xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-mono text-[var(--color-neon-blue)] tracking-widest uppercase mb-4"
                >
                    Get in touch
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                >
                    Let&apos;s build something{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">
                        together.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[var(--foreground)]/60 text-lg mb-10 max-w-xl mx-auto"
                >
                    Open for full-time roles, freelance projects, or just a good conversation about AI and math.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="mailto:raditya.fauzan05@gmail.com"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-neon-blue)] text-black font-semibold hover:bg-[var(--color-neon-blue)]/80 transition-all duration-300"
                    >
                        <Mail size={16} />
                        Send Email
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://github.com/RadityF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[var(--foreground)] hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/raditya-fauzan-0942b7309/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[var(--foreground)] hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                        <Linkedin size={16} />
                        LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
