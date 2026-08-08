import Link from "next/link";

import Button from "@/components/common/Button";
import { HeroSlide } from "@/types/hero";

interface HeroContentProps {
  slide: HeroSlide;
}

export default function HeroContent({
  slide,
}: HeroContentProps) {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <h1 className="w-full text-[40px] font-semibold leading-[48px] tracking-[0] text-[#4D4D4D] sm:text-[48px] sm:leading-[58px] lg:text-[64px] lg:leading-[76px]">
        {slide.title}

        <span className="block text-[#4CAF4F]">
          {slide.highlight}
        </span>
      </h1>

      <p className="w-full text-[14px] font-normal leading-[20px] text-[#717171] sm:text-[16px] sm:leading-[24px] lg:text-[16px] lg:leading-[24px]">
        {slide.description}
      </p>

      <Link href={slide.cta.href}>
        <Button size="lg">
          {slide.cta.label}
        </Button>
      </Link>
    </div>
  );
}