import Link from "next/link";
import { NavItem } from "@/types/navbar";

interface NavbarLinksProps {
  navigation: NavItem[];
}

export default function NavbarLinks({
  navigation,
}: NavbarLinksProps) {
  return (
    <ul className="hidden items-center gap-[30px] lg:flex">
      {navigation.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-[14px] font-medium leading-[20px] text-[#263238] transition-colors hover:text-[#4CAF4F]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}