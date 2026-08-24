import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Toolkits } from "@/components/Toolkits";
import { Blog } from "@/components/Blog";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
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
