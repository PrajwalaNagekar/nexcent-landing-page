import { AboutData } from "@/types/about";

interface AboutContentProps {
  data: AboutData;
}

export default function AboutContent({ data }: AboutContentProps) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-[20px]
        
        sm:gap-[24px]
        
        lg:w-[661px]
        lg:gap-[32px]
      "
    >
      {/* Heading */}
      <h2
        className="
          m-0
          w-full
          font-['Inter']
          text-[24px]
          font-semibold
          leading-[32px]
          tracking-[0%]
          text-[#4D4D4D]
          
          sm:text-[28px]
          sm:leading-[36px]
          
          lg:w-[601px]
          lg:h-[88px]
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        {data.title}
      </h2>

      {/* Description */}
      <p
        className="
          m-0
          w-full
          font-['Inter']
          text-[14px]
          font-normal
          leading-[20px]
          tracking-[0%]
          text-[#717171]
          
          sm:text-[15px]
          sm:leading-[22px]
          
          lg:w-[601px]
          lg:h-[80px]
          lg:text-[14px]
          lg:leading-[20px]
        "
      >
        {data.description}
      </p>

      {/* Learn More Button */}
      <button
        type="button"
        className="
          flex
          h-[48px]
          w-full
          max-w-[151px]
          items-center
          justify-center
          rounded-[4px]
          bg-[#4CAF4F]
          px-[24px]
          py-[12px]
          font-['Inter']
          text-[15px]
          font-medium
          leading-[22px]
          tracking-[0%]
          text-white
          whitespace-nowrap
          
          sm:h-[50px]
          sm:text-[15.5px]
          sm:leading-[23px]
          
          lg:h-[52px]
          lg:px-[32px]
          lg:py-[14px]
          lg:text-[16px]
          lg:leading-[24px]
          lg:shrink-0
        "
      >
        Learn More
      </button>
    </div>
  );
}