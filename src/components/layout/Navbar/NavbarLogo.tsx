import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/types/navbar";

interface NavbarLogoProps {
  logo: Logo;
}

export default function NavbarLogo({
  logo,
}: NavbarLogoProps) {
  return (
    <Link
      href={logo.href}
      aria-label={logo.alt}
      className="flex h-[24px] w-[154.59px] shrink-0 items-center"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={155}
        height={24}
        priority
        className="h-[24px] w-[154.59px]"
      />
    </Link>
  );
}