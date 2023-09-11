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
    <div className="m-auto flex h-screen flex-col border pt-[45px] xl:pt-[58px]">
      <div className="relative mx-auto h-[50%] w-full max-w-6xl lg:h-[65%]">
        <Image
          src={blogs.image}
          fill={true}
          alt={blogs.name}
          objectFit="cover"
        />
      </div>

      <div className="m-2 pt-4">
        <h1>{blogs.name}</h1>
        <PortableText value={blogs.content} />
      </div>
    </div>
  );
}
