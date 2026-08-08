import Image from "next/image";
import Link from "next/link";

import testimonialData from "@/data/testimonial.json";
import { TestimonialData } from "@/types/testimonial";

import ClientLogos from "../Clients/ClientLogos";

const data = testimonialData as TestimonialData;

const testimonialLogos = [
    {
        id: "client-1",
        src: "/images/client/client-1.png",
        alt: "Client 1",
    },
    {
        id: "client-2",
        src: "/images/client/client-2.png",
        alt: "Client 2",
    },
    {
        id: "client-3",
        src: "/images/client/client-3.png",
        alt: "Client 3",
    },
    {
        id: "client-4",
        src: "/images/client/client-4.png",
        alt: "Client 4",
    },
    {
        id: "client-5",
        src: "/images/client/client-5.png",
        alt: "Client 5",
    },
    {
        id: "client-6",
        src: "/images/client/client-6.png",
        alt: "Client 6",
    },
];

export default function Testimonial() {
    return (
        <section
            className="
    mt-[42px]
    w-full
    bg-[#F5F7FA]
  "
        >
            {/* Main testimonial container */}
            <div
                className="
          grid
          h-[390px]
          w-full
          grid-cols-[326px_1fr]
          gap-[78px]
          px-[144px]
          py-[32px]
        "
            >
                {/* ================= IMAGE ================= */}
                <div
                    className="
            relative
            h-[326px]
            w-[326px]
            shrink-0
            overflow-hidden
            rounded-[6px]
            self-start
          "
                >
                    <Image
                        src={data.image}
                        alt={data.alt}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* ================= RIGHT CONTENT ================= */}
                <div
                    className="
            flex
            h-[324px]
            w-full
            max-w-[748px]
            flex-col
          "
                >
                    {/* Description */}
                    <div
                        className="
              flex
              w-full
              flex-col
              gap-[16px]
            "
                    >
                        <p
                            className="
                m-0
                w-full
                font-['Inter']
                text-[14px]
                font-normal
                leading-[20px]
                text-[#717171]
              "
                        >
                            {data.description}
                        </p>
                    </div>

                    {/* Name + Company */}
                    <div
                        className="
              mt-[16px]
              flex
              h-[60px]
              w-full
              flex-col
              gap-[8px]
            "
                    >
                        <h3
                            className="
                m-0
                font-['Inter']
                text-[18px]
                font-semibold
                leading-[28px]
                text-[#4CAF4F]
              "
                        >
                            {data.name}
                        </h3>

                        <p
                            className="
                m-0
                font-['Inter']
                text-[14px]
                font-normal
                leading-[24px]
                text-[#89939E]
              "
                        >
                            {data.company}
                        </p>
                    </div>

                    {/* Logos + Meet All Customers */}
                    <div
                        className="
              mt-[16px]
              flex
              h-[48px]
              w-full
              items-center
              justify-between
            "
                    >
                        {/* Logos */}
                        <div
                            className="
                flex
                h-[48px]
                w-[493px]
                items-center
                pl-[32px]
              "
                        >
                            <ClientLogos
                                logos={testimonialLogos}
                                logoSize={48}
                                gap={41}
                            />
                        </div>

                        {/* Meet all customers */}
                        <Link
                            href={data.cta.href}
                            className="
                flex
                h-[44px]
                w-[223px]
                items-center
                gap-[8px]
                px-[8px]
                font-['Inter']
                text-[16px]
                font-medium
                leading-[24px]
                whitespace-nowrap
                text-[#4CAF4F]
              "
                        >
                            <span>{data.cta.label}</span>

                            <span
                                aria-hidden="true"
                                className="text-[20px]"
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}