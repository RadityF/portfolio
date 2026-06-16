"use client";
import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(hover: hover)").matches) return;

        document.body.style.cursor = "none";

        let x = 0, y = 0;
        let ringX = 0, ringY = 0;
        let raf: number;

        const onMouseMove = (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
        };

        const animate = () => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
            ringX += (x - ringX) * 0.1;
            ringY += (y - ringY) * 0.1;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
            }
            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        raf = requestAnimationFrame(animate);

        return () => {
            document.body.style.cursor = "";
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none w-[6px] h-[6px] rounded-full bg-[var(--color-neon-blue)] -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: "transform" }}
            />
            <div
                ref={ringRef}
                className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border border-[var(--color-neon-blue)]/40 -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: "transform" }}
            />
        </>
    );
};
