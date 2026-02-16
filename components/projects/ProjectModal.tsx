"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Layers, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    thumbnail: string;
    technologies: string[];
    repoUrl: string;
    demoUrl?: string;
    documentUrl?: string;
    documentPdfUrl?: string;
    screenshots?: string[];
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [showPdf, setShowPdf] = useState(false);

    useEffect(() => {
        setCurrentScreenshot(0);
        setShowPdf(false);
    }, [project?.id]);

    if (!project) return null;

    const hasScreenshots = project.screenshots && project.screenshots.length > 0;
    const hasPdf = !!project.documentPdfUrl;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            layoutId={`project-card-${project.id}`}
                            className="bg-[var(--color-surface)] border border-[var(--color-neon-blue)]/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl pointer-events-auto relative scrollbar-hide"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white z-10 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="h-64 sm:h-80 w-full bg-gray-900 relative">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-surface)]" />
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute bottom-6 left-6 sm:left-10">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] text-xs rounded-full border border-[var(--color-neon-blue)]/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <Layers size={20} className="text-[var(--color-neon-blue)]" /> Project Overview
                                    </h3>
                                    <p className="text-[var(--foreground)]/80 leading-relaxed whitespace-pre-line">
                                        {project.longDescription}
                                    </p>

                                    {/* Screenshots Gallery */}
                                    {hasScreenshots && (
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                                <Layers size={18} className="text-[var(--color-neon-purple)]" />
                                                Screenshots
                                            </h3>
                                            <div className="relative group">
                                                <div className="aspect-video bg-black/30 rounded-xl overflow-hidden border border-white/10">
                                                    <img
                                                        src={project.screenshots![currentScreenshot]}
                                                        alt={`Screenshot ${currentScreenshot + 1}`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                {project.screenshots!.length > 1 && (
                                                    <>
                                                        <button
                                                            onClick={() => setCurrentScreenshot((prev) => (prev === 0 ? project.screenshots!.length - 1 : prev - 1))}
                                                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <ChevronLeft size={20} />
                                                        </button>
                                                        <button
                                                            onClick={() => setCurrentScreenshot((prev) => (prev === project.screenshots!.length - 1 ? 0 : prev + 1))}
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <ChevronRight size={20} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                            {project.screenshots!.length > 1 && (
                                                <div className="flex justify-center gap-2 mt-3">
                                                    {project.screenshots!.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentScreenshot(idx)}
                                                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentScreenshot
                                                                ? "bg-[var(--color-neon-blue)] scale-125"
                                                                : "bg-white/20 hover:bg-white/40"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* PDF Document Viewer */}
                                    {hasPdf && (
                                        <div className="mt-6">
                                            <button
                                                onClick={() => setShowPdf(!showPdf)}
                                                className="flex items-center gap-2 text-lg font-semibold mb-3 hover:text-[var(--color-neon-blue)] transition-colors"
                                            >
                                                <FileText size={18} className="text-[var(--color-neon-blue)]" />
                                                Project Documentation
                                                <span className="text-xs font-normal text-white/40 ml-1">(click to {showPdf ? 'hide' : 'show'})</span>
                                            </button>
                                            {showPdf && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="rounded-xl overflow-hidden border border-white/10"
                                                >
                                                    <iframe
                                                        src={project.documentPdfUrl}
                                                        className="w-full h-[500px] bg-white rounded-xl"
                                                        title={`${project.title} Documentation`}
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold mb-4">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-[var(--foreground)]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-surface)] border border-[var(--color-foreground)]/20 hover:bg-white hover:text-black transition-all rounded-lg font-medium"
                                        >
                                            <Github size={20} /> View Source
                                        </a>
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-neon-blue)] text-black hover:bg-[var(--color-deep-blue)] hover:text-white transition-all rounded-lg font-medium"
                                            >
                                                <ExternalLink size={20} /> Live Demo
                                            </a>
                                        )}
                                        {project.documentUrl && (
                                            <a
                                                href={project.documentUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white hover:bg-white hover:text-black transition-all rounded-lg font-medium"
                                            >
                                                <Layers size={20} /> View Document
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
