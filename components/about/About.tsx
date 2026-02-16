"use client";

import { motion } from "framer-motion";
import { Timeline } from "./Timeline";

export const About = () => {
    return (
        <section className="relative w-full py-24 px-4 md:px-10 bg-[var(--color-surface)] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-neon-blue)]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Bio Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-8 flex items-center gap-3"
                    >
                        <span className="w-2 h-8 bg-[var(--color-neon-blue)] rounded-full" />
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--foreground)]/80 text-lg leading-relaxed space-y-6"
                    >
                        <p>
                            Hi there! I am Raditya Fauzan. I am currently a third-year undergraduate Mathematics student at the University of Indonesia.
                            People often ask why Math? For me, it is all about the logic and the precision. But beyond the formulas on a whiteboard,
                            my real passion lies in Software and AI Engineering.
                        </p>
                        <p>
                            I am not just interested in 'calculating' things; I want to build them. I love the challenge of taking complex mathematical
                            concepts and turning them into scalable automation or intelligent systems that solve real problems. Whether it's architecting
                            a RAG-powered chatbot or optimizing a backend pipeline, I thrive at the intersection of clean code and smart algorithms.
                            My goal is to make AI work in the real world, backed by the solid intuition of a mathematician.
                        </p>

                        <div className="pt-6">
                            <h3 className="text-xl font-semibold mb-4 text-white">Core Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "PyTorch", "TensorFlow & Keras", "Scikit-learn", "OpenCV", "LangChain", "ChromaDB", "Google Gemini API", "HuggingFace", "Streamlit", "Flask", "PostgreSQL", "SQLite", "Pandas & NumPy", "Matplotlib", "NLTK", "Looker Studio"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm font-mono text-[var(--color-neon-blue)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Experience Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-8 flex items-center gap-3"
                    >
                        <span className="w-2 h-8 bg-[var(--color-deep-blue)] rounded-full" />
                        Experience
                    </motion.h2>
                    <Timeline />
                </div>
            </div>
        </section>
    );
};
