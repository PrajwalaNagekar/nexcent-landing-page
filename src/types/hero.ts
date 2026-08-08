export interface HeroSlide {
  id: string;
  title: string;
  highlight: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface HeroData {
  slides: HeroSlide[];
  activeSlide: number;
  indicatorCount: number;
}