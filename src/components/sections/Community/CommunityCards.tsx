import { CommunityCardData } from "@/types/community";
import CommunityCard from "./CommunityCard";

interface CommunityCardsProps {
  cards: CommunityCardData[];
}

export default function CommunityCards({
  cards,
}: CommunityCardsProps) {
  return (
    <div
      className="
        flex
        flex-col
        w-full
        items-center
        gap-4
        
        sm:flex-row
        sm:flex-wrap
        sm:justify-center
        sm:gap-6
        
        lg:flex-row
        lg:flex-nowrap
        lg:justify-between
        lg:px-[144px]
        lg:gap-0
      "
    >
      {cards.map((card) => (
        <CommunityCard
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
}