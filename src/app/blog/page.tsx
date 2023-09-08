import BlogClient from "./BlogClient";
import { getBlog } from "../../../sanity/schemas/sanity-utils";

const Blog = async () => {
  const blogPosts = await getBlog();
  
  return (
    <div className="pt-[45px] pb-4 xl:pt-[60px] min-h-screen">
    <h1 className="text-center my-4 text-xl">Blogs</h1>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogPosts.map((posts) => (
        <div 
        key={posts._id}
        className="mx-2">
          <BlogClient
            title={posts.name}
            image={posts.image}
            excerpt={posts.excerpt}
            slug={posts.slug}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Blog;