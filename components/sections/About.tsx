"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MoreHorizontal,
  Share,
  X,
} from "lucide-react";

type Obsession = {
  title: string;
  subtitle: string;
  src: string;
  description: string;
};

const obsessions: Obsession[] = [
  {
    title: "Joy",
    subtitle: "my pretty girl",
    src: "/images/about/joy.jpg",
    description:
      "she's my biggest girl crush, like HELLO??? the visuals, the voice, the smile... this woman can literally do no wrong in my eyes. if joy has zero fans, i'm probably dead",
  },
  {
    title: "Movies",
    subtitle: "movieholic",
    src: "/images/about/movie.jpg",
    description:
      "i love watching movies (and series too, obviously). my favorite genres are thriller, mystery, dystopian, and anything that makes me question everything at 2 a.m. plot twists are my weakness. bonus points if the ending leaves me staring at the wall",
  },
  {
    title: "Doja Cat",
    subtitle: "my music rotation",
    src: "/images/about/doja-cat.jpg",
    description:
      "name one good album besides Planet Her... i'll wait. okay, but seriously, her music is SO addictive. the versatility, the visuals, the whole vibe??? she could release a song about literally anything and i'd probably have it on repeat",
  },
  {
    title: "TREASURE",
    subtitle: "teume mode: ON",
    src: "/images/about/treasure.jpg",
    description:
      "i loveee listening to treasure (fun fact: i've been listening to nothing but treasure while making this entire portfolio). and TREASURE MAP??? my comfort show, my therapy, my free serotonin. these boys are so unserious and i love them for it",
  },
  {
    title: "Painting",
    subtitle: "little artist",
    src: "/images/about/painting.jpg",
    description:
      "i've loved painting since i was little, and honestly, it's still one of my favorite ways to escape reality for a bit. give me some paint, a brush, and a free afternoon, and i'll be busy for hours. am i good at it? depends on the day LMAO",
  },
  {
    title: "The Sims",
    subtitle: "forever a sims girlie",
    src: "/images/about/sims.jpg",
    description:
      "the only game i can play without getting bored. i can spend hours building houses, making my sims' lives unnecessarily complicated, and creating whole storylines instead of doing what i'm actually supposed to do. real life? stressful. sims life? also stressful, but at least i can control it",
  },
  {
    title: "Tiramisu",
    subtitle: "one more bite",
    src: "/images/about/tiramisu.jpg",
    description:
      "who doesn't like tiramisu??? coffee, cream, cocoa... literally the perfect combination. put a slice in front of me and suddenly all my problems can wait. if loving tiramisu is wrong, i don't wanna be right",
  },
  {
    title: "Studio Ghibli",
    subtitle: "somewhere magical",
    src: "/images/about/ghibli.jpg",
    description:
      "i've watched all the ghibli movies, and somehow they still make me feel things every single time. the art, the music, the little details, the cozy-but-slightly-existential vibes... i just wanna live in one of these movies and never come back",
  },
];

const portrait = "/images/about/me.jpg";

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeObsession = activeIndex === null ? null : obsessions[activeIndex];

  const closeLightbox = () => setActiveIndex(null);

  const navigateLightbox = (direction: number) => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (current + direction + obsessions.length) % obsessions.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") navigateLightbox(1);
      if (event.key === "ArrowLeft") navigateLightbox(-1);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section
      id="about"
      className="relative isolate min-h-screen overflow-hidden bg-cover bg-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      style={{
        backgroundImage: "url('/images/about/background-about.png')",
      }}
    >
      {/* Soft overlay to keep the scrapbook readable */}
      <div className="absolute inset-0 -z-10 bg-pink-950/10" />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-0">
        {/* LEFT: PHOTO BOOTH */}
        <motion.div
          className="relative z-0 mx-auto w-full max-w-[680px] lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 24, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="overflow-hidden border border-neutral-400/80 bg-[#e9e9e9] shadow-[0_18px_45px_rgba(70,20,40,0.25)]">
            {/* macOS title bar */}
            <div className="relative flex h-8 items-center justify-between border-b border-neutral-400 bg-gradient-to-b from-[#f9f9f9] to-[#d9d9d9] px-3">
              <div className="flex items-center gap-[5px]">
                <span className="h-[11px] w-[11px] rounded-full border border-[#d85b54] bg-[#ff6259]" />
                <span className="h-[11px] w-[11px] rounded-full border border-[#d5a23c] bg-[#ffbd2e]" />
                <span className="h-[11px] w-[11px] rounded-full border border-[#45a45b] bg-[#28c840]" />
              </div>

              <span className="absolute left-1/2 -translate-x-1/2 text-[11px] font-medium text-neutral-700">
                Photo Booth
              </span>

              <span className="w-10" />
            </div>

            {/* Portrait */}
            <div className="relative aspect-[4/3] bg-[#d7c4ca] lg:aspect-[3/2]">
              <Image
                src={portrait}
                alt="A portrait of Nadhira"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-200/10 via-transparent to-black/10" />
            </div>

            {/* Photo Booth controls */}
            <div className="flex h-12 items-center justify-between border-t border-neutral-300 bg-gradient-to-b from-[#fafafa] to-[#e3e3e3] px-4">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <span className="grid h-6 w-6 place-items-center border border-neutral-300 bg-white text-[10px]">
                  ▦
                </span>
                <span className="grid h-6 w-6 place-items-center border border-neutral-300 bg-[#dce7f7] text-[10px]">
                  ▰
                </span>
                <span className="grid h-6 w-6 place-items-center border border-neutral-300 bg-white text-[10px]">
                  ▤
                </span>
              </div>

              <div className="grid h-9 w-9 place-items-center rounded-full border-[3px] border-white bg-[#d85a54] shadow-sm">
                <span className="h-4 w-4 rounded-full border-2 border-white" />
              </div>

              <span className="w-10" />
            </div>
          </div>

          {/* Location sticker */}
          <motion.div
            className="relative mt-6 inline-flex max-w-full items-center rounded-full bg-[#f5f2f4] px-4 py-2 text-base text-neutral-900 shadow-md sm:text-lg lg:-ml-1 lg:mt-10 lg:px-5 lg:py-3 lg:text-xl"
            whileHover={{ y: -3, rotate: -1 }}
            transition={{ duration: 0.2 }}
          >
            based in Yogyakarta
            <span className="absolute -right-2 -top-3 grid h-8 w-8 place-items-center rounded-full border border-pink-100 bg-white shadow-sm">
              <Heart size={18} fill="#ff3864" stroke="#ff3864" />
            </span>
          </motion.div>
        </motion.div>

        {/* CENTER: NOTES WINDOW */}
        <motion.div
          className="relative z-20 mx-auto w-full max-w-[490px] lg:col-span-5 lg:col-start-4 lg:row-start-1 lg:mx-0 lg:mt-36 lg:max-w-none lg:translate-x-12"
          initial={{ opacity: 0, y: 28, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-[14px] bg-[#faf7f2] text-[#171717] shadow-[0_20px_55px_rgba(60,20,35,0.2)]">
            {/* Notes toolbar */}
            <div className="flex h-[62px] items-center justify-between px-5 sm:px-7">
              <div className="flex items-center gap-2 text-[#e9a51b]">
                <ChevronLeft size={25} strokeWidth={1.5} />
                <span className="text-lg font-semibold">Notes</span>
              </div>

              <div className="flex items-center gap-5 text-[#e9a51b]">
                <Share size={23} strokeWidth={1.6} />
                <MoreHorizontal size={28} strokeWidth={1.6} />
              </div>
            </div>

            {/* Notes content */}
            <div className="px-5 pb-6 sm:px-6 sm:pb-7">
              <h2 className="mb-3 text-[24px] font-bold tracking-tight text-[#33351e] sm:text-[27px]">
                Hi! I’m Nadhira
              </h2>

              <div className="space-y-4 text-[15px] leading-[1.6] sm:text-[17px] sm:leading-[1.6]">
                <p>
                  I’m an Information Technology graduate with a focus on Data
                  Science, Artificial Intelligence, and Web Development. I love
                  turning data into insights, building useful applications, and
                  exploring new technologies.
                </p>
                <p>
                  A highly adaptable and fast learner who is eager to learn,
                  grow, and take on new challenges. &lt;3
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: OBSESSIONS COLLAGE */}
        <motion.div
          className="relative z-10 w-full lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:pt-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="mb-7 text-center text-2xl font-medium tracking-tight text-white drop-shadow-[0_2px_5px_rgba(60,10,30,0.55)] sm:text-3xl lg:text-left lg:text-[20px]">
            (things i obsessed with...)
          </h2>

          <div className="mx-auto grid max-w-[250px] grid-cols-2 gap-3 sm:gap-4 lg:gap-3 xl:gap-4">
            {obsessions.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title}: ${item.subtitle}`}
                className="group relative aspect-square overflow-hidden rounded-[10px] border-[7px] border-[#ff6b96] bg-[#ffb8cd] shadow-[0_6px_14px_rgba(80,10,40,0.18)] outline-none transition-colors hover:border-[#ff477d] focus-visible:ring-4 focus-visible:ring-white"
                whileHover={{
                  y: -5,
                  rotate: index % 2 === 0 ? -2 : 2,
                  scale: 1.025,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 40vw, 15vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-black/55 px-1 py-2 text-center text-xs font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeObsession && (
          <motion.div
            key="obsession-lightbox"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeObsession.title} photo and description`}
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                navigateLightbox(-1);
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 sm:left-6 sm:p-3"
            >
              <ChevronLeft size={28} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeObsession.title}
                className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#faf7f2] shadow-2xl md:flex-row"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="relative min-h-[240px] flex-1  md:min-h-[480px]">
                  <Image
                    src={activeObsession.src}
                    alt={activeObsession.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 55vw"
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="flex w-full flex-col justify-center p-6 sm:p-8 md:w-[310px] md:shrink-0">
                  <h3 className="text-3xl font-bold tracking-tight text-[#33351e]">
                    {activeObsession.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {activeObsession.subtitle}
                  </p>

                  <div className="my-5 h-px w-full bg-[#eadedb]" />

                  <p className="text-[15px] leading-7 text-neutral-700">
                    {activeObsession.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {String(activeIndex! + 1).padStart(2, "0")} /{" "}
                      {String(obsessions.length).padStart(2, "0")}
                    </span>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={() => navigateLightbox(-1)}
                        className="rounded-full border border-[#e6d7d4] p-2 transition hover:bg-[#f0e6e3]"
                      >
                        <ChevronLeft size={19} />
                      </button>

                      <button
                        type="button"
                        aria-label="Next photo"
                        onClick={() => navigateLightbox(1)}
                        className="rounded-full border border-[#e6d7d4] p-2 transition hover:bg-[#f0e6e3]"
                      >
                        <ChevronRight size={19} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                navigateLightbox(1);
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 sm:right-6 sm:p-3"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
