"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: Github, href: "https://github.com/RadityF", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raditya-fauzan-0942b7309/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:raditya.fauzan05@gmail.com", label: "Email" },
];

export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[var(--color-surface)] py-10 px-4 md:px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm font-mono text-[var(--color-neon-blue)] mb-1">Raditya_Fauzan</p>
                    <p className="text-xs text-[var(--foreground)]/40">
                        © {new Date().getFullYear()} Raditya Fauzan
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto") ? undefined : "_blank"}
                            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                            aria-label={label}
                            className="p-2 rounded-full border border-white/10 text-[var(--foreground)]/50 hover:border-[var(--color-neon-blue)]/50 hover:text-[var(--color-neon-blue)] transition-all"
                        >
                            <Icon size={16} />
                        </a>
                    ))}

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Back to top"
                        className="p-2 rounded-full border border-white/10 text-[var(--foreground)]/50 hover:border-[var(--color-neon-blue)]/50 hover:text-[var(--color-neon-blue)] transition-all ml-2"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
