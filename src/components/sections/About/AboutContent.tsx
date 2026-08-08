import { AboutData } from "@/types/about";

interface AboutContentProps {
  data: AboutData;
}

export default function AboutContent({ data }: AboutContentProps) {
  return (
    <div
      className="
        flex
        w-[661px]
        flex-col
        gap-[32px]
      "
    >
      {/* Heading */}
      <h2
        className="
          m-0
          w-[601px]
          h-[88px]
          font-['Inter']
          text-[36px]
          font-semibold
          leading-[44px]
          tracking-[0%]
          text-[#4D4D4D]
        "
      >
        {data.title}
      </h2>

      {/* Description */}
      <p
        className="
          m-0
          w-[601px]
          h-[80px]
          font-['Inter']
          text-[14px]
          font-normal
          leading-[20px]
          tracking-[0%]
          text-[#717171]
        "
      >
        {data.description}
      </p>

      {/* Learn More Button */}
      <button
        type="button"
        className="
          flex
          h-[52px]
          w-[151px]
          shrink-0
          items-center
          justify-center
          rounded-[4px]
          bg-[#4CAF4F]
          px-[32px]
          py-[14px]
          font-['Inter']
          text-[16px]
          font-medium
          leading-[24px]
          tracking-[0%]
          text-white
          whitespace-nowrap
        "
      >
        Learn More
      </button>
    </div>
  );
}