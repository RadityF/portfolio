"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const ids = NAV_LINKS.map(l => l.href.replace("#", ""));
        const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection("#" + entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="flex items-center gap-2 text-[var(--color-neon-blue)] font-mono text-sm font-semibold hover:opacity-80 transition-opacity"
                    >
                        <Terminal size={16} />
                        Raditya_Fauzan
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm transition-colors relative ${
                                    activeSection === link.href
                                        ? "text-[var(--color-neon-blue)]"
                                        : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                                }`}
                            >
                                {link.label}
                                {activeSection === link.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-neon-blue)]/60 rounded-full" />
                                )}
                            </a>
                        ))}
                        <a
                            href="/raditya_fauzan_cv.pdf"
                            download
                            className="text-sm px-4 py-1.5 rounded-full border border-[var(--color-neon-blue)]/50 text-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)] hover:text-black transition-all duration-200"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--foreground)]/70 hover:text-white transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 px-4 pb-6 pt-4 flex flex-col gap-4"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-base text-[var(--foreground)]/70 hover:text-white transition-colors py-1"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/raditya_fauzan_cv.pdf"
                            download
                            className="text-sm text-center px-4 py-2 rounded-full border border-[var(--color-neon-blue)]/50 text-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)] hover:text-black transition-all duration-200 mt-2"
                        >
                            Download CV
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
