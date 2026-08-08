import blogData from "@/data/blog.json";
import { BlogData } from "@/types/blog";

import BlogHeader from "./BlogHeader";
import BlogCard from "./BlogCard";

const data = blogData as BlogData;

export default function Blog() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-0">
      <BlogHeader
        title={data.title}
        description={data.description}
      />

      <div
        className="
    mx-auto
    mt-[16px]
    flex
    flex-col
    w-full
    items-center
    gap-6
    px-5
    
    sm:mt-[20px]
    sm:flex-row
    sm:flex-wrap
    sm:justify-center
    sm:gap-8
    sm:px-8
    
    lg:mt-[24px]
    lg:h-[366px]
    lg:w-[1152px]
    lg:flex-nowrap
    lg:justify-between
    lg:gap-0
    lg:px-0
  "
      >
        {data.posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}