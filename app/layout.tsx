import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import AgentationWrapper from "@/components/AgentationWrapper";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raditya Fauzan | AI & ML Engineer",
  description: "Raditya Fauzan — AI/ML Engineer & Mathematics student at Universitas Indonesia. Building intelligent systems with PyTorch, LangChain, and modern ML stacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        <ScrollProgressBar />
        <CustomCursor />
        {/* Grain noise overlay */}
        <div
          className="fixed inset-0 z-[9997] pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "150px 150px",
          }}
        />
        {children}
        <AgentationWrapper />
      </body>
    </html>
  );
}
