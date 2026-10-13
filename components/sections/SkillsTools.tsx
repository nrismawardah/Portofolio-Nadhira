"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, Share, Ellipsis } from "lucide-react";
import TextHighlight from "@/components/ui/TextHighlight";

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
      <div className="flex w-full items-center gap-x-2 gap-y-3 overflow-x-auto px-2 py-3 sm:gap-x-3 sm:px-4 sm:py-4 lg:gap-x-2 xl:gap-x-3">
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
      className="w-full rounded-xl bg-[#f8f5f0] px-4 pb-6 pt-4 sm:px-6 sm:pb-7 shadow-[0_8px_24px_rgba(55,45,70,0.12)]"
    >
      <div className="mb-5 flex items-center justify-between text-[#e9a526]">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <ChevronLeft size={18} />
          <span>Notes</span>
        </div>

        <div className="flex items-center gap-4">
          <Share size={19} strokeWidth={1.6} />
          <Ellipsis size={22} strokeWidth={1.8} />
        </div>
      </div>

      <div className="mb-4 inline-block">
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

export default function SkillsTools() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-white px-4 py-14 text-black sm:px-7 sm:py-16 lg:bg-white lg:px-0 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* TITLE & DESCRIPTION: FIRST ON MOBILE, RIGHT ON DESKTOP */}
        <div className="order-1 mx-auto flex w-full max-w-[500px] flex-col justify-center lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-normal tracking-tight sm:text-5xl"
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
            className="mt-4 text-base leading-snug tracking-tight sm:mt-6 sm:text-lg lg:text-[21px]"
          >
            the tools that help me turn ideas into real things. from data
            exploration to model development and web apps. this is what i use to
            build, analyze, and create.
          </motion.p>
        </div>

        {/* FIVE SKILL RACKS: THIRD ON MOBILE, LEFT ON DESKTOP */}
        <div className="order-2 flex min-w-0 flex-col gap-3 sm:gap-4 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:gap-4">
          {skillRacks.map((skills, index) => (
            <SkillRack key={index} skills={skills} index={index} />
          ))}
        </div>

        {/* NOTES: LAST ON MOBILE, BELOW DESCRIPTION ON DESKTOP */}
        <div className="order-3 mx-auto w-full max-w-[500px] lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:mx-0">
          <NotesCard />
        </div>
      </div>
    </section>
  );
}
