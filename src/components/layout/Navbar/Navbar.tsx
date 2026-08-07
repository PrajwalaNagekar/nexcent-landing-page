import Container from "@/components/common/Container";
import { NavbarData } from "@/types/navbar";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";

interface NavbarProps {
  data: NavbarData;
}

export default function Navbar({ data }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary Navigation"
        >
          <NavbarLogo logo={data.logo} />

          <NavbarLinks navigation={data.navigation} />

          <NavbarActions actions={data.actions} />
        </nav>
      </Container>
    </header>
  );
}