import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[var(--color-background)]">
            <HeroBackground />
            <HeroContent />

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent z-0 pointer-events-none" />
        </section>
    );
};
