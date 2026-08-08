export interface BlogButton {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  image: string;
  alt: string;
  title: string;
  button: BlogButton;
}

export interface BlogData {
  title: string;
  description: string;
  posts: BlogPost[];
}