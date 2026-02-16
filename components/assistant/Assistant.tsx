"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, MessageCircle } from "lucide-react";

export const Assistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hello! I'm your AI guide. Ask me anything about my projects or skills.", isUser: false },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
        const userText = inputValue;
        setInputValue("");

        // Simulate AI response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: `I'm currently a demo. Eventually, I'll be able to tell you more about "${userText}"!`, isUser: false },
            ]);
        }, 1000);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed bottom-24 right-4 z-50 w-80 sm:w-96 bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-neon-blue)]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-96"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[var(--color-neon-blue)]/10 border-b border-[var(--color-neon-blue)]/20 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot size={20} className="text-[var(--color-neon-blue)]" />
                                <span className="font-semibold text-white">AI Assistant</span>
                            </div>
                            <button onClick={toggleOpen} className="text-[var(--foreground)] hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.isUser
                                            ? "bg-[var(--color-neon-blue)] text-black rounded-tr-none"
                                            : "bg-white/10 text-[var(--foreground)] rounded-tl-none border border-white/5"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-10 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-neon-blue)]/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 p-1.5 bg-[var(--color-neon-blue)] rounded-full text-black hover:bg-[var(--color-deep-blue)] hover:text-white transition-colors"
                                    disabled={!inputValue.trim()}
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleOpen}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[var(--color-neon-blue)] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-110 transition-all duration-300 group"
            >
                <div className="absolute inset-0 rounded-full animate-ping bg-[var(--color-neon-blue)] opacity-20" />
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                )}
            </button>
        </>
    );
};
