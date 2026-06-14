import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import AgentationWrapper from "@/components/AgentationWrapper";
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
        {children}
        <AgentationWrapper />
      </body>
    </html>
  );
}
