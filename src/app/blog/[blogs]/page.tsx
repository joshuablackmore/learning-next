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
    <div className="pt-[45px] min-h-screen border m-auto">
      
      
        <Image
        src={blogs.image}
        width={500}
        height={500}
        alt={blogs.name}
        className=""
      />
      
      
      
      <div className="pt-4 m-2">
        <h1>{blogs.name}</h1>
        <PortableText value={blogs.content} />
      </div>
    </div>
  );
}
