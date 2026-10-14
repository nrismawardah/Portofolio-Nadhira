"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, Share, Ellipsis, Heart, X } from "lucide-react";
import TextHighlight from "@/components/ui/TextHighlight";

/* =========================================================
   SKILLS & TOOLS
========================================================= */

type Skill = {
  name: string;
  image: string;
};

const skillRacks: Skill[][] = [
  [
    { name: "Python", image: "/images/skills/python.webp" },
    { name: "JavaScript", image: "/images/skills/javascript.webp" },
    { name: "C++", image: "/images/skills/cpp.svg" },
    { name: "R", image: "/images/skills/r.webp" },
  ],
  [
    { name: "Scikit-learn", image: "/images/skills/scikit-learn.webp" },
    { name: "Pandas", image: "/images/skills/pandas.png" },
    { name: "NumPy", image: "/images/skills/numpy.svg" },
    { name: "TensorFlow", image: "/images/skills/tensor-flow.png" },
    { name: "Keras", image: "/images/skills/keras.png" },
  ],
  [
    { name: "Excel", image: "/images/skills/excel.webp" },
    { name: "Google Colab", image: "/images/skills/colab.png" },
    { name: "MATLAB", image: "/images/skills/matlab.png" },
    { name: "Matplotlib", image: "/images/skills/matplotlib.png" },
    { name: "Seaborn", image: "/images/skills/seaborn.png" },
  ],
  [
    { name: "Next.js", image: "/images/skills/nextjs.png" },
    { name: "React", image: "/images/skills/react.webp" },
    { name: "FastAPI", image: "/images/skills/fastapi.png" },
    { name: "Laravel", image: "/images/skills/laravel.webp" },
    { name: "MySQL", image: "/images/skills/mysql.webp" },
    { name: "Tailwind CSS", image: "/images/skills/tailwind.png" },
  ],
  [
    { name: "Git", image: "/images/skills/git.png" },
    { name: "GitHub", image: "/images/skills/github.svg" },
    { name: "Docker", image: "/images/skills/docker.png" },
    { name: "VS Code", image: "/images/skills/vscode.png" },
    { name: "Figma", image: "/images/skills/figma.png" },
  ],
];

const notes = [
  "Big Data Analytics",
  "Computer Vision",
  "Model Evaluation & Hyperparameter Tuning",
  "System Analysis & UI/UX Design",
  "Software Testing",
];

function SkillRack({ skills, index }: { skills: Skill[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="relative flex min-w-0 items-stretch border-b-[5px] border-[#d5d5d5] bg-white shadow-[0_4px_0_rgba(0,0,0,0.04)]"
    >
      <div className="flex w-full items-center gap-x-2 overflow-x-auto px-2 py-2 sm:gap-x-3 sm:px-4 sm:py-2.5 lg:gap-x-2 xl:gap-x-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ duration: 0.18 }}
            className="flex w-[62px] shrink-0 flex-col items-center justify-start gap-2 text-center sm:w-[68px] lg:w-[60px] xl:w-[68px]"
          >
            <div className="relative flex h-10 w-full items-center justify-center sm:h-12 lg:h-11 xl:h-12">
              <Image
                src={skill.image}
                alt={skill.name}
                width={48}
                height={48}
                sizes="48px"
                className="h-full max-h-12 w-full max-w-12 object-contain"
              />
            </div>

            <span className="w-full text-[10px] leading-tight text-neutral-700 sm:text-[11px]">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function NotesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="w-full rounded-xl bg-[#f8f5f0] px-4 pb-5 pt-4 shadow-[0_8px_24px_rgba(55,45,70,0.12)] sm:px-6 sm:pb-6"
    >
      <div className="mb-4 flex items-center justify-between text-[#e9a526]">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <ChevronLeft size={18} />
          <span>Notes</span>
        </div>

        <div className="flex items-center gap-4">
          <Share size={19} strokeWidth={1.6} />
          <Ellipsis size={22} strokeWidth={1.8} />
        </div>
      </div>

      <div className="mb-3 inline-block">
        <span className="text-sm font-bold text-[#33351e] sm:text-base">
          <TextHighlight>Also Covered:</TextHighlight>
        </span>
      </div>

      <ul className="list-disc space-y-1 pl-5 text-sm leading-snug text-neutral-800 sm:text-[15px]">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </motion.div>
  );
}

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    id: "associate-data-scientist",
    title: "Associate Data Scientist",
    image: "/images/certifications/associate-data-scientist.png",
    issuer: "Badan Nasional Sertifikasi Profesi",
    period: "March 2026 – March 2029",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    rotation: -0.4,
    sticker: "/stickers/star.png",
    stickerClass:
      "right-[-24px] bottom-[18%] w-[44px] sm:right-[-23px] sm:w-[45px]",
    stickerRotation: -8,
  },
  {
    id: "it-specialist-ai",
    title: "IT Specialist - Artificial Intelligence",
    image: "/images/certifications/it-specialist-ai.png",
    issuer: "Certiport by Pearson VUE",
    period: "June 2026 – June 2031",
    skills: ["AI", "ML", "Computer Vision", "Neural Networks"],
    rotation: 0.4,
    sticker: "/stickers/star-struck.png",
    stickerClass:
      "right-[-10px] top-[-28px] w-[46px] sm:right-[-18px] sm:top-[-20px] sm:w-[45px]",
    stickerRotation: 8,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type Certificate = (typeof certifications)[number];

function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="certificate-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${certificate.title} certificate`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 sm:right-6 sm:top-6"
        >
          <X size={22} />
        </button>

        <motion.div
          initial={{ scale: 0.94, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.94, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative h-[75vh] w-full max-w-5xl"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}

function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_12%,#e4f5d2_30%,#b5e68a_52%,#8acd01_78%,#8acd01_100%)] px-5 py-6 sm:px-8 sm:py-7 lg:h-dvh lg:min-h-0 lg:px-12 lg:py-5"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: { duration: 0.2 },
            rotate: { duration: 0.2 },
          }}
          className="pointer-events-auto absolute left-[3%] top-5 z-20 w-10 cursor-pointer sm:left-[4%] sm:top-6 sm:w-12"
        >
          <Image
            src="/stickers/sparkles.png"
            alt=""
            aria-hidden="true"
            width={100}
            height={100}
            className="pointer-events-none h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1040px]">
        {/* Heading bubble */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex justify-start sm:mb-6"
        >
          <motion.div
            className="relative inline-flex max-w-full items-center rounded-full bg-[#f5f2f4] px-4 py-2 text-sm text-neutral-900 shadow-md sm:px-5 sm:py-2.5 sm:text-lg"
            whileHover={{ y: -3, rotate: -1 }}
            transition={{ duration: 0.2 }}
          >
            <span>A Few Things I’m Certified In!</span>

            <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-pink-100 bg-white shadow-sm sm:-top-3 sm:h-8 sm:w-8">
              <Heart
                size={15}
                fill="#ff3864"
                stroke="#ff3864"
                className="sm:hidden"
              />
              <Heart
                size={18}
                fill="#ff3864"
                stroke="#ff3864"
                className="hidden sm:block"
              />
            </span>
          </motion.div>
        </motion.div>
        {/* Certification cards */}

        <div className="mx-auto grid w-full max-w-[760px] grid-cols-1 items-start justify-items-center gap-y-6 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="relative w-full min-w-0 max-w-[370px]"
            >
              {/* Independent sticker */}
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -6, 0] }}
                whileHover={{
                  scale: 1.15,
                  rotate: cert.stickerRotation + 5,
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.2 },
                }}
                className={`absolute z-30 cursor-pointer ${cert.stickerClass}`}
              >
                <Image
                  src={cert.sticker}
                  alt=""
                  width={120}
                  height={120}
                  className="pointer-events-none h-auto w-full"
                />
              </motion.div>

              {/* Certificate card */}
              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{
                  y: -4,
                  rotate: cert.rotation,
                }}
                className="relative min-w-0"
              >
                <div className="rounded-t-md bg-[#dcdadd] px-3 py-1.5 sm:px-3.5">
                  <h3 className="text-sm font-bold leading-snug text-black sm:text-base">
                    {cert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(cert)}
                  aria-label={`View ${cert.title} certificate`}
                  className="group relative block aspect-[1.85/1] w-full overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 767px) 100vw, 460px"
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.025]"
                  />
                </button>

                <div className="rounded-b-md bg-[#dcdadd] px-3 pb-2 pt-2 sm:px-3.5 sm:pb-2.5">
                  <p className="text-sm leading-snug tracking-tight text-black sm:text-base">
                    {cert.issuer}
                  </p>

                  <p className="text-sm leading-snug tracking-tight text-black sm:text-base">
                    {cert.period}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex min-h-[27px] flex-1 items-center justify-center rounded-full border border-black bg-white px-2 py-1 text-center text-[11px] leading-tight text-[#222] transition-colors duration-200 hover:bg-[#f0f0f0] sm:min-h-[29px] sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
        {/* Messages notification */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ y: -3, scale: 1.005 }}
          className="relative ml-auto mt-2 w-full max-w-[280px] sm:mt-3 sm:max-w-[320px] md:mr-[-2%] md:w-[60%]"
        >
          <Image
            src="/images/certifications/messages-notification.png"
            alt="Messages notification: Nadhira — More to come!"
            width={880}
            height={250}
            className="h-auto w-full drop-shadow-sm"
          />
        </motion.div>
      </div>

      {/* Render modal outside the section stacking context */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}

/* =========================================================
   COMBINED SECTION
========================================================= */

export default function SkillsCerts() {
  return (
    <>
      {/* Skills & Tools */}
      <section
        id="skills"
        className="relative w-full overflow-hidden bg-white px-4 py-10 text-black sm:px-7 sm:py-12 lg:h-dvh lg:min-h-0 lg:px-6 lg:py-8 xl:px-10"
      >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 sm:gap-8 lg:h-full lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-4">
          {/* Title and description */}
          <div className="order-1 mx-auto flex w-full max-w-[500px] flex-col items-end justify-center text-right lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="w-full text-right text-4xl font-normal tracking-tight sm:text-5xl"
            >
              skills and{" "}
              <span className="relative inline-block font-serif italic">
                <span className="absolute inset-x-0 bottom-[8%] -z-0 h-[58%] bg-[#ffe84a]" />
                <span className="relative">tools</span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-4 w-full text-right text-base leading-snug tracking-tight sm:mt-6 sm:text-lg lg:text-[21px]"
            >
              the tools I use to turn ideas into practical solutions — from data
              exploration and machine learning to web development and
              user-focused applications.
            </motion.p>
          </div>

          {/* Five skill racks */}
          <div className="order-2 flex min-w-0 flex-col gap-2 sm:gap-3 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:gap-3">
            {skillRacks.map((skills, index) => (
              <SkillRack key={index} skills={skills} index={index} />
            ))}
          </div>

          {/* Notes */}
          <div className="order-3 mx-auto w-full max-w-[500px] lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:mx-0">
            <NotesCard />
          </div>
        </div>
      </section>

      {/* Certifications with its own original gradient background */}
      <CertificationsSection />
    </>
  );
}
