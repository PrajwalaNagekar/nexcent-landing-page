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
      
        w-full
        items-center
        justify-between
        px-[144px]
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