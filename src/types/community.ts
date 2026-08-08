export interface CommunityCardData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CommunityData {
  title: string;
  description: string;
  cards: CommunityCardData[];
}