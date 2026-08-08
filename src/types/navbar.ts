export interface NavItem {
  label: string;
  href: string;
}

export interface Logo {
  src: string;
  alt: string;
  href: string;
}

export interface ActionButton {
  label: string;
  href: string;
}

export interface NavbarData {
  logo: Logo;
  navigation: NavItem[];
  actions: {
    login: ActionButton;
    signup: ActionButton;
  };
}

