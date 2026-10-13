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
      className="relative min-h-[360px] overflow-hidden bg-[#8acd01] px-5 pb-7 pt-12 text-black sm:min-h-[440px] sm:px-10 sm:pb-8 sm:pt-14 lg:min-h-[500px] lg:px-[18.5%] lg:pb-8 lg:pt-12"
    >
      {/* Main typography */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-['Arial_Nova_Cond'] text-[clamp(2.8rem,8.5vw,6rem)] leading-[1.2] tracking-[-0.035em]"
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
        className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-xs sm:mt-16 sm:text-sm lg:absolute lg:bottom-7 lg:left-[5.8%] lg:right-[5.8%] lg:mt-0 lg:flex-nowrap lg:gap-4 lg:text-base"
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
