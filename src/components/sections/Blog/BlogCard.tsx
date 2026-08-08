import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="relative w-full max-w-[368px] shrink-0 sm:w-[320px] lg:h-[366px] lg:w-[368px]">
      {/* Image */}
      <div
        className="
          relative
          h-[240px]
          w-full
          overflow-hidden
          rounded-t-[8px]
          bg-gray-200
          
          sm:h-[250px]
          
          lg:h-[268px]
          lg:w-[368px]
          lg:rounded-[8px]
        "
      >
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 368px"
        />
      </div>

     
      <div
        className="
          relative
          z-10
          -mt-[80px]
          mx-auto
          flex
          min-h-[160px]
          w-[calc(100%-40px)]
          max-w-[317px]
          flex-col
          gap-[12px]
          rounded-[8px]
          bg-[#F5F7FA]
          p-[14px]
          shadow-[0px_8px_16px_rgba(171,190,209,0.4)]
          
          sm:-mt-[85px]
          sm:min-h-[170px]
          sm:gap-[14px]
          sm:p-[15px]
          
          lg:-mt-[95px]
          lg:min-h-[176px]
          lg:w-[317px]
          lg:gap-[16px]
          lg:p-[16px]
        "
      >
        <h3
          className="
            m-0
            w-full
            text-center
            font-['Inter']
            text-[18px]
            font-semibold
            leading-[26px]
            text-[#717171]
            
            sm:text-[19px]
            sm:leading-[27px]
            
            lg:text-[20px]
            lg:leading-[28px]
          "
        >
          {post.title}
        </h3>

        <Link
          href={post.button.href}
          className="
            flex
            h-[40px]
            w-full
            items-center
            justify-center
            gap-[8px]
            px-[8px]
            font-['Inter']
            text-[18px]
            font-semibold
            leading-[26px]
            whitespace-nowrap
            text-[#4CAF4F]
            transition-colors
            hover:text-[#3d8b40]
            
            sm:h-[42px]
            sm:text-[19px]
            sm:leading-[27px]
            
            lg:h-[44px]
            lg:text-[20px]
            lg:leading-[28px]
          "
        >
          <span>{post.button.label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}