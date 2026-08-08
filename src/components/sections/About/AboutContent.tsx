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
        h-[268px]
        w-[661px]
        flex-col
        gap-[32px]
      "
    >

      <h2
        className="
          m-0
          w-[601px]
          font-['Inter']
          text-[36px]
          font-semibold
          leading-[44px]
          text-[#4D4D4D]
        "
      >
        {data.title}
      </h2>


      <p
        className="
          m-0
          w-[601px]
          font-['Inter']
          text-[14px]
          font-normal
          leading-[20px]
          text-[#717171]
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