import StatCard from "./StatsCard";

import { Stat } from "@/types/stats";

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({
  stats,
}: StatsGridProps) {
  return (
    <div
      className="
        grid
        w-full
        grid-cols-1
        gap-[32px]

        sm:grid-cols-2

        lg:w-[540px]
        lg:grid-cols-2
        lg:gap-x-[30px]
        lg:gap-y-[40px]
      "
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          stat={stat}
        />
      ))}
    </div>
  );
}