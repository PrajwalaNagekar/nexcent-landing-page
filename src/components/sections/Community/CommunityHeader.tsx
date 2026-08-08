interface CommunityHeaderProps {
  title: string;
  description: string;
}

export default function CommunityHeader({
  title,
  description,
}: CommunityHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <h2
        className="
          h-[88px]
          w-[542px]
          text-center
          text-[36px]
          font-semibold
          leading-[44px]
          tracking-[0]
          text-[#4D4D4D]
        "
      >
        {title}
      </h2>

      <p
        className="
          h-[24px]
          w-full
          text-center
          text-[16px]
          font-normal
          leading-[24px]
          tracking-[0]
          text-[#717171]
        "
      >
        {description}
      </p>
    </div>
  );
}