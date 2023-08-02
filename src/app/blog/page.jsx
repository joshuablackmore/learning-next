import BlogClient from './BlogClient';
import { getBlog } from '../../../sanity/schemas/sanity-utils';

const Blog = async () => {
  const blogPosts = await getBlog();

  return (
  <div className='pt-[45px] min-h-screen'>
    <h1 className='text-center mt-4 text-xl'>Blogs</h1>
    {blogPosts.map((posts) => (
      <div key={posts._id}>
      <BlogClient title={posts.name} image={posts.image} content={posts.content} excerpt={posts.excerpt} slug={posts.slug.current}  />
      </div>
    ))}
    
  </div>
  )
}

export default Blog