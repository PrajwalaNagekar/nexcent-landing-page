import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/types/navbar";

interface NavbarLogoProps {
  logo: Logo;
}

export default function NavbarLogo({ logo }: NavbarLogoProps) {
  return (
    <Link
      href={logo.href}
      className="flex items-center"
      aria-label={logo.alt}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={154}
        height={24}
        priority
      />
    </Link>
  );
}