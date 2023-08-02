import { PortableText } from "@portabletext/react"
import { getDynamicBlog } from "../../../../sanity/schemas/sanity-utils"


type Props = {
    params: { blogs: string }
}
 
export default async function Blogs({ params }: Props) {
    const slug = params.blogs
    const blogs = await getDynamicBlog(slug)

    return (
        <div className="pt-[45px] h-screen">{blogs.name}
        <PortableText value={blogs.content} />
        </div>
    )
}