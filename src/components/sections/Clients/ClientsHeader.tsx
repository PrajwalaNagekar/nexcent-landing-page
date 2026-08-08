interface ClientsHeaderProps {
  title: string;
  description: string;
}

export default function ClientsHeader({
  title,
  description,
}: ClientsHeaderProps) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        gap-[8px]
        px-5
        text-center

        sm:px-8

        lg:w-[1110px]
        lg:px-0
      "
    >
      <h2
        className="
          w-full
          text-[28px]
          font-semibold
          leading-[36px]
          tracking-[0]
          text-[#4D4D4D]

          sm:text-[32px]
          sm:leading-[40px]

          lg:h-[44px]
          lg:w-[1110px]
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        {title}
      </h2>

      <p
        className="
          w-full
          text-[14px]
          font-normal
          leading-[20px]
          tracking-[0]
          text-[#717171]

          sm:text-[16px]
          sm:leading-[24px]

          lg:h-[24px]
          lg:w-[1110px]
          lg:text-[16px]
          lg:leading-[24px]
        "
      >
        {description}
      </p>
    </div>
  );
}