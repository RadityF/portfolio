"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItemProps {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: "work" | "education";
    index: number;
}

const TimelineItem = ({ year, title, subtitle, description, type, index }: TimelineItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
        >
            <div className="absolute left-[-9px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-surface)] border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-neon-blue)] animate-pulse" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="text-sm font-mono text-[var(--color-neon-blue)]">{year}</span>
                <h3 className="text-xl font-bold flex items-center gap-2">
                    {type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                    {title}
                </h3>
            </div>

            <p className="text-[var(--foreground)] font-medium mb-2">{subtitle}</p>
            <p className="text-[var(--foreground)]/60 text-sm leading-relaxed max-w-lg">
                {description}
            </p>
        </motion.div>
    );
};

export const Timeline = () => {
    const experiences = [
        {
            year: "Aug 2025 – Feb 2026",
            title: "Developer Intern",
            subtitle: "PT. Mitra Cakra Digital",
            description: "Developing high-performance backend systems using FastAPI and Celery-Redis. I specialize in large-scale data processing through automated web scraping and OCR integration, turning unstructured chaos into actionable database systems.",
            type: "work" as const,
        },
        {
            year: "Aug 2025 – Nov 2025",
            title: "Head of Data Science Competition",
            subtitle: "LOGIKA 2025 (Universitas Indonesia)",
            description: "Leading the architectural design of a national-scale competition. I am responsible for designing the competition structure for over 100 participants.",
            type: "work" as const,
        },
        {
            year: "2025 – 2026",
            title: "Deputy of Evaluation and Management",
            subtitle: "HMDM Universitas Indonesia",
            description: "Leading internal evaluations and organizational assessments. I initiated and supervised a new evaluation framework to assess the performance of 13 departments and over 30 work programs.",
            type: "work" as const,
        },
        {
            year: "Oct 2024 – Feb 2025",
            title: "Full Stack Data Science",
            subtitle: "Sanber Campus x ITB",
            description: "Intensive program focusing on the end-to-end data science lifecycle. Specialized in Machine Learning, NLP, and Time Series Analysis to build predictive and analytical models.",
            type: "education" as const,
        },
        {
            year: "2023 – Present",
            title: "Bachelor of Mathematics",
            subtitle: "Universitas Indonesia",
            description: "Focusing on the mathematical foundations of AI, including Linear Algebra, Algorithms, and Data Structures. Currently in the third year, leveraging mathematical logic to build intelligent systems.",
            type: "education" as const,
        },
    ];

    return (
        <div className="py-10">
            {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} index={index} />
            ))}
        </div>
    );
};
