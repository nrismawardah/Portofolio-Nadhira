"use client";

import Image from "next/image";
import { motion } from "motion/react";

type PhotoFrameProps = {
  src: string;
  alt: string;
  filename: string;
  width?: number | string;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function PhotoFrame({
  src,
  alt,
  filename,
  width = 320,
  priority = false,
  className = "",
  onClick,
}: PhotoFrameProps) {
  return (
    <motion.div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick();
        }
      }}
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{ duration: 0.2 }}
      className={`overflow-hidden rounded-[14px] bg-white shadow-lg ${
        onClick ? "cursor-zoom-in" : ""
      } ${className}`}
      style={{ width, transformOrigin: "center" }}
    >
      <div className="flex h-6 items-center bg-[#e5e5e5] px-2">
        <span className="truncate font-helvetica text-[9px] font-medium text-black">
          {filename}
        </span>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 40vw, 20vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
