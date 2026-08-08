export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  cta: {
    title: string;
    button: {
      label: string;
      href: string;
    };
  };

  footer: {
    copyright: string;
    rights: string;

    socials: FooterSocial[];

    company: FooterColumn;

    support: FooterColumn;

    newsletter: {
      title: string;
      placeholder: string;
    };
  };
}

export interface FooterSocial {
  id: string;
  label: string;
  src: string;
  href: string;
}