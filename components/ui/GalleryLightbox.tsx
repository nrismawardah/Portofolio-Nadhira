"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  filename: string;
};

type GalleryLightboxProps = {
  photos: GalleryPhoto[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const photo = photos[activeIndex];

  // Lock scroll only while the lightbox is mounted.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Keyboard navigation.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % photos.length);
      }

      if (event.key === "ArrowLeft") {
        onNavigate((activeIndex - 1 + photos.length) % photos.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, photos.length, onClose, onNavigate]);

  if (!photo) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {/* Close button */}
      <motion.button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.08, duration: 0.2 }}
      >
        <X size={24} />
      </motion.button>

      {/* Previous button */}
      <button
        type="button"
        aria-label="Previous photo"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex - 1 + photos.length) % photos.length);
        }}
        className="absolute left-2 z-10 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 sm:left-6 sm:p-3"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Photo and filename */}
      <div
        className="flex max-h-[88vh] max-w-[90vw] flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={photo.src}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="relative h-[75vh] max-h-[720px] w-[88vw] max-w-[1000px]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 88vw, 1000px"
                className="object-contain"
                priority
              />
            </div>

            <p className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              {photo.filename} · {activeIndex + 1} / {photos.length}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next button */}
      <button
        type="button"
        aria-label="Next photo"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex + 1) % photos.length);
        }}
        className="absolute right-2 z-10 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 sm:right-6 sm:p-3"
      >
        <ChevronRight size={28} />
      </button>
    </motion.div>
  );
}
