import Navbar from "@/components/navigation/Navbar";

const sections = [
  {
    id: "home",
    title: "HOME",
    className: "bg-[#9ed8f5]",
  },
  {
    id: "about",
    title: "ABOUT ME",
    className: "bg-[#f3b6c8]",
  },
  {
    id: "experience",
    title: "EXPERIENCE",
    className: "bg-[#9ed8f5]",
  },
  {
    id: "projects",
    title: "PROJECTS",
    className: "bg-[#c9a27e]",
  },
  {
    id: "skills",
    title: "SKILLS & TOOLS",
    className: "bg-[#f8f5ee]",
  },
  {
    id: "certifications",
    title: "CERTIFICATIONS",
    className: "bg-[#f8f5ee]",
  },
  {
    id: "contact",
    title: "CONTACT",
    className: "bg-[#b7f34a]",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {sections.map((section) => (
          <section
  key={section.id}
  id={section.id}
  className={`flex min-h-screen w-full max-w-full items-center justify-center overflow-hidden ${section.className}`}
>
  <h1 className="max-w-full break-words px-6 text-center font-condensed text-5xl sm:text-7xl md:text-9xl">
    {section.title}
  </h1>
</section>
        ))}
      </main>
    </>
  );
}