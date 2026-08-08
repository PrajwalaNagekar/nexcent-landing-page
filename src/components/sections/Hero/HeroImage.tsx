import Image from "next/image";

import { HeroSlide } from "@/types/hero";

interface HeroImageProps {
  image: HeroSlide["image"];
}

export default function HeroImage({
  image,
}: HeroImageProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={391}
        height={407}
        priority
        className="h-auto w-full max-w-[391px] object-contain"
      />
    </div>
  );
}