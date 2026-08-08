import Image from "next/image";

import { AboutData } from "@/types/about";

import AboutContent from "./AboutContent";

interface AboutProps {
  data: AboutData;
}

export default function About({
  data,
}: AboutProps) {
  return (
    <section
      className="
        flex
        w-full
        items-center
        bg-white
        px-[144px]
      "
    >
      <div
        className="
          flex
          h-[433px]
          w-full
          items-center
          justify-between
        "
      >
        {/* Illustration */}
        <div
          className="
            flex
            h-[433px]
            w-[442px]
            shrink-0
            items-center
            justify-center
          "
        >
          <Image
            src={data.image}
            alt={data.alt}
            width={442}
            height={433}
            className="
              h-[433px]
              w-[442px]
              object-contain
            "
          />
        </div>

        {/* Content */}
        <AboutContent data={data} />
      </div>
    </section>
  );
}