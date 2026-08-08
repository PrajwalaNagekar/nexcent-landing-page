interface StatsContentProps {
  title: {
    normal: string;
    highlight: string;
  };
  description: string;
}

export default function StatsContent({
  title,
  description,
}: StatsContentProps) {
  return (
    <div
      className="
    flex
    h-auto
    w-full
    flex-col

    lg:h-[120px]
    lg:w-[540px]
  "
    >
      <h2
        className="
          m-0
          w-full
          font-['Inter']
          text-[32px]
          font-semibold
          leading-[40px]
          text-[#4D4D4D]

          lg:w-[408px]
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        <span>{title.normal}</span>{" "}
        <span className="text-[#4CAF4F]">
          {title.highlight}
        </span>
      </h2>

      <p
        className="
          m-0
          mt-[16px]
          w-full
          font-['Inter']
          text-[16px]
          font-normal
          leading-[24px]
          text-[#18191F]

          lg:w-[540px]
        "
      >
        {description}
      </p>
    </div>
  );
}