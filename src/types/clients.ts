export interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

export interface ClientsData {
  title: string;
  description: string;
  logos: ClientLogo[];
}