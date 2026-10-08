"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "home", id: "home" },
  { label: "about me", id: "about" },
  { label: "experience", id: "experience" },
  { label: "projects", id: "projects" },
  { label: "skills & tools", id: "skills" },
  { label: "certifications", id: "certifications" },
  { label: "contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.75],
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] -translate-x-1/2 md:w-max"
    >
      {/* Desktop */}
      <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-black/10 px-2 py-2 shadow-sm backdrop-blur-md md:flex">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all ${
                isActive
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="flex justify-end md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/10 text-white shadow-sm backdrop-blur-md transition-transform hover:scale-105"
        >
          <span className="text-lg leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute right-0 top-14 w-64 max-w-[calc(100vw-2rem)] rounded-3xl border border-black/10 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  className={`whitespace-nowrap rounded-2xl px-4 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}