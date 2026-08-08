import Image from "next/image";

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  logoSize?: number;
  gap?: number;
}

export default function ClientLogos({
  logos,
  logoSize = 48,
  gap,
}: ClientLogosProps) {
  return (
    <div
      className="
        flex
        w-full
        max-w-full
        items-center
        justify-center
        flex-wrap
        gap-6
        
        sm:gap-8
        sm:justify-between
        
        lg:h-[98px]
        lg:w-[1152px]
        lg:flex-nowrap
        lg:justify-between
      "
      style={gap !== undefined ? { gap: `${gap}px` } : undefined}
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="
            flex
            shrink-0
            items-center
            justify-center
          "
          style={{
            height: `${logoSize}px`,
            width: `${logoSize}px`,
          }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logoSize}
            height={logoSize}
            style={{
              height: `${logoSize}px`,
              width: `${logoSize}px`,
            }}
            className="
              object-contain
            "
          />
        </div>
      ))}
    </div>
  );
}