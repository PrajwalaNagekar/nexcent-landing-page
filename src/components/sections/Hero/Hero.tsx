import HeroIndicators from "./HeroIndicators";
import HeroSlide from "./HeroSlide";

import { HeroData } from "@/types/hero";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const activeSlide = data.slides[data.activeSlide];

  if (!activeSlide) {
    return null;
  }

  return (
    <section id="home" className="w-full bg-[#F5F7FA]">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[599px]
          w-full
          max-w-[1440px]
          flex-col
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:min-h-[599px]
          lg:justify-between
          lg:px-[144px]
          lg:py-[96px]
        "
      >
        <HeroSlide slide={activeSlide} />

        <div className="mt-[64px] flex w-full justify-center lg:mt-0">
          <HeroIndicators
            count={data.indicatorCount}
            activeIndex={data.activeSlide}
          />
        </div>
      </div>
    </section>
  );
}