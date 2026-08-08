import Link from "next/link";

import { AboutData } from "@/types/about";

interface AboutContentProps {
  data: AboutData;
}

export default function AboutContent({
  data,
}: AboutContentProps) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-6
        
        sm:gap-7
        
        lg:h-[268px]
        lg:w-[661px]
        lg:gap-[32px]
      "
    >

      <h2
        className="
          m-0
          w-full
          font-['Inter']
          text-[28px]
          font-semibold
          leading-[36px]
          text-[#4D4D4D]
          
          sm:text-[32px]
          sm:leading-[40px]
          
          lg:w-[601px]
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        {data.title}
      </h2>


      <p
        className="
          m-0
          w-full
          font-['Inter']
          text-[14px]
          font-normal
          leading-[20px]
          text-[#717171]
          
          lg:w-[601px]
        "
      >
        {data.description}
      </p>


      <Link
        href={data.button.href}
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
          whitespace-nowrap
          text-white
        "
      >
        {data.button.label}
      </Link>
    </div>
  );
}