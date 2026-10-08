import Image from "next/image";

type SmallPhotoFrameProps = {
  src: string;
  alt: string;
  filename: string;
  className?: string;
};

export default function SmallPhotoFrame({
  src,
  alt,
  filename,
  className = "",
}: SmallPhotoFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden border-[7px] border-white bg-white shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="150px"
          className="object-cover"
        />
      </div>

      {/* Filename */}
      <p className="mt-2 text-center font-helvetica text-sm text-black">
        {filename}
      </p>
    </div>
  );
}