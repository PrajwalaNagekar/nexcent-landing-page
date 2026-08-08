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
        px-5
        py-8
        
        sm:px-8
        sm:py-12
        
        lg:px-[144px]
        lg:py-0
      "
    >
      <div
        className="
          flex
          flex-col
          w-full
          items-center
          gap-8
          
          sm:flex-col
          sm:gap-10
          
          lg:h-[433px]
          lg:flex-row
          lg:justify-between
          lg:gap-0
        "
      >
        {/* Illustration */}
        <div
          className="
            flex
            w-full
            max-w-[400px]
            aspect-square
            shrink-0
            items-center
            justify-center
            
            sm:max-w-[420px]
            
            lg:h-[433px]
            lg:w-[442px]
            lg:max-w-[442px]
          "
        >
          <Image
            src={data.image}
            alt={data.alt}
            width={442}
            height={433}
            className="
              w-full
              h-full
              object-contain
              
              lg:h-[433px]
              lg:w-[442px]
            "
          />
        </div>

        {/* Content */}
        <AboutContent data={data} />
      </div>
    </section>
  );
}