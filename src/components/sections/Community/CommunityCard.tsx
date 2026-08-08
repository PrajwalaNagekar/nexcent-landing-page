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
        h-[260px]
        w-[299px]
        flex-col
        items-center
        gap-[8px]
        rounded-[8px]
        bg-white
        px-[32px]
        py-[24px]
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
          text-[24px]
          font-semibold
          leading-[32px]
          text-[#4D4D4D]
        "
      >
        {card.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-center
          text-[14px]
          font-normal
          leading-[20px]
          text-[#717171]
        "
      >
        {card.description}
      </p>
    </article>
  );
}