"use client";

import Image from "next/image";
import { motion } from "motion/react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import SmallPhotoFrame from "@/components/ui/SmallPhotoFrame";
import TextHighlight from "@/components/ui/TextHighlight";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative h-[100svh] min-h-0 w-full
        overflow-hidden
        bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/images/hero/background-hero.png')",
      }}
    >
      {/* =====================================================
          DESKTOP / TABLET LAYOUT
          Tidak diubah dari layout kamu sekarang
      ====================================================== */}

      {/* LEFT PHOTO — GRADUATION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          absolute left-[3%] top-[13%] z-20
          max-md:hidden
        "
      >
        <PhotoFrame
          src="/images/hero/graduate.jpeg"
          alt="Nadhira at graduation"
          filename="graduate.png"
          width="clamp(200px, 19vw, 290px)"
          priority
        />
      </motion.div>

      {/* RIGHT PHOTO — ME */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="
          absolute right-[15%] top-[15%] z-20
          max-md:hidden
        "
      >
        <PhotoFrame
          src="/images/hero/me.jpeg"
          alt="Nadhira"
          filename="me.png"
          width="clamp(180px, 16vw, 245px)"
          priority
        />
      </motion.div>

      {/* CENTER CONTENT — DESKTOP */}
      <div
        className="
          absolute inset-0 z-20
          flex items-center justify-center
          px-6
          max-md:hidden
        "
      >
        <div className="mt-[5%] flex w-full max-w-[900px] flex-col items-center text-center">
          {/* NADHIRA */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-helvetica
              text-[clamp(3.5rem,8vw,8.5rem)]
              font-normal
              leading-[0.8]
              tracking-[-0.07em]
            "
          >
            Nadhira
          </motion.h1>

          {/* RISMAWARDAH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative -mt-1"
          >
            <span
              className="
                absolute
                inset-x-[-2%]
                top-[48%]
                z-0
                h-[45%]
                -rotate-1
                bg-[#ffe44f]
              "
            />

            <span
              className="
                relative z-10
                font-condensed
                text-[clamp(3rem,7.5vw,8rem)]
                italic
                leading-none
              "
            >
              Rismawardah
            </span>
          </motion.div>

          {/* INTRO */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
              mt-12
              text-center
              font-helvetica
              text-base
              leading-[1.45]
              sm:text-lg
            "
          >
            <span className="block">
              intrested in building solutions through
            </span>

            <span className="block">
              <TextHighlight>
                data, AI, and web development
              </TextHighlight>
              {" and"}
            </span>

            <span className="block">
              enjoy turning complex problems into
            </span>

            <span className="block">
              <span className="relative inline-block">
                <span className="relative z-10">
                  meaningful projects
                </span>

                <span
                  className="
                    absolute
                    bottom-[-3px]
                    left-0
                    z-0
                    h-[2px]
                    w-full
                    border-b-2
                    border-dashed
                    border-[#e54848]
                  "
                />
              </span>
            </span>
          </motion.p>
        </div>
      </div>

      {/* COFFEE + LAPTOP — DESKTOP */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="
          absolute bottom-[4%] right-[2%] z-20
          max-md:hidden
        "
      >
        <PhotoFrame
          src="/images/hero/coffee+laptop.PNG"
          alt="Coffee and laptop"
          filename="coffee+laptop.png"
          width="clamp(220px, 20vw, 300px)"
        />
      </motion.div>

      {/* PAINTING — DESKTOP */}
      <div
        className="
          absolute bottom-[3%] left-[5%] z-10
          w-[9%] max-w-[140px]
          max-md:hidden
        "
      >
        <div
          className="
            absolute bottom-[14%] left-[4%]
            z-30 w-[135px]
            rotate-[-5deg]
          "
        >
          <SmallPhotoFrame
            src="/images/hero/painting.PNG"
            alt="Painting"
            filename="painting.jpg"
          />
        </div>
      </div>

      {/* JOGJA — DESKTOP */}
      <div
        className="
          absolute bottom-[1%] left-[12%] z-10
          w-[8%] max-w-[125px]
          max-md:hidden
        "
      >
        <div
          className="
            absolute bottom-[9%] left-[12%]
            z-40 w-[125px]
            rotate-[3deg]
          "
        >
          <SmallPhotoFrame
            src="/images/hero/jogja.jpg"
            alt="Yogyakarta"
            filename="jogja.jpg"
          />
        </div>
      </div>

      {/* HOMETOWN — DESKTOP */}
      <div
        className="
          absolute bottom-[20%] left-[18%] z-10
          w-[8%] max-w-[125px]
          max-md:hidden
        "
      >
        <div
          className="
            absolute bottom-[25%] left-[17%]
            z-10 w-[125px]
            rotate-[1deg]
          "
        >
          <SmallPhotoFrame
            src="/images/hero/hometown.jpg"
            alt="Hometown"
            filename="hometown.jpg"
          />
        </div>
      </div>

      {/* HEADPHONES — DESKTOP */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-[23%] top-[28%]
          z-50 w-[65px]
          rotate-[-8deg]
          max-md:hidden
        "
      >
        <Image
          src="/stickers/headphone.png"
          alt=""
          width={150}
          height={150}
          className="h-auto w-full"
        />
      </motion.div>

      {/* EYES — DESKTOP */}
      <div
        className="
          absolute right-[2%] top-[17%]
          z-20 w-[65px]
          max-md:hidden
        "
      >
        <Image
          src="/stickers/eyes.png"
          alt=""
          width={150}
          height={150}
          className="
            h-auto w-full
            rotate-[2deg]
          "
        />
      </div>

      {/* SPARKLES — DESKTOP */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute right-[34%] top-[21%]
          z-50 w-[55px]
          rotate-[3deg]
          max-md:hidden
        "
      >
        <Image
          src="/stickers/sparkles.png"
          alt=""
          width={120}
          height={120}
          className="h-auto w-full"
        />
      </motion.div>

      {/* STAR — DESKTOP */}
      <div
        className="
          absolute bottom-[29%] left-[2%]
          z-20 w-[55px]
          max-md:hidden
        "
      >
        <Image
          src="/stickers/star.png"
          alt=""
          width={120}
          height={120}
          className="
            h-auto w-full
            rotate-[-8deg]
          "
        />
      </div>

      {/* LAPTOP STICKER — DESKTOP */}
      <div
        className="
          absolute bottom-[10%] right-[25%]
          z-20 w-[65px]
          rotate-[-10deg]
          max-md:hidden
        "
      >
        <Image
          src="/stickers/laptop.png"
          alt=""
          width={150}
          height={150}
          className="h-auto w-full"
        />
      </div>

      {/* =====================================================
          MOBILE LAYOUT
          <= 768px
      ====================================================== */}

      {/* -----------------------------------------------------
          MOBILE — GRADUATION
      ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
  absolute
  left-[9%]
  top-[10%]
  z-20
  w-[24vw]
  max-w-[105px]
  min-w-[82px]
  md:hidden
"
      >
        <PhotoFrame
          src="/images/hero/graduate.jpeg"
          alt="Nadhira at graduation"
          filename="graduate.png"
          width="100%"
          priority
        />
      </motion.div>

      {/* -----------------------------------------------------
          MOBILE — ME
      ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="
          absolute
          right-[8%]
          bottom-[30%]
          z-20
          w-[20vw]
          max-w-[92px]
          min-w-[75px]
          md:hidden
        "
      >
        <PhotoFrame
          src="/images/hero/me.jpeg"
          alt="Nadhira"
          filename="me.png"
          width="100%"
          priority
        />
      </motion.div>

      {/* -----------------------------------------------------
          MOBILE — CENTER TITLE
      ------------------------------------------------------ */}
      <div
        className="
          absolute
          left-1/2
          top-[28%]
          z-20
          w-[92%]
          -translate-x-1/2
          text-center
          md:hidden
        "
      >
        {/* NADHIRA */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            font-helvetica
            text-[clamp(3.2rem,16vw,5rem)]
            font-normal
            leading-[0.82]
            tracking-[-0.07em]
          "
        >
          Nadhira
        </motion.h1>

        {/* RISMAWARDAH */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-1 inline-block"
        >
          <span
            className="
              absolute
              left-[-3%]
              right-[-3%]
              top-[48%]
              z-0
              h-[45%]
              -rotate-1
              bg-[#ffe44f]
            "
          />

          <span
            className="
              relative z-10
              whitespace-nowrap
              font-condensed
              text-[clamp(2.7rem,13vw,4.4rem)]
              italic
              leading-none
            "
          >
            Rismawardah
          </span>
        </motion.div>
      </div>

      {/* -----------------------------------------------------
          MOBILE — INTRO
      ------------------------------------------------------ */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="
          absolute
          left-1/2
          top-[43%]
          z-20
          w-[78%]
          -translate-x-1/2
          text-center
          font-helvetica
          text-[clamp(0.75rem,3.2vw,1rem)]
          leading-[1.45]
          md:hidden
        "
      >
        <span className="block">
          intrested in building solutions through
        </span>

        <span className="block">
          <TextHighlight>
            data, AI, and web development
          </TextHighlight>
          {" and"}
        </span>

        <span className="block">
          enjoy turning complex problems into
        </span>

        <span className="block">
          <span className="relative inline-block">
            <span className="relative z-10">
              meaningful projects
            </span>

            <span
              className="
                absolute
                bottom-[-3px]
                left-0
                z-0
                h-[2px]
                w-full
                border-b-2
                border-dashed
                border-[#e54848]
              "
            />
          </span>
        </span>
      </motion.p>

      {/* -----------------------------------------------------
          MOBILE — HEADPHONES
      ------------------------------------------------------ */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[29%]
          top-[13%]
          z-30
          w-[38px]
          rotate-[-8deg]
          md:hidden
        "
      >
        <Image
          src="/stickers/headphone.png"
          alt=""
          width={100}
          height={100}
          className="h-auto w-full"
        />
      </motion.div>

      {/* -----------------------------------------------------
          MOBILE — EYES
      ------------------------------------------------------ */}
      <div
        className="
          absolute
          right-[2%]
          bottom-[32%]
          z-30
          w-[42px]
          rotate-[2deg]
          md:hidden
        "
      >
        <Image
          src="/stickers/eyes.png"
          alt=""
          width={100}
          height={100}
          className="h-auto w-full"
        />
      </div>

      {/* -----------------------------------------------------
          MOBILE — SPARKLES
      ------------------------------------------------------ */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[15%]
          top-[27%]
          z-30
          w-[32px]
          rotate-[3deg]
          md:hidden
        "
      >
        <Image
          src="/stickers/sparkles.png"
          alt=""
          width={80}
          height={80}
          className="h-auto w-full"
        />
      </motion.div>

      {/* -----------------------------------------------------
          MOBILE — STAR
      ------------------------------------------------------ */}
      <div
        className="
          absolute
          left-[3%]
          bottom-[35%]
          z-30
          w-[30px]
          rotate-[-8deg]
          md:hidden
        "
      >
        <Image
          src="/stickers/star.png"
          alt=""
          width={80}
          height={80}
          className="h-auto w-full"
        />
      </div>

      {/* -----------------------------------------------------
          MOBILE — SMALL PHOTOS GROUP
      ------------------------------------------------------ */}
      <div
        className="
          absolute
          bottom-[15%]
          left-[8%]
          z-20
          h-[25%]
          w-[42%]
          md:hidden
        "
      >
        {/* PAINTING */}
        <div
          className="
            absolute
            bottom-[30%]
            left-[0]
            w-[75px]
            rotate-[-5deg]
          "
        >
          <SmallPhotoFrame
            src="/images/hero/painting.PNG"
            alt="Painting"
            filename="painting.jpg"
          />
        </div>

        {/* JOGJA */}
        <div
          className="
            absolute
            bottom-[0]
            left-[32%]
            w-[65px]
            rotate-[3deg]
          "
        >
          <SmallPhotoFrame
            src="/images/hero/jogja.jpg"
            alt="Yogyakarta"
            filename="jogja.jpg"
          />
        </div>

        {/* HOMETOWN */}
        <div
          className="
            absolute
            bottom-[55%]
            right-[0]
            w-[72px]
            rotate-[1deg]
          "
        >
          <SmallPhotoFrame
            src="/images/hero/hometown.jpg"
            alt="Hometown"
            filename="hometown.jpg"
          />
        </div>
      </div>

      {/* -----------------------------------------------------
          MOBILE — COFFEE + LAPTOP
      ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="
          absolute
          top-[12%]
          right-[4%]
          z-20
          w-[23vw]
          max-w-[100px]
          min-w-[82px]
          md:hidden
        "
      >
        <PhotoFrame
          src="/images/hero/coffee+laptop.PNG"
          alt="Coffee and laptop"
          filename="coffee+laptop.png"
          width="100%"
        />
      </motion.div>

      {/* -----------------------------------------------------
          MOBILE — LAPTOP STICKER
      ------------------------------------------------------ */}
      <div
        className="
          absolute
          top-[20%]
          right-[30%]
          z-30
          w-[35px]
          rotate-[-10deg]
          md:hidden
        "
      >
        <Image
          src="/stickers/laptop.png"
          alt=""
          width={80}
          height={80}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}