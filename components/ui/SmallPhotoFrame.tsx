"use client";

import Image from "next/image";
import { motion } from "motion/react";

type SmallPhotoFrameProps = {
  src: string;
  alt: string;
  filename: string;
  className?: string;
  onClick?: () => void;
};

export default function SmallPhotoFrame({
  src,
  alt,
  filename,
  className = "",
  onClick,
}: SmallPhotoFrameProps) {
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
        scale: 1.04,
        y: -3,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      transition={{ duration: 0.2 }}
      className={`${className} ${onClick ? "cursor-zoom-in" : ""}`}
      style={{ transformOrigin: "center" }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden border-[7px] border-white bg-white shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="150px"
          className="object-cover"
        />
      </div>

      <p className="mt-2 text-center font-helvetica text-sm text-black">
        {filename}
      </p>
    </motion.div>
  );
}
