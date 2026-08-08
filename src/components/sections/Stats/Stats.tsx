import statsData from "@/data/stats.json";
import { StatsData } from "@/types/stats";

import StatsContent from "./StatsContent";
import StatsGrid from "./StatsGrid";

const data = statsData as StatsData;

export default function Stats() {
  return (
    <section
      className="
        mt-[42px]
        w-full
        bg-[#F5F7FA]

        lg:h-[288px]
        lg:px-[144px]
        lg:py-[64px]
      "
    >
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          gap-[40px]
          px-[16px]
          py-[48px]

          md:px-[40px]
          md:py-[56px]

          lg:h-[160px]
          lg:flex-row
          lg:justify-between
          lg:gap-0
          lg:px-0
          lg:py-0
        "
      >
        <StatsContent
          title={data.title}
          description={data.description}
        />

        <StatsGrid stats={data.stats} />
      </div>
    </section>
  );
}