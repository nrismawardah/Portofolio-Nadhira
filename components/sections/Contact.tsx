"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    label: "nrismawardah@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=nrismawardah@gmail.com",
    icon: Mail,
  },
  {
    label: "linkedin.com/in/nrismawardah",
    href: "https://linkedin.com/in/nrismawardah",
    icon: FaLinkedin,
  },
  {
    label: "github.com/nrismawardah",
    href: "https://github.com/nrismawardah",
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[360px] overflow-hidden bg-[#8acd01] px-5 pb-7 pt-10 text-black sm:min-h-[440px] sm:px-10 sm:py-10 lg:flex lg:h-dvh lg:min-h-0 lg:flex-col lg:justify-center lg:px-[12%] lg:pb-20 lg:pt-8"
    >
      {/* Main typography */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto w-fit max-w-full font-['Arial_Nova_Cond'] text-[clamp(3.2rem,8vw,7.5rem)] leading-[1.08] tracking-[-0.035em] lg:max-w-[900px] lg:text-[clamp(5rem,7.5vw,7.5rem)]"
      >
        <div className="flex items-start justify-between">
          <span>thanks</span>
          <span>for</span>
        </div>

        <div className="mt-2 flex items-start justify-between gap-4">
          <span>scrolling</span>
          <span>this</span>
          <span>far.</span>
        </div>

        <div className="mt-2">contact me xx</div>
      </motion.div>

      {/* Contact links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs sm:mt-16 sm:text-sm lg:absolute lg:bottom-7 lg:left-[5.8%] lg:right-[5.8%] lg:mt-0 lg:flex-nowrap lg:gap-x-8 lg:text-base"
      >
        {contactLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1 whitespace-nowrap transition-opacity duration-200 hover:opacity-60"
          >
            <Icon size={18} strokeWidth={2.8} className="shrink-0" />
            <span>{label}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
