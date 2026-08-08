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
                py-8
                
                sm:py-12
                
                lg:py-0
            "
        >
            {/* Main testimonial container */}
            <div
                className="
                    flex
                    flex-col
                    w-full
                    gap-8
                    px-5
                    
                    sm:flex-col
                    sm:gap-10
                    sm:px-8
                    
                    lg:grid
                    lg:h-[390px]
                    lg:grid-cols-[326px_1fr]
                    lg:gap-[78px]
                    lg:px-[144px]
                    lg:py-[32px]
                "
            >
                {/* ================= IMAGE ================= */}
                <div
                    className="
                        relative
                        w-full
                        max-w-[300px]
                        aspect-square
                        mx-auto
                        shrink-0
                        overflow-hidden
                        rounded-[6px]
                        
                        sm:max-w-[320px]
                        
                        lg:h-[326px]
                        lg:w-[326px]
                        lg:max-w-[326px]
                        lg:mx-0
                        lg:self-start
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
                        w-full
                        flex-col
                        
                        sm:w-full
                        
                        lg:h-[324px]
                        lg:w-full
                        lg:max-w-[748px]
                    "
                >
                    {/* Description */}
                    <div
                        className="
                            flex
                            w-full
                            flex-col
                            gap-4
                            
                            sm:gap-[16px]
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
                            mt-4
                            flex
                            w-full
                            flex-col
                            gap-2
                            
                            sm:mt-[16px]
                            sm:gap-[8px]
                            
                            lg:h-[60px]
                        "
                    >
                        <h3
                            className="
                                m-0
                                font-['Inter']
                                text-[16px]
                                font-semibold
                                leading-[24px]
                                text-[#4CAF4F]
                                
                                sm:text-[18px]
                                sm:leading-[28px]
                            "
                        >
                            {data.name}
                        </h3>

                        <p
                            className="
                                m-0
                                font-['Inter']
                                text-[13px]
                                font-normal
                                leading-[20px]
                                text-[#89939E]
                                
                                sm:text-[14px]
                                sm:leading-[24px]
                            "
                        >
                            {data.company}
                        </p>
                    </div>

                    {/* Logos + Meet All Customers */}
                    <div
                        className="
                            mt-6
                            flex
                            w-full
                            flex-col
                            items-center
                            gap-6
                            
                            sm:mt-8
                            sm:flex-row
                            sm:justify-between
                            
                            lg:mt-[16px]
                            lg:h-[48px]
                        "
                    >
                        {/* Logos */}
                        <div
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                
                                sm:w-auto
                                sm:pl-0
                                
                                lg:h-[48px]
                                lg:w-[493px]
                                lg:pl-[32px]
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
                                items-center
                                gap-2
                                px-2
                                font-['Inter']
                                text-[15px]
                                font-medium
                                leading-[24px]
                                whitespace-nowrap
                                text-[#4CAF4F]
                                
                                sm:gap-[8px]
                                sm:px-[8px]
                                sm:text-[16px]
                                
                                lg:h-[44px]
                                lg:w-[223px]
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