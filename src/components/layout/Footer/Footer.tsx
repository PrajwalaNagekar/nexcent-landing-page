import Image from "next/image";
import Link from "next/link";

import footerData from "@/data/footer.json";
import NavbarLogo from "@/components/layout/Navbar";
export default function Footer() {
  const { footer } = footerData;

  return (
    <footer
      className="
        w-full
        bg-[#263238]
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          flex-col
          min-h-[285px]
          w-full
          justify-between
          gap-[40px]
          px-5
          py-[40px]
          
          sm:flex-col
          sm:gap-[48px]
          sm:px-8
          sm:py-[48px]
          
          lg:w-[1152px]
          lg:flex-row
          lg:gap-0
          lg:px-0
          lg:py-[56px]
        "
      >

        <div
          className="
            w-full
            
            sm:w-full
            
            lg:w-[350px]
          "
        >
          <Link
            href="#"
            className="inline-flex items-center"
          >
            <Image
              src="/images/footer/Logo.png"
              alt="Nexcent"
              width={168}
              height={36}
              className="h-[36px] w-auto"
            />
          </Link>

          <div
            className="
              mt-[32px]
              font-['Inter']
              text-[14px]
              font-normal
              leading-[20px]
              text-[#F5F7FA]
            "
          >
            <p className="m-0">
              {footer.copyright}
            </p>

            <p className="mt-[8px]">
              {footer.rights}
            </p>
          </div>

          <div className="mt-[32px] flex gap-[16px]">
            {footer.socials.map((social) => (
              <SocialIcon
                key={social.id}
                label={social.label}
                src={social.src}
                href={social.href}
              />
            ))}
          </div>
        </div>

        <FooterColumn
          title={footer.company.title}
          links={footer.company.links}
        />

        <FooterColumn
          title={footer.support.title}
          links={footer.support.links}
        />


        <div
          className="
            w-full
            
            sm:w-full
            
            lg:w-[255px]
          "
        >
          <h3
            className="
              m-0
              font-['Inter']
              text-[18px]
              font-semibold
              leading-[28px]
              text-white
            "
          >
            {footer.newsletter.title}
          </h3>

          <div
            className="
              mt-[24px]
              flex
              h-[40px]
              w-full
              max-w-[255px]
              items-center
              rounded-[8px]
              bg-[#515B60]
              px-[12px]
            "
          >
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="
                min-w-0
                flex-1
                bg-transparent
                font-['Inter']
                text-[14px]
                leading-[20px]
                text-white
                outline-none
                placeholder:text-[#D9DBDC]
              "
            />

            <button
              type="button"
              aria-label="Subscribe"
              className="
    ml-[8px]
    flex
    h-[24px]
    w-[24px]
    shrink-0
    items-center
    justify-center
  "
            >
              <Image
                src={footer.newsletter.sendIcon}
                alt=""
                width={16}
                height={16}
                className="h-[16px] w-[16px] object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div
      className="
        w-full
        
        sm:w-full
        
        lg:w-[160px]
      "
    >
      <h3
        className="
          m-0
          font-['Inter']
          text-[18px]
          font-semibold
          leading-[28px]
          text-white
        "
      >
        {title}
      </h3>

      <div className="mt-[24px] flex flex-col gap-[12px]">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              font-['Inter']
              text-[14px]
              font-normal
              leading-[20px]
              text-[#F5F7FA]
              hover:text-white
            "
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({
  label,
  src,
  href,
}: {
  label: string;
  src: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        flex
        h-[32px]
        w-[32px]
        items-center
        justify-center
        rounded-full
        bg-[#3B484E]
      "
    >
      <Image
        src={src}
        alt=""
        width={16}
        height={16}
        className="h-[16px] w-[16px] object-contain"
      />
    </Link>
  );
}