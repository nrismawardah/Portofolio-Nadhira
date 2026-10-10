"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Paperclip,
  X,
} from "lucide-react";

import PhotoFrame from "@/components/ui/PhotoFrame";
import SmallPhotoFrame from "@/components/ui/SmallPhotoFrame";
import GalleryLightbox, {
  type GalleryPhoto,
} from "@/components/ui/GalleryLightbox";

type FolderPhoto = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type ExperienceFolder = {
  id: string;
  name: string;
  photos: FolderPhoto[];
};

const educationPhotos: GalleryPhoto[] = [
  {
    src: "/images/experience/graduate.jpeg",
    alt: "Graduation day",
    filename: "graduate.png",
  },
  {
    src: "/images/experience/sidang.jpeg",
    alt: "Academic presentation",
    filename: "sidang.jpg",
  },
  {
    src: "/images/experience/umy.jpg",
    alt: "UMY campus",
    filename: "umy.jpg",
  },
  {
    src: "/images/experience/capstone.jpeg",
    alt: "Capstone memories",
    filename: "capstone.jpg",
  },
];

const educationFolders: ExperienceFolder[] = [
  {
    id: "kmti",
    name: "KMTI",
    photos: [
      {
        src: "/images/experience/umy.jpg",
        alt: "UMY campus",
        title: "My University Days",
        description:
          "A little collection of memories from my university journey at Universitas Muhammadiyah Yogyakarta.",
      },
      {
        src: "/images/experience/capstone.jpeg",
        alt: "Capstone memories",
        title: "Capstone Memories",
        description:
          "Memories from university projects, teamwork, and the people I met along the way.",
      },
    ],
  },
  {
    id: "mataf",
    name: "Mataf",
    photos: [
      {
        src: "/images/experience/capstone.jpeg",
        alt: "University activity",
        title: "MATAF",
        description:
          "Memories from university activities and the people I met along the way.",
      },
    ],
  },
  {
    id: "itspecta",
    name: "IT-Specta",
    photos: [
      {
        src: "/images/experience/capstone.jpeg",
        alt: "IT-Specta activity",
        title: "IT-Specta",
        description:
          "A collection of moments from activities and events during my time at university.",
      },
    ],
  },
  {
    id: "portek",
    name: "Portek",
    photos: [
      {
        src: "/images/experience/sidang.jpeg",
        alt: "Academic presentation",
        title: "Portek",
        description:
          "A few memories from my academic projects and university experience.",
      },
    ],
  },
];

const experienceFolders: ExperienceFolder[] = [
  {
    id: "internship",
    name: "Internship",
    photos: [
      {
        src: "/images/experience/internship-certificate.png",
        alt: "Internship certificate",
        title: "Web Developer Intern",
        description:
          "Worked as a Web Developer Intern at Diskominfosan Kota Yogyakarta from November 2025 to January 2026.",
      },
      {
        src: "/images/experience/umy.jpg",
        alt: "Internship documentation",
        title: "Internship Moments",
        description:
          "Some memories from my internship journey, learning to collaborate and build useful applications.",
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    photos: [
      {
        src: "/images/experience/capstone.jpeg",
        alt: "Academic project",
        title: "Academic Projects",
        description:
          "Projects that helped me grow my technical skills and put what I learned into practice.",
      },
    ],
  },
];

function FolderIcon({ size = 58 }: { size?: number }) {
  const gradientId = `folder-gradient-${size}`;

  return (
    <svg
      width={size}
      height={Math.round(size * 0.86)}
      viewBox="0 0 180 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="drop-shadow-sm"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="90"
          y1="0"
          x2="90"
          y2="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#B7DCFA" />
          <stop offset="48%" stopColor="#91C3EA" />
          <stop offset="100%" stopColor="#6DA2D1" />
        </linearGradient>

        <linearGradient
          id={`tab-${size}`}
          x1="50"
          y1="0"
          x2="50"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#B2D3F2" />
          <stop offset="100%" stopColor="#7EA8D2" />
        </linearGradient>
      </defs>

      {/* Folder tab */}
      <path
        d="M12 40V18C12 11.4 17.4 6 24 6H81C87.6 6 93 11.4 93 18V27H151C157.6 27 163 32.4 163 39V48H12V40Z"
        fill={`url(#tab-${size})`}
        stroke="#8BB4D9"
        strokeWidth="1"
      />

      {/* Main folder body */}
      <path
        d="M7 39C7 34.6 10.6 31 15 31H165C169.4 31 173 34.6 173 39V139C173 143.4 169.4 147 165 147H15C10.6 147 7 143.4 7 139V39Z"
        fill={`url(#${gradientId})`}
        stroke="#79A8D3"
        strokeWidth="1"
      />

      {/* Subtle top highlight */}
      <path
        d="M15 32H165"
        stroke="#D6ECFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DesktopFolder({
  folder,
  position,
  onClick,
}: {
  folder: ExperienceFolder;
  position: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Open ${folder.name} folder`}
      className={`absolute ${position} z-20 flex w-[88px] flex-col items-center gap-1 text-center text-xs text-neutral-700`}
      whileHover={{
        y: -7,
        scale: 1.08,
        rotate: -2,
      }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.2 }}
    >
      <FolderIcon size={60} />
      <span className="font-medium">{folder.name}</span>
    </motion.button>
  );
}

function MobileFolder({
  folder,
  onClick,
}: {
  folder: ExperienceFolder;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Open ${folder.name} folder`}
      className="flex min-w-0 flex-col items-center gap-1 text-center text-xs text-neutral-800"
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
    >
      <FolderIcon size={40} />
      <span>{folder.name}</span>
    </motion.button>
  );
}

function FloatingSticker({
  src,
  alt = "",
  className,
  delay = 0,
}: {
  src: string;
  alt?: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-auto absolute ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, -6, 0] }}
      whileHover={{
        scale: 1.15,
        rotate: 8,
      }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { duration: 0.25 },
        rotate: { duration: 0.25 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        width={120}
        height={120}
        className="pointer-events-none h-auto w-full object-contain"
      />
    </motion.div>
  );
}

function ExperienceNotes() {
  return (
    <div className="relative w-full rounded-md bg-[#faf7f2] p-5 text-neutral-900 shadow-[0_10px_25px_rgba(40,80,110,0.16)] sm:p-7 lg:min-h-[440px]">
      <div className="mb-6 flex items-center justify-between text-[#e9a51b]">
        <div className="flex items-center gap-2">
          <ChevronLeft size={23} strokeWidth={1.5} />
          <span className="text-lg font-semibold">Notes</span>
        </div>

        <div className="flex items-center gap-3">
          <Paperclip size={23} strokeWidth={1.5} />
          <MoreHorizontal size={27} strokeWidth={1.5} />
        </div>
      </div>

      <div className="border-l-[3px] border-neutral-300 pl-3 text-base leading-relaxed sm:text-lg">
        <h3 className="font-bold">Web Developer Intern</h3>

        <p>Diskominfosan Kota Yogyakarta (Nov 2025 – Jan 2026)</p>

        <ul className="ml-5 list-disc">
          <li>Collaborated with a cross-functional team.</li>
          <li>Used Git and GitHub for collaboration.</li>
          <li>Documented requirements and tracked progress.</li>
        </ul>

        <p className="font-bold">To be continued...</p>
      </div>

      <FloatingSticker
        src="/stickers/laptop.png"
        className="-left-3 top-[65%] z-10 -rotate-12 w-8 lg:-left-[7%] sm:w-[55px]"
        delay={0.2}
      />

      <FloatingSticker
        src="/stickers/star.png"
        className="bottom-5 -right-4 rotate-12 z-20 w-7 lg:bottom-[10%] lg:-right-[7%] sm:w-[50px]"
        delay={0.2}
      />
    </div>
  );
}

function ExperienceLightbox({
  folder,
  onClose,
}: {
  folder: ExperienceFolder;
  onClose: () => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = folder.photos[photoIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        setPhotoIndex((current) => (current + 1) % folder.photos.length);
      }

      if (event.key === "ArrowLeft") {
        setPhotoIndex(
          (current) =>
            (current - 1 + folder.photos.length) % folder.photos.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [folder.photos.length, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${folder.name} photo gallery`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-30 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
      >
        <X size={24} />
      </button>

      {folder.photos.length > 1 && (
        <button
          type="button"
          aria-label="Previous photo"
          onClick={(event) => {
            event.stopPropagation();
            setPhotoIndex(
              (current) =>
                (current - 1 + folder.photos.length) % folder.photos.length,
            );
          }}
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/30 sm:left-6"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${folder.id}-${photoIndex}`}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#faf7f2] shadow-2xl md:flex-row"
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative min-h-[240px] flex-1 bg-neutral-100 md:min-h-[480px]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 90vw, 55vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex w-full flex-col justify-center overflow-y-auto p-6 sm:p-8 md:w-[310px] md:shrink-0">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              {folder.name}
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#33351e] sm:text-3xl">
              {photo.title}
            </h3>

            <div className="my-5 h-px w-full bg-[#eadedb]" />

            <p className="text-sm leading-7 text-neutral-700 sm:text-[15px]">
              {photo.description}
            </p>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                {String(photoIndex + 1).padStart(2, "0")} /{" "}
                {String(folder.photos.length).padStart(2, "0")}
              </span>

              {folder.photos.length > 1 && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() =>
                      setPhotoIndex(
                        (current) =>
                          (current - 1 + folder.photos.length) %
                          folder.photos.length,
                      )
                    }
                    className="rounded-full border border-[#e6d7d4] p-2 hover:bg-[#f0e6e3]"
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() =>
                      setPhotoIndex(
                        (current) => (current + 1) % folder.photos.length,
                      )
                    }
                    className="rounded-full border border-[#e6d7d4] p-2 hover:bg-[#f0e6e3]"
                  >
                    <ChevronRight size={19} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {folder.photos.length > 1 && (
        <button
          type="button"
          aria-label="Next photo"
          onClick={(event) => {
            event.stopPropagation();
            setPhotoIndex((current) => (current + 1) % folder.photos.length);
          }}
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/30 sm:right-6"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const [activeFolder, setActiveFolder] = useState<ExperienceFolder | null>(
    null,
  );

  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-cover bg-center px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-16"
      style={{
        backgroundImage: "url('/images/experience/background.png')",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-sky-300/10" />

      {/* EDUCATION */}

      <div className="mx-auto w-full max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center text-3xl font-normal tracking-tight text-black sm:mb-12 sm:text-4xl lg:mb-14 lg:ml-4 lg:text-left lg:text-[clamp(2.5rem,4.5vw,4rem)]"
        >
          Education &amp;{" "}
          <span className="font-serif italic">
            <span className="bg-yellow-300 px-1">Experience</span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 items-start gap-x-3 gap-y-5 sm:gap-x-5 sm:gap-y-6 lg:grid-cols-12 lg:items-start lg:gap-6">
          {" "}
          {/* UNIVERSITY PHOTOS: UMY ABOVE CAPSTONE */}
          <div className="relative col-start-1 row-start-1 mx-auto min-h-[220px] w-full max-w-[400px] sm:min-h-[270px] lg:col-span-3 lg:row-auto lg:min-h-[510px]">
            {/* Capstone: bottom layer */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute left-[27%] top-[42%] z-10 w-[58%] rotate-[2deg] sm:top-[43%] lg:w-[55%]"
            >
              <SmallPhotoFrame
                src="/images/experience/capstone.jpeg"
                alt="University capstone memories"
                filename="capstone.jpg"
                onClick={() => setActivePhotoIndex(3)}
              />
            </motion.div>

            {/* UMY: top layer */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute left-[2%] top-[3%] z-20 w-[60%] -rotate-[2deg] lg:w-[57%]"
            >
              <SmallPhotoFrame
                src="/images/experience/umy.jpg"
                alt="UMY campus"
                filename="umy.jpg"
                onClick={() => setActivePhotoIndex(2)}
              />
            </motion.div>

            <FloatingSticker
              src="/stickers/sparkles.png"
              className="left-[0%] top-[73%] rotate-15 z-30 w-10 sm:w-10"
              delay={0.2}
            />
          </div>
          {/* GRADUATION CHAT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative col-start-2 row-start-1 mx-auto w-full max-w-[420px] lg:col-span-4 lg:row-auto lg:max-w-none"
          >
            <FloatingSticker
              src="/stickers/love-you-gesture.png"
              className="-left-3 -top-4 z-20 w-8 rotate-12 sm:-left-3 sm:-top-5 sm:w-12 "
            />

            <div className="relative mx-auto aspect-[1080/1305] w-full">
              <Image
                src="/images/experience/chat-education.png"
                alt="A conversation about graduation and paper acceptance"
                fill
                sizes="(max-width: 1024px) 90vw, 32vw"
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </motion.div>
          {/* GRADUATION: PHOTOFRAME; SIDANG: SMALLPHOTOFRAME ON TOP */}
          <div className="relative col-start-1 row-start-2 mx-auto min-h-[250px] w-full max-w-[400px] sm:min-h-[300px] lg:col-span-5 lg:row-auto lg:min-h-[540px]">
            {/* Graduation: main photo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute left-[3%] top-7 z-10 w-[73%] rotate-[-1deg] sm:w-[76%] lg:top-[-20%]"
            >
              <PhotoFrame
                src="/images/experience/graduate.jpeg"
                alt="Graduation day"
                filename="graduate.png"
                width="100%"
                onClick={() => setActivePhotoIndex(0)}
              />
            </motion.div>

            {/* Sidang: overlay on top of graduation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="absolute right-[0%] top-[38%] z-30 w-[43%] rotate-[2deg] sm:top-[20%] sm:w-[46%]"
            >
              <SmallPhotoFrame
                src="/images/experience/sidang.jpeg"
                alt="Academic presentation"
                filename="sidang.jpg"
                onClick={() => setActivePhotoIndex(1)}
              />
            </motion.div>

            <FloatingSticker
              src="/stickers/woman-student.png"
              className="right-[14%] top-[9%] rotate-12 z-30 w-9 sm:right-14 sm:-top-30 sm:w-14"
              delay={0.1}
            />

            <FloatingSticker
              src="/stickers/sparkles.png"
              className="right-[3%] top-[24%] -rotate-12 z-30 w-6 lg:right-[5%] lg:top-[-12%] sm:w-9"
              delay={0.3}
            />

            <FloatingSticker
              src="/stickers/star.png"
              className="-right-[70%] bottom-[45%] rotate-12 z-30 w-8 lg:right-[70%] lg:bottom-[30%] sm:w-10"
              delay={0.3}
            />

            {/* Education folders: intentionally scattered */}

            <div className="absolute inset-0 z-20 hidden lg:block">
              <DesktopFolder
                folder={educationFolders[0]}
                position="left-[1%] bottom-[15%]"
                onClick={() => setActiveFolder(educationFolders[0])}
              />

              <DesktopFolder
                folder={educationFolders[1]}
                position="right-[40%] bottom-[20%]"
                onClick={() => setActiveFolder(educationFolders[1])}
              />

              <DesktopFolder
                folder={educationFolders[2]}
                position="left-[25%] bottom-[3%]"
                onClick={() => setActiveFolder(educationFolders[2])}
              />

              <DesktopFolder
                folder={educationFolders[3]}
                position="right-[10%] bottom-[12%]"
                onClick={() => setActiveFolder(educationFolders[3])}
              />
            </div>
          </div>
          {/* FOLDERS FOR SMALLER SCREENS: SCATTERED LAYOUT */}
          <div className="relative mx-auto mt-6 h-[270px] w-full max-w-[500px] sm:mt-8 sm:h-[320px] lg:hidden">
            <div className="absolute left-[8%] top-[20%]">
              <MobileFolder
                folder={educationFolders[0]}
                onClick={() => setActiveFolder(educationFolders[0])}
              />
            </div>

            <div className="absolute left-[47%] top-[2%]">
              <MobileFolder
                folder={educationFolders[1]}
                onClick={() => setActiveFolder(educationFolders[1])}
              />
            </div>

            <div className="absolute left-[30%] top-[50%]">
              <MobileFolder
                folder={educationFolders[2]}
                onClick={() => setActiveFolder(educationFolders[2])}
              />
            </div>

            <div className="absolute right-[3%] top-[33%]">
              <MobileFolder
                folder={educationFolders[3]}
                onClick={() => setActiveFolder(educationFolders[3])}
              />
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE: THREE ROWS ON MOBILE */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 border-t-0 pt-0 sm:mt-10 sm:gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
        {/* Mobile title - Row 1 */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="col-span-1 text-center text-2xl font-medium tracking-tight text-black sm:text-3xl lg:hidden"
        >
          [ Experience Archived ]
        </motion.h3>

        {/* Notes - Row 2 */}
        <motion.div
          className="relative col-span-1 min-w-0 lg:col-span-6 lg:row-span-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ExperienceNotes />
        </motion.div>

        {/* Experience photos - Row 3 */}
        <div className="relative col-span-1 mx-auto w-full min-w-0 max-w-[650px] lg:col-span-6">
          {/* Desktop title */}
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 hidden text-center text-2xl font-medium tracking-tight text-black sm:mb-12 sm:text-3xl lg:mb-14 lg:block"
          >
            [ Experience Archive ]
          </motion.h3>

          <div className="relative mx-auto grid w-full max-w-[650px] grid-cols-2 items-start gap-3 sm:gap-8 lg:gap-12">
            {/* Internship certificate */}
            <motion.button
              type="button"
              onClick={() => setActiveFolder(experienceFolders[0])}
              aria-label="Open internship certificate"
              className="group relative z-10 mx-auto w-[85%] text-left sm:w-[90%] lg:mx-0 lg:w-full"
              whileHover={{ y: -5, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/stickers/paperclip.png"
                alt=""
                width={44}
                height={44}
                className="pointer-events-none absolute w-7 -left-3 -top-4 z-20 -rotate-12 object-contain lg:w-[20%]"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-emerald-500 bg-white/50 shadow-md transition-shadow duration-300 group-hover:shadow-xl sm:border-[5px]">
                <Image
                  src="/images/experience/internship-certificate.png"
                  alt="Internship certificate"
                  fill
                  sizes="(max-width: 1024px) 70vw, 22vw"
                  className="object-contain"
                />
              </div>

              <span className="mt-2 block text-xs text-black sm:text-sm">
                diskominfosan.jpg
              </span>
            </motion.button>

            {/* Coming soon */}
            <motion.button
              type="button"
              onClick={() => setActiveFolder(experienceFolders[1])}
              aria-label="Open upcoming experience"
              className="group relative z-10 mx-auto mt-4 w-[85%] text-left sm:mt-6 sm:w-[90%] lg:mx-0 lg:mt-14 lg:w-full"
              whileHover={{ y: -5, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/stickers/paperclip.png"
                alt=""
                width={44}
                height={44}
                className="pointer-events-none absolute w-7 -left-3 -top-4 z-20 -rotate-12 object-contain lg:w-[20%]"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] overflow-hidden bg-white/50 shadow-md transition-shadow duration-300 group-hover:shadow-xl" />

              <span className="mt-2 block text-xs text-black sm:text-sm">
                coming-soon.jpg
              </span>
            </motion.button>

            {/* Decorative sticker */}
            <div className="pointer-events-none absolute -right-2 -top-4 z-20 hidden lg:block">
              <FloatingSticker
                src="/stickers/sparkles.png"
                className="w-10 -rotate-12"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION PHOTO LIGHTBOX */}

      <AnimatePresence>
        {activePhotoIndex !== null && (
          <GalleryLightbox
            key="education-gallery-lightbox"
            photos={educationPhotos}
            activeIndex={activePhotoIndex}
            onClose={() => setActivePhotoIndex(null)}
            onNavigate={setActivePhotoIndex}
          />
        )}
      </AnimatePresence>

      {/* FOLDER LIGHTBOX */}

      <AnimatePresence>
        {activeFolder && (
          <ExperienceLightbox
            key={activeFolder.id}
            folder={activeFolder}
            onClose={() => setActiveFolder(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
