"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "./ProjectModal";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
    index: number;
}

export const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            layoutId={`project-card-${project.id}`}
            className="group relative bg-[var(--color-surface)] rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:border-[var(--color-neon-blue)]/50 transition-colors"
            onClick={() => onClick(project)}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[var(--color-neon-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-[var(--color-neon-blue)] transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors"
                            title="View Source"
                        >
                            <Github size={16} />
                        </a>
                    </div>
                </div>





                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-[var(--color-neon-blue)]/5 text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)]/10">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-gray-500">+{project.technologies.length - 3}</span>
                    )}
                </div>

                <p className="text-[var(--foreground)]/70 text-sm line-clamp-3">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};
