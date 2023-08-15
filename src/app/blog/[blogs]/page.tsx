import { PortableText } from "@portabletext/react";
import { getDynamicBlog } from "../../../../sanity/schemas/sanity-utils";
import Image from "next/image";

type Props = {
  params: { blogs: string };
};

export default async function Blogs({ params }: Props) {
  const slug = params.blogs;
  const blogs = await getDynamicBlog(slug);

  console.log(blogs);

  return (
    <div className="flex flex-col pt-[45px] xl:pt-[58px] h-screen border m-auto">
      
      <div className="h-[50%] lg:h-[65%] relative max-w-6xl w-full mx-auto">
        <Image
        src={blogs.image}
        fill={true}
        alt={blogs.name}
        objectFit="cover"
        
      />
      </div>
      
      
      <div className="pt-4 m-2">
        <h1>{blogs.name}</h1>
        <PortableText value={blogs.content} />
      </div>
    </div>
  );
}
