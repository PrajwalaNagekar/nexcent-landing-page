import Image from "next/image";

import { Stat } from "@/types/stats";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({
  stat,
}: StatCardProps) {
  return (
    <div
      className="
        flex
        h-[60px]
        w-full
        items-center
        gap-[16px]

        lg:w-[255px]
      "
    >
      {/* Icon */}
      <div
        className="
          relative
          h-[48px]
          w-[48px]
          shrink-0
        "
      >
        <Image
          src={stat.icon}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Value + Label */}
      <div
        className="
          flex
          h-[60px]
          w-full
          flex-col
          justify-center

          lg:w-[191px]
        "
      >
        <p
          className="
            m-0
            whitespace-nowrap
            font-['Inter']
            text-[28px]
            font-semibold
            leading-[36px]
            text-[#4D4D4D]
          "
        >
          {stat.value}
        </p>

        <p
          className="
    m-0
    h-[24px]
    w-full
    whitespace-nowrap
    font-['Inter']
    text-[14px]
    font-normal
    leading-[24px]
    text-[#717171]

    lg:w-[191px]
  "
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
}