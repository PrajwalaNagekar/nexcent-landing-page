interface HeroIndicatorsProps {
  count: number;
  activeIndex: number;
}

export default function HeroIndicators({
  count,
  activeIndex,
}: HeroIndicatorsProps) {
  return (
    <div
      className="flex h-[10px] w-fit items-center gap-[8px]"
      aria-label="Hero carousel indicators"
    >
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`h-[10px] w-[10px] shrink-0 rounded-full ${
            index === activeIndex
              ? "bg-[#4CAF4F]"
              : "bg-[#C8E6C9]"
          }`}
        />
      ))}
    </div>
  );
}