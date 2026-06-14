"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, Users } from "lucide-react";

type ExperienceType = "work" | "org" | "education";

interface TimelineItemProps {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: ExperienceType;
    index: number;
}

const TYPE_CONFIG: Record<ExperienceType, { icon: React.ElementType; color: string }> = {
    work: { icon: Briefcase, color: "var(--color-neon-blue)" },
    org: { icon: Users, color: "var(--color-deep-blue)" },
    education: { icon: GraduationCap, color: "var(--color-neon-purple)" },
};

const TimelineItem = ({ year, title, subtitle, description, type, index }: TimelineItemProps) => {
    const [expanded, setExpanded] = useState(false);
    const { icon: Icon, color } = TYPE_CONFIG[type];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative pl-8 pb-6 border-l border-white/10 last:pb-0"
        >
            <div
                className="absolute left-[-9px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-surface)] border"
                style={{ borderColor: color }}
            >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
            </div>

            <button
                onClick={() => setExpanded((v) => !v)}
                className="w-full text-left"
                aria-expanded={expanded}
            >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <span className="text-xs font-mono" style={{ color }}>{year}</span>
                    <h3 className="text-sm font-bold flex items-center gap-2">
                        <Icon size={13} className="shrink-0" style={{ color }} />
                        {title}
                    </h3>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[var(--foreground)]/60 text-sm">{subtitle}</p>
                    <ChevronDown
                        size={14}
                        className={`text-[var(--foreground)]/30 shrink-0 ml-2 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-[var(--foreground)]/50 text-sm leading-relaxed mt-3 pr-4">
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

interface ExperienceGroup {
    label: string;
    accent: string;
    items: Omit<TimelineItemProps, "index">[];
}

const EXPERIENCE_GROUPS: ExperienceGroup[] = [
    {
        label: "Work Experience",
        accent: "var(--color-neon-blue)",
        items: [
            {
                year: "Feb 2026 – Apr 2026",
                title: "Developer",
                subtitle: "PT. Mitra Cakra Digital · Jakarta, Indonesia",
                description: "Developed a high-performance face recognition Attendance API, implementing efficient feature embedding extraction and vector-based matching for rapid, large-scale identity verification.\n\nEngineered a secure whistleblowing system using advanced prompt orchestration to automate multi-category report classification, integrating RAG architecture and robust PII masking to maintain confidentiality and streamline audit workflows.",
                type: "work",
            },
            {
                year: "Aug 2025 – Feb 2026",
                title: "Developer Intern",
                subtitle: "PT. Mitra Cakra Digital · Jakarta, Indonesia",
                description: "Developed high-performance backend systems using FastAPI and Celery-Redis. Specialized in large-scale data processing through automated web scraping and OCR integration, turning unstructured data into actionable database systems.",
                type: "work",
            },
        ],
    },
    {
        label: "Organizational Experience",
        accent: "var(--color-deep-blue)",
        items: [
            {
                year: "Aug – Nov 2025",
                title: "Head of Data Science Competition",
                subtitle: "LOGIKA 2025, Universitas Indonesia",
                description: "Led the architectural design of a national-scale data science competition for over 100 participants. Responsible for problem design, judging criteria, and end-to-end competition logistics.",
                type: "org",
            },
            {
                year: "2025 – 2026",
                title: "Deputy of Evaluation & Management",
                subtitle: "HMDM Universitas Indonesia",
                description: "Led internal evaluations and organizational assessments. Initiated and supervised a new evaluation framework covering 13 departments and over 30 work programs across the Mathematics Student Association.",
                type: "org",
            },
        ],
    },
    {
        label: "Education",
        accent: "var(--color-neon-purple)",
        items: [
            {
                year: "Oct 2024 – Feb 2025",
                title: "Full Stack Data Science",
                subtitle: "Sanber Campus × ITB",
                description: "Intensive bootcamp covering the end-to-end data science lifecycle: data wrangling, Machine Learning, NLP, Time Series Analysis, and model deployment. Culminated in multiple applied projects.",
                type: "education",
            },
            {
                year: "2023 – Present",
                title: "Bachelor of Mathematics",
                subtitle: "Universitas Indonesia",
                description: "Focusing on the mathematical foundations of AI including Linear Algebra, Algorithms, Probability, and Data Structures. Actively applying mathematical intuition to AI research and engineering projects.",
                type: "education",
            },
        ],
    },
];

export const Timeline = () => {
    return (
        <div className="space-y-8 py-2">
            {EXPERIENCE_GROUPS.map((group) => (
                <div key={group.label}>
                    <p
                        className="text-xs font-mono font-semibold uppercase tracking-widest mb-4 flex items-center gap-2"
                        style={{ color: group.accent }}
                    >
                        <span className="w-4 h-px inline-block" style={{ background: group.accent }} />
                        {group.label}
                    </p>
                    <div>
                        {group.items.map((item, i) => (
                            <TimelineItem key={i} {...item} index={i} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
