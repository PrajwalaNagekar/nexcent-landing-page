import Image from "next/image";

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  logoSize?: number;
}

export default function ClientLogos({
  logos,
  logoSize = 48,
}: ClientLogosProps) {
  return (
    <div
      className="
        flex
        h-[98px]
        w-[1152px]
        items-center
        justify-between
      "
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="
            flex
            h-[48px]
            w-[48px]
            shrink-0
            items-center
            justify-center
          "
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logoSize}
            height={logoSize}
            className="
              h-[48px]
              w-[48px]
              object-contain
            "
          />
        </div>
      ))}
    </div>
  );
}