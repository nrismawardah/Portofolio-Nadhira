"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  MoreHorizontal,
  Share,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";

type Obsession = {
  title: string;
  subtitle: string;
  src: string;
  description: string;
};

const obsessions: Obsession[] = [
  {
    title: "Joy",
    subtitle: "a little appreciation for her effortless charm",
    src: "/images/about/joy.jpg",
    description:
      "a fan of her bright energy, timeless visuals, and the kind of presence that makes every appearance memorable.",
  },
  {
    title: "Movies",
    subtitle: "plot twists over predictable endings",
    src: "/images/about/movie.jpg",
    description:
      "thrillers, mysteries, and dystopian stories are my favorites. i love films that keep me guessing and leave me thinking long after the credits roll.",
  },
  {
    title: "Doja Cat",
    subtitle: "genre-bending music on repeat",
    src: "/images/about/doja-cat.jpg",
    description:
      "her music keeps my playlists unpredictable. from catchy hooks to bold production, there's always something interesting to listen to.",
  },
  {
    title: "TREASURE",
    subtitle: "good music, better company",
    src: "/images/about/treasure.jpg",
    description:
      "their music and treasure map episodes are my go-to comfort watch. a little reminder that entertainment can make an ordinary day better.",
  },
  {
    title: "Painting",
    subtitle: "my favorite way to slow down",
    src: "/images/about/painting.jpg",
    description:
      "painting gives me room to experiment, make a mess, and enjoy the process without needing every result to be perfect.",
  },
  {
    title: "The Sims",
    subtitle: "building little worlds, one sim at a time",
    src: "/images/about/sims.jpg",
    description:
      "from designing houses to creating chaotic storylines, i love the freedom to build worlds and tell stories my own way.",
  },
  {
    title: "Tiramisu",
    subtitle: "my weakness has layers",
    src: "/images/about/tiramisu.jpg",
    description:
      "coffee, cocoa, and creamy layers. some things don't need a complicated explanation to be a favorite.",
  },
  {
    title: "Studio Ghibli",
    subtitle: "somewhere magical",
    src: "/images/about/ghibli.jpg",
    description:
      "i love the quiet details, imaginative worlds, and gentle yet meaningful stories that make these films feel comforting and thought-provoking.",
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
      className="relative isolate min-h-screen overflow-x-clip bg-cover bg-center px-5 py-10 sm:px-8 sm:py-12 md:h-dvh md:min-h-0 md:overflow-hidden md:px-6 md:py-5 lg:h-dvh lg:min-h-0 lg:overflow-hidden lg:px-6 lg:py-6 xl:px-10"
      style={{
        backgroundImage: "url('/images/about/background-about.png')",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-pink-950/10" />

      {/* MAIN GRID */}
      <div
        className=" mx-auto grid w-full max-w-[1440px] grid-cols-2 items-start gap-x-3 gap-y-7
    sm:gap-x-5 sm:gap-y-10

    md:h-full md:grid-cols-12 md:grid-rows-[auto_auto]
    md:content-center md:items-start
    md:gap-x-4 md:gap-y-5

    lg:grid-rows-1 lg:content-normal
    lg:items-center lg:gap-0
  "
      >
        {/* PHOTO BOOTH */}
        <motion.div
          className="
  relative z-0 col-span-2 mx-auto w-full max-w-[680px]

  md:col-span-8 md:col-start-1 md:row-start-1
  md:mx-0 md:max-w-none

  lg:col-span-6 lg:col-start-1 lg:row-start-1
"
          initial={{ opacity: 0, y: 24, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="overflow-hidden border border-neutral-400/80 bg-[#e9e9e9] shadow-[0_18px_45px_rgba(70,20,40,0.25)]">
            {/* macOS title bar */}
            <div className="relative flex h-7 items-center justify-between border-b border-neutral-400 bg-gradient-to-b from-[#f9f9f9] to-[#d9d9d9] px-3 sm:h-8">
              <div className="flex items-center gap-[5px]">
                <span className="h-[9px] w-[9px] rounded-full border border-[#d85b54] bg-[#ff6259] sm:h-[11px] sm:w-[11px]" />
                <span className="h-[9px] w-[9px] rounded-full border border-[#d5a23c] bg-[#ffbd2e] sm:h-[11px] sm:w-[11px]" />
                <span className="h-[9px] w-[9px] rounded-full border border-[#45a45b] bg-[#28c840] sm:h-[11px] sm:w-[11px]" />
              </div>

              <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-700 sm:text-[11px]">
                Photo Booth
              </span>

              <span className="w-8 sm:w-10" />
            </div>

            {/* Portrait */}
            <div className="relative aspect-[4/3] bg-[#d7c4ca] md:aspect-[4/3] lg:aspect-[16/11]">
              <Image
                src={portrait}
                alt="A portrait of Nadhira"
                fill
                priority
                sizes="(max-width: 1024px) 94vw, 38vw"
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

              {/* Red camera button */}
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d85a54] text-white shadow-sm">
                <Camera size={20} strokeWidth={2.2} />
              </div>

              <span className="w-10" />
            </div>
          </div>

          {/* Location sticker */}
          <motion.div
            className="
  relative mt-3 inline-flex max-w-full items-center
  rounded-full bg-[#f5f2f4] px-4 py-2
  text-xs text-neutral-900 shadow-md

  sm:mt-3 sm:px-4 sm:py-2 sm:text-base

  md:mt-3 md:px-6 md:py-2 md:text-md

  lg:-ml-1 lg:mt-4 lg:px-8 lg:py-2 lg:text-xl
"
            whileHover={{ y: -3, rotate: -1 }}
            transition={{ duration: 0.2 }}
          >
            based in Yogyakarta
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

        {/* NOTES */}
        <motion.div
          className="
  relative z-20 col-span-1 w-full min-w-0

  md:col-span-7 md:col-start-6 md:row-start-1
  md:ml-[-5%] md:mt-35 md:self-start

  lg:col-span-5 lg:col-start-4 lg:ml-10
  lg:mt-40 lg:translate-x-12
"
          initial={{ opacity: 0, y: 28, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-[10px] bg-[#faf7f2] text-[#171717] shadow-[0_12px_30px_rgba(60,20,35,0.2)] sm:rounded-[14px] sm:shadow-[0_20px_55px_rgba(60,20,35,0.2)]">
            {/* Notes toolbar */}
            <div className="flex h-9 items-center justify-between px-2 sm:h-[48px] sm:px-5 lg:h-[44px]">
              <div className="flex items-center gap-0.5 text-[#e9a51b] sm:gap-2">
                <ChevronLeft
                  size={18}
                  strokeWidth={1.5}
                  className="sm:h-[25px] sm:w-[25px]"
                />
                <span className="text-xs font-semibold sm:text-lg">Notes</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#e9a51b] sm:gap-5">
                <Share
                  size={15}
                  strokeWidth={1.6}
                  className="sm:h-[23px] sm:w-[23px]"
                />
                <MoreHorizontal
                  size={19}
                  strokeWidth={1.6}
                  className="sm:h-7 sm:w-7"
                />
              </div>
            </div>

            {/* Notes content */}
            <div className="px-3 pb-3 sm:px-5 sm:pb-5 md:px-3 md:pb-3 lg:px-5 lg:pb-4">
              <h2 className="mb-2 text-[15px] font-bold leading-tight tracking-tight text-[#33351e] sm:mb-3 sm:text-[25px] md:mb-2 md:text-[18px] lg:text-[24px]">
                Hi! I’m Nadhira
              </h2>
              <div className="space-y-2 text-[10px] leading-[1.5] sm:space-y-3 sm:text-[16px] sm:leading-[1.5] md:space-y-2 md:text-[11px] lg:text-[14px]">
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

        {/* THINGS I'M OBSESSED WITH */}
        <motion.div
          className="
  relative z-10 col-span-1 w-full min-w-0

  md:col-span-12 md:col-start-1 md:row-start-2
  md:pt-0

  lg:col-span-3 lg:col-start-10 lg:row-start-1
  lg:pt-4
"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
        >
          <h2
            className="
  mb-2 text-center text-[13px] font-medium leading-tight
  tracking-tight text-white
  drop-shadow-[0_2px_5px_rgba(60,10,30,0.55)]

  sm:mb-4 sm:text-2xl

  md:mb-3 md:text-center md:text-[23px]

  lg:mb-3 lg:text-left lg:text-[20px]
"
          >
            (little things i love...)
          </h2>

          <div
            className="
  mx-auto grid w-full max-w-[250px]
  grid-cols-2 gap-1.5

  sm:gap-3

  md:max-w-[560px] md:grid-cols-4 md:gap-3

  lg:max-w-[220px] lg:grid-cols-2 lg:gap-2
  xl:max-w-[220px] xl:gap-2.5
"
          >
            {obsessions.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title}: ${item.subtitle}`}
                className="group relative aspect-square overflow-hidden rounded-[6px] border-[4px] border-[#ff6b96] bg-[#ffb8cd] shadow-[0_6px_14px_rgba(80,10,40,0.18)] outline-none transition-colors hover:border-[#ff477d] focus-visible:ring-4 focus-visible:ring-white sm:rounded-[10px] sm:border-[7px] md:rounded-[7px] md:border-[4px] lg:rounded-[10px] lg:border-[7px]"
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
                  sizes="(max-width: 1024px) 20vw, 15vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-black/55 px-1 py-1 text-center text-[9px] font-medium text-white transition-transform duration-300 group-hover:translate-y-0 sm:py-2 sm:text-xs">
                  {item.title}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      {typeof document !== "undefined" &&
        createPortal(
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
                    className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl bg-[#faf7f2] shadow-2xl md:flex-row md:overflow-hidden"
                    onClick={(event) => event.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.97, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative min-h-[240px] flex-1 md:min-h-[480px]">
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
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
