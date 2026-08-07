import Link from "next/link";
import { NavItem } from "@/types/navbar";

interface NavbarLinksProps {
  navigation: NavItem[];
}

export default function NavbarLinks({
  navigation,
}: NavbarLinksProps) {
  return (
    <ul className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}