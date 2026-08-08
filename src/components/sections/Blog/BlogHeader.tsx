interface BlogHeaderProps {
  title: string;
  description: string;
}

export default function BlogHeader({
  title,
  description,
}: BlogHeaderProps) {
  return (
    <div
      className="
        mx-auto
        flex
        w-full
        max-w-[1110px]
        flex-col
        gap-[8px]
        text-center
        px-5
        
        sm:px-8
        
        lg:h-[124px]
        lg:px-0
      "
    >
      <h2
        className="
          m-0
          font-['Inter']
          text-[24px]
          font-semibold
          leading-[32px]
          tracking-[0]
          text-[#4D4D4D]
          
          sm:text-[28px]
          sm:leading-[36px]
          
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          m-0
          w-full
          font-['Inter']
          text-[14px]
          font-normal
          leading-[20px]
          text-[#717171]
          text-center
          
          sm:text-[15px]
          sm:leading-[22px]
          sm:max-w-[628px]
          
          lg:h-[72px]
          lg:w-[628px]
          lg:text-[16px]
          lg:leading-[24px]
        "
      >
        {description}
      </p>
    </div>
  );
}