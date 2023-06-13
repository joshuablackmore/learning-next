
import React from 'react'

  async function getData() {
  const key = 'AIzaSyDtVsMt8KznqRgigzX-47P2JfJDyzgUKvw';
  const ID = '3483847431617141087'
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${ID}/posts?key=${key}`, { cache: 'no-store' });
 if (!res.ok) {
  throw new Error('failed to fetch data')
 }
 return res.json();
}

const Blog = async () => {
 const data = await getData();
  console.log(data)
  

  return (
    <>
     <div className='grid grid-cols-4 m-50 gap-2 text-black pt-20 mx-5  '>
     {data.items.map((post) => (
      
        <div className='flex col-span-2 flex flex-col items-center justify-center text-center border rounded-md border-slate-400 shadow-lg shadow-slate-600 p-9 overflow-hidden' key={post.id}>
          <h3 className='font-bold'>{post.title}</h3>
          <h2 className=''>{post.id}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      
      ))}
    </div>
    </>
  )
 
}

export default Blog