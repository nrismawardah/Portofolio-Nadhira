import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import SkillsTools from "@/components/sections/SkillsTools";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsTools />
        <Certifications />
        {/* Temporary sections for navigation testing */}

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center bg-[#8acd01]"
        >
          <h2 className="font-condensed text-6xl sm:text-8xl">CONTACT</h2>
        </section>
      </main>
    </>
  );
}
