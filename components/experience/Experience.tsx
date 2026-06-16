"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/about/Timeline";

export const Experience = () => {
    return (
        <section id="experience" className="relative w-full py-24 px-4 md:px-10 bg-[var(--color-background)] overflow-hidden">
            {/* Subtle accent blob */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[500px] h-[400px] bg-[var(--color-deep-blue)]/4 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], y: [0, 20, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[var(--color-neon-purple)]/3 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
                {/* Left: heading */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:sticky md:top-24"
                >
                    <h2 className="text-4xl font-bold flex items-center gap-3 mb-4">
                        <span className="w-2 h-8 bg-[var(--color-deep-blue)] rounded-full" />
                        Experience
                    </h2>
                    <p className="text-[var(--foreground)]/40 text-sm font-mono leading-relaxed">
                        Work, organizations,<br />and education.
                    </p>
                </motion.div>

                {/* Right: timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                >
                    <Timeline />
                </motion.div>
            </div>
        </section>
    );
};
