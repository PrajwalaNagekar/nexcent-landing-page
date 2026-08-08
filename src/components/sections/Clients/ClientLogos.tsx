import Image from "next/image";

import { ClientLogo } from "@/types/clients";

interface ClientLogosProps {
  logos: ClientLogo[];
}

export default function ClientLogos({
  logos,
}: ClientLogosProps) {
  return (
    <div
      className="
        grid
        w-full
        grid-cols-4
        place-items-center
        gap-y-6
        px-5

        sm:grid-cols-4
        sm:px-8

        md:grid-cols-7
        md:gap-y-0

        lg:flex
        lg:h-[98px]
        lg:w-[1152px]
        lg:items-center
        lg:justify-between
        lg:px-0
      "
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex h-[48px] w-[48px] shrink-0 items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={48}
            height={48}
            className="h-[48px] w-[48px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}