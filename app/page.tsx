import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        {/* Temporary sections for navigation testing */}

        <section
          id="projects"
          className="flex min-h-screen items-center justify-center bg-[#c9a27e]"
        >
          <h2 className="font-condensed text-6xl sm:text-8xl">PROJECTS</h2>
        </section>

        <section
          id="skills"
          className="flex min-h-screen items-center justify-center bg-[#f8f5ee]"
        >
          <h2 className="font-condensed text-6xl sm:text-8xl">
            SKILLS & TOOLS
          </h2>
        </section>

        <section
          id="certifications"
          className="flex min-h-screen items-center justify-center bg-[#f8f5ee]"
        >
          <h2 className="font-condensed text-6xl sm:text-8xl">
            CERTIFICATIONS
          </h2>
        </section>

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center bg-[#b7f34a]"
        >
          <h2 className="font-condensed text-6xl sm:text-8xl">CONTACT</h2>
        </section>
      </main>
    </>
  );
}
