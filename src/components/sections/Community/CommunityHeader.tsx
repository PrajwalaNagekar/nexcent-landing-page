interface CommunityHeaderProps {
  title: string;
  description: string;
}

export default function CommunityHeader({
  title,
  description,
}: CommunityHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center mb-[16px] sm:mb-[20px] lg:mb-0">
      <h2
        className="
          w-full
          max-w-[542px]
          text-center
          text-[24px]
          font-semibold
          leading-[32px]
          tracking-[0]
          text-[#4D4D4D]
          
          sm:text-[28px]
          sm:leading-[36px]
          
          lg:h-[88px]
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        {title}
      </h2>

      <p
        className="
          w-full
          text-center
          text-[14px]
          font-normal
          leading-[20px]
          tracking-[0]
          text-[#717171]
          mt-[8px]
          
          sm:text-[15px]
          sm:leading-[22px]
          
          lg:h-[24px]
          lg:text-[16px]
          lg:leading-[24px]
          lg:mt-0
        "
      >
        {description}
      </p>
    </div>
  );
}