import Image from "next/image";

type PhotoFrameProps = {
  src: string;
  alt: string;
  filename: string;
  width?: number | string;
  priority?: boolean;
  className?: string;
};

export default function PhotoFrame({
  src,
  alt,
  filename,
  width = 320,
  priority = false,
  className = "",
}: PhotoFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] bg-white shadow-lg ${className}`}
      style={{ width }}
    >
      {/* Filename bar */}
      <div className="flex h-6 items-center bg-[#e5e5e5] px-2">
        <span className="truncate font-helvetica text-[9px] font-medium text-black">
          {filename}
        </span>
      </div>

      {/* 4:5 image */}
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
    </div>
  );
}