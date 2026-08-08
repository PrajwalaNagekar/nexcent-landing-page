export interface Stat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface StatsData {
  title: {
    normal: string;
    highlight: string;
  };
  description: string;
  stats: Stat[];
}