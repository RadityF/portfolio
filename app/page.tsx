import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { ProjectsGrid } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col relative bg-black text-white">
        <Hero />
        <About />
        <Experience />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
