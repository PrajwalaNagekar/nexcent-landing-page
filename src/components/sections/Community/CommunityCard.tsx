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
        boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)",
      }}
    >
      {/* Icon Container */}
      <div
        className="
          flex
          items-center
          justify-center
          rounded-[10px]
          bg-[#E8F5E9]
          
          h-[56px]
          w-[56px]
          
          sm:h-[60px]
          sm:w-[60px]
          
          lg:h-[65px]
          lg:w-[65px]
        "
      >
        <Image
          src={card.icon}
          alt=""
          width={65}
          height={65}
          className="
            h-[40px]
            w-[40px]
            object-contain
            
            sm:h-[45px]
            sm:w-[45px]
            
            lg:h-[48px]
            lg:w-[48px]
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