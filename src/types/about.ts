export interface AboutButton {
  label: string;
  href: string;
}

export interface AboutData {
  image: string;
  title: string;
  alt: string;
  description: string;
  button: AboutButton;
}

export interface AboutPageData {
  aboutData: AboutData;
  footerCta: AboutData;
}