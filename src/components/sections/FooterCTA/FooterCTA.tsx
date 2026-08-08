import Link from "next/link";

import footerData from "@/data/footer.json";

export default function FooterCTA() {
  const { title, button } = footerData.cta;

  return (
    <section
      className="
        flex
        h-[314px]
        w-full
        flex-col
        items-center
        justify-center
        bg-[#F5F7FA]
      "
    >
      <h2
        className="
          m-0
          w-[887px]
          text-center
          font-['Inter']
          text-[64px]
          font-semibold
          leading-[76px]
          tracking-[0]
          text-[#263238]
        "
      >
        {title}
      </h2>

      <Link
        href={button.href}
        className="
          mt-[32px]
          flex
          h-[52px]
          w-[155px]
          items-center
          justify-center
          gap-[8px]
          rounded-[4px]
          bg-[#4CAF4F]
          px-[32px]
          py-[14px]
          font-['Inter']
          text-[16px]
          font-medium
          leading-[24px]
          whitespace-nowrap
          text-white
        "
      >
        <span>{button.label}</span>
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}