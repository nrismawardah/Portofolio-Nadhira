"use client";

import Image from "next/image";
import { motion } from "motion/react";

const certifications = [
  {
    title: "Associate Data Scientist",
    image: "/images/certifications/associate-data-scientist.png",
    issuer: "Badan Nasional Sertifikasi Profesi",
    period: "March 2026 – March 2029",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    className: "lg:mt-[100px]",
  },
  {
    title: "IT Specialist - Artificial Intelligence",
    image: "/images/certifications/it-specialist-ai.png",
    issuer: "Certiport by Pearson VUE",
    period: "June 2026 – June 2031",
    skills: ["AI", "ML", "Computer Vision", "Neural Networks"],
    className: "lg:mt-0",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-white to-[#8acd01] px-5 pb-28 pt-16 sm:px-10 sm:pt-20 lg:min-h-[720px] lg:px-[6.6%] lg:pb-24 lg:pt-16"
    >
      {/* Decorations */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-7 text-5xl sm:text-6xl"
        animate={{ rotate: [0, 10, -5, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[46%] top-[72%] z-10 text-5xl sm:text-6xl"
        animate={{ rotate: [0, 12, -8, 0], y: [0, -7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ⭐
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-8 z-10 text-5xl sm:text-6xl"
        animate={{ rotate: [0, -8, 8, 0], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🤩
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-12 flex justify-center lg:mb-0 lg:block"
      >
        <div className="relative inline-flex items-center rounded-full bg-[#e9e9eb] px-5 py-3 shadow-sm transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03] sm:px-6 sm:py-3.5">
          <h2 className="text-xl font-medium tracking-tight text-[#171717] sm:text-2xl">
            A few things I&apos;ve earned!
          </h2>

          <motion.span
            aria-hidden="true"
            className="absolute -right-2 -top-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#f1f1f1] bg-white text-lg shadow-sm"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            💗
          </motion.span>
        </div>
      </motion.div>

      {/* Certificate cards */}
      <div className="relative z-10 grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-[5%]">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className={`relative w-full overflow-visible rounded-[9px] bg-[#dcdadd] shadow-sm transition-shadow duration-300 hover:shadow-xl ${cert.className}`}
          >
            {/* Certificate title bar */}
            <div className="rounded-t-[9px] bg-[#dcdadd] px-3 py-2 sm:px-4">
              <h3 className="text-base font-bold leading-snug text-black sm:text-lg">
                {cert.title}
              </h3>
            </div>

            {/* Click to open original certificate in a new tab */}
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${cert.title} certificate in a new tab`}
              className="group relative block w-full overflow-hidden bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <div
                className={`relative w-full ${
                  index === 0 ? "aspect-[1.36/1]" : "aspect-[1.5/1]"
                }`}
              >
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />

                <span className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-black/75 px-3 py-1.5 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View certificate ↗
                </span>
              </div>
            </a>

            {/* Certificate details */}
            <div className="rounded-b-[9px] px-3 py-3.5 sm:px-3.5 sm:py-4">
              <p className="text-base leading-snug text-black sm:text-lg">
                {cert.issuer}
              </p>
              <p className="text-base leading-snug text-black sm:text-lg">
                {cert.period}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex min-h-[29px] flex-1 items-center justify-center whitespace-nowrap rounded-full border border-black bg-white px-2.5 py-1 text-center text-xs text-[#252525] transition-all duration-200 hover:-translate-y-1 hover:bg-[#252525] hover:text-white sm:flex-none sm:px-3 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Messages notification */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        whileHover={{ y: -4, scale: 1.015 }}
        className="relative z-20 mx-auto mt-10 w-full max-w-[500px] cursor-default sm:mt-12 lg:absolute lg:bottom-6 lg:right-0 lg:mt-0 lg:w-[42%] lg:max-w-none"
      >
        <Image
          src="/images/certifications/messages-notification.png"
          alt="Messages notification: Nadhira — More to come!"
          width={880}
          height={120}
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="h-auto w-full drop-shadow-sm"
        />
      </motion.div>
    </section>
  );
}
