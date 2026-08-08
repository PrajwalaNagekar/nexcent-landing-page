interface ClientsHeaderProps {
  title: string;
  description: string;
}

export default function ClientsHeader({
  title,
  description,
}: ClientsHeaderProps) {
  return (
    <div className="flex w-full max-w-[1110px] flex-col items-center text-center px-5 sm:px-8 lg:px-0">
      <h2
        className="
          m-0
          w-full
          font-['Inter']
          text-[24px]
          font-semibold
          leading-[32px]
          text-[#4D4D4D]
          
          sm:text-[28px]
          sm:leading-[36px]
          
          lg:h-[44px]
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        {title}
      </h2>

      <p
        className="
          m-0
          mt-[8px]
          w-full
          font-['Inter']
          text-[14px]
          font-normal
          leading-[20px]
          text-[#717171]
          
          sm:text-[15px]
          sm:leading-[22px]
          
          lg:h-[24px]
          lg:text-[16px]
          lg:leading-[24px]
        "
      >
        {description}
      </p>
    </div>
  );
}