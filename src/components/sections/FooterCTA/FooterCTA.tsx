import Link from "next/link";

import footerData from "@/data/footer.json";

export default function FooterCTA() {
  const { title, button } = footerData.cta;

  return (
    <section
      className="
        flex
        w-full
        flex-col
        items-center
        justify-center
        bg-[#F5F7FA]
        px-5
        py-12
        
        sm:px-8
        sm:py-16
        
        lg:h-[314px]
        lg:px-0
        lg:py-0
      "
    >
      <h2
        className="
          m-0
          w-full
          max-w-[90%]
          text-center
          font-['Inter']
          text-[32px]
          font-semibold
          leading-[40px]
          tracking-[0]
          text-[#263238]
          
          sm:max-w-[600px]
          sm:text-[48px]
          sm:leading-[56px]
          
          lg:w-[887px]
          lg:max-w-[887px]
          lg:text-[64px]
          lg:leading-[76px]
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