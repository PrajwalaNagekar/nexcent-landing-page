import Container from "@/components/common/Container";
import { NavbarData } from "@/types/navbar";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  data: NavbarData;
}

export default function Navbar({ data }: NavbarProps) {
  return (
    <header className="relative bg-[#F5F7FA] z-40">
      <Container className="h-[84px]">
        <nav
          className="flex h-full items-center justify-between px-5 sm:px-8 lg:px-0"
          aria-label="Primary navigation"
        >
          <NavbarLogo logo={data.logo} />

          <NavbarLinks navigation={data.navigation} />

          <NavbarActions actions={data.actions} />

          <MobileMenu data={data} />
        </nav>
      </Container>
    </header>
  );
}