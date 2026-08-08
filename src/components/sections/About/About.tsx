import Image from "next/image";

import aboutData from "@/data/about.json";
import { AboutData } from "@/types/about";

import AboutContent from "./AboutContent";

const data = aboutData as AboutData;

export default function About() {
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
            max-w-[320px]
            items-center
            justify-center
            
            sm:max-w-[380px]
            
            lg:h-[433px]
            lg:w-[442px]
            lg:max-w-none
            lg:shrink-0
          "
        >
          <Image
            src={data.image}
            alt=""
            width={442}
            height={433}
            className="
              h-auto
              w-full
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