import Image from "next/image";

import { CommunityCardData } from "@/types/community";

interface CommunityCardProps {
  card: CommunityCardData;
}

export default function CommunityCard({
  card,
}: CommunityCardProps) {
  return (
    <article
      className="
        flex
        w-full
        max-w-[299px]
        flex-col
        items-center
        gap-[8px]
        rounded-[8px]
        bg-white
        px-[24px]
        py-[20px]
        
        sm:h-[270px]
        sm:px-[28px]
        sm:py-[22px]
        
        lg:h-[280px]
        lg:w-[299px]
        lg:px-[16px]
        lg:py-[24px]
      "
      style={{
        borderRadius: "18px 5px 10px 5px",
        boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)",

      }}
    >
      {/* Icon Container */}
   <div
  className="
    relative
    flex
    items-center
    justify-center
    h-[65px]
    w-[65px]
    overflow-visible
  "
>
  {/* Small green background */}
  <div
    className="
      absolute
      top-[3px]
      left-[14px]
      z-0
      h-[62px]
      w-[68px]
      bg-[#E8F5E9]
    "
    style={{
      borderRadius: "14px 0 22px 0",
    }}
  />

  {/* Icon */}
  <Image
    src={card.icon}
    alt=""
    width={65}
    height={65}
    className="
      relative
      z-10
      h-[48px]
      w-[48px]
      object-contain
    "
  />
</div>
      {/* Heading */}
      <h3
        className="
          text-center
          text-[20px]
          font-semibold
          leading-[28px]
          text-[#4D4D4D]
          w-full
          
          sm:text-[22px]
          sm:leading-[30px]
          sm:h-[66px]
          
          lg:text-[28px]
          lg:leading-[36px]
          lg:h-[72px]
          lg:w-[267px]
        "
      >
        {card.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-center
          text-[13px]
          font-normal
          leading-[18px]
          text-[#717171]
          w-full
          
          sm:text-[13.5px]
          sm:leading-[19px]
          sm:h-[54px]
          
          lg:text-[14px]
          lg:leading-[20px]
          lg:h-[60px]
          lg:w-[251px]
        "
      >
        {card.description}
      </p>
    </article>
  );
}