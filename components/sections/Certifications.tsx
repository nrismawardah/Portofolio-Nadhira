"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Heart, X } from "lucide-react";

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
      "right-[-24px] bottom-[18%] w-[44px] sm:right-[-32px] sm:w-[58px]",
    stickerRotation: -8,
    stickerDuration: 4,
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
      "right-[-10px] top-[-28px] w-[46px] sm:right-[-18px] sm:top-[-34px] sm:w-[62px]",
    stickerRotation: 8,
    stickerDuration: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_12%,#e4f5d2_30%,#b5e68a_52%,#8acd01_78%,#8acd01_100%)] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pt-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          whileHover={{
            scale: 1.15,
            rotate: 5,
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 0.2,
            },
            rotate: {
              duration: 0.2,
            },
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
          className="mb-8 flex justify-start sm:mb-9"
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

        {/* Certification cards and independent stickers */}
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
          {" "}
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="relative mx-auto w-full min-w-0 max-w-[460px] md:max-w-[430px]"
            >
              {" "}
              {/* Independent sticker: does not move with the card */}
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
                  scale: {
                    duration: 0.2,
                  },
                  rotate: {
                    duration: 0.2,
                  },
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
              {/* Card */}
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
                {/* Card title */}
                <div className="rounded-t-md bg-[#dcdadd] px-3 py-1.5 sm:px-3.5">
                  <h3 className="text-sm font-bold leading-snug text-black sm:text-base">
                    {cert.title}
                  </h3>
                </div>

                {/* Clickable certificate image */}
                {/* Clickable certificate image */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(cert)}
                  aria-label={`View ${cert.title} certificate`}
                  className="group relative block aspect-[1.6/1] w-full overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 767px) 100vw, 460px"
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.025]"
                  />

                  <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-black opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 sm:text-xs">
                    View certificate ↗
                  </span>
                </button>

                {/* Issuer, period and skills */}
                <div className="rounded-b-md bg-[#dcdadd] px-3 pb-3 pt-2.5 sm:px-3.5 sm:pb-4">
                  <p className="text-sm leading-snug tracking-tight text-black sm:text-base">
                    {cert.issuer}
                  </p>

                  <p className="text-sm leading-snug tracking-tight text-black sm:text-base">
                    {cert.period}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
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

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              key="certificate-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
              onClick={() => setSelectedCertificate(null)}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 sm:right-6 sm:top-6"
              >
                <X size={22} />
              </button>

              {/* Certificate image */}
              <motion.div
                initial={{ scale: 0.94, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 10 }}
                transition={{ duration: 0.2 }}
                className="relative h-[75vh] w-full max-w-5xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages notification */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ y: -3, scale: 1.005 }}
          className="relative ml-auto mt-9 w-full max-w-[390px] sm:mt-10 sm:max-w-[430px] md:mr-[-2%] md:w-[78%]"
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
    </section>
  );
}
