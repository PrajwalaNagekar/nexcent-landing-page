import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import { HeroSlide as HeroSlideData } from "@/types/hero";

interface HeroSlideProps {
  slide: HeroSlideData;
}

export default function HeroSlide({
  slide,
}: HeroSlideProps) {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,657px)_391px] lg:gap-[104px]">
      <HeroContent slide={slide} />

      <HeroImage image={slide.image} />
    </div>
  );
}