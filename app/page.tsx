import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsGrid } from "@/components/projects";
// import { Assistant } from "@/components/assistant"; // Chat feature disabled

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between relative bg-black text-white">
      <Hero />
      <About />
      <ProjectsGrid />
      {/* <Assistant /> */}{/* Chat feature disabled */}
    </main>
  );
}
