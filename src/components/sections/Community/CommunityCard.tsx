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
        
        sm:h-[260px]
        sm:px-[28px]
        sm:py-[22px]
        
        lg:h-[260px]
        lg:w-[299px]
        lg:px-[32px]
        lg:py-[24px]
      "
      style={{
        boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)",
      }}
    >

      <div
        className="
          flex
          h-[48px]
          w-[48px]
          items-center
          justify-center
          rounded-[8px]
          bg-[#E8F5E9]
        "
      >
        <Image
          src={card.icon}
          alt=""
          width={32}
          height={32}
          className="h-[32px] w-[32px] object-contain"
        />
      </div>

    
      <h3
        className="
          text-center
          text-[20px]
          font-semibold
          leading-[28px]
          text-[#4D4D4D]
          
          sm:text-[22px]
          sm:leading-[30px]
          
          lg:text-[24px]
          lg:leading-[32px]
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
          
          sm:text-[13.5px]
          sm:leading-[19px]
          
          lg:text-[14px]
          lg:leading-[20px]
        "
      >
        {card.description}
      </p>
    </article>
  );
}