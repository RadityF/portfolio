"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="relative w-full py-24 px-4 md:px-10 bg-[var(--color-surface)] overflow-hidden">
            {/* Aurora Background */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[550px] h-[550px] bg-[var(--color-neon-blue)]/6 rounded-full blur-[110px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 0.9, 1.1, 1], x: [0, -15, 10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-neon-purple)]/4 rounded-full blur-[130px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <span className="w-2 h-8 bg-[var(--color-neon-blue)] rounded-full" />
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Profile Photo + Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-[var(--foreground)]/80 text-lg leading-relaxed space-y-6"
                    >
                        <div className="flex items-center gap-5">
                            <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-[var(--color-neon-blue)]/40 ring-4 ring-[var(--color-neon-blue)]/10">
                                <Image
                                    src="/final_radit.png"
                                    alt="Raditya Fauzan"
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-lg">Raditya Fauzan</p>
                                <p className="text-[var(--foreground)]/50 text-sm font-mono">AI · ML Engineer · Mathematics @ UI</p>
                            </div>
                        </div>

                        <p>
                            I am a final-year Mathematics student at Universitas Indonesia with a deep focus on AI and Software Engineering.
                            Mathematics, for me, is not just about formulas — it is the language of logic and precision that underpins every intelligent system I build.
                        </p>
                        <p>
                            I thrive at the intersection of clean code and smart algorithms. Whether architecting a RAG-powered chatbot, building
                            a real-time computer vision pipeline, or optimizing a backend with FastAPI and Celery, my goal is always the same:
                            make AI work reliably in the real world — backed by solid mathematical intuition.
                        </p>
                    </motion.div>

                    {/* Core Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-6 text-white">Core Technologies</h3>
                        <div className="space-y-3">
                            {[
                                { category: "ML / DL", techs: ["PyTorch", "TensorFlow & Keras", "Scikit-learn", "HuggingFace"] },
                                { category: "LLM / RAG", techs: ["LangChain", "ChromaDB", "Google Gemini API"] },
                                { category: "Computer Vision", techs: ["OpenCV", "NLTK"] },
                                { category: "Backend", techs: ["FastAPI", "Flask", "Streamlit"] },
                                { category: "Database", techs: ["PostgreSQL", "SQLite"] },
                                { category: "Data & Viz", techs: ["Pandas & NumPy", "Matplotlib", "Looker Studio"] },
                            ].map(({ category, techs }) => (
                                <div key={category} className="flex flex-wrap items-start gap-x-3 gap-y-2">
                                    <span className="text-xs font-mono text-[var(--foreground)]/40 w-28 shrink-0 pt-1">{category}</span>
                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm font-mono text-[var(--color-neon-blue)]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
