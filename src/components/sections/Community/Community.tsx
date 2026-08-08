import communityData from "@/data/community.json";

import { CommunityData } from "@/types/community";

import CommunityHeader from "./CommunityHeader";
import CommunityCards from "./CommunityCards";

const data = communityData as CommunityData;

export default function Community() {
  return (
    <section
      className="
    w-full
    bg-white
    px-[144px]
    pb-[42px]
  "
    >
      <CommunityHeader
        title={data.title}
        description={data.description}
      />

      <CommunityCards cards={data.cards} />
    </section>
  );
}