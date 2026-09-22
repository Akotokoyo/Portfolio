import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Toolkits } from "@/components/Toolkits";
import { Blog } from "@/components/Blog";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Giorgia Tedde | Unity Gameplay Programmer",
  description:
    "Portfolio of Giorgia Tedde — Unity gameplay programmer with 7+ years in production, live mobile titles, and indie RPG development.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Toolkits />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
