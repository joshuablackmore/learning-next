'use client'
import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'


const BlogClient = ({ title, image, content, slug, excerpt }) => {
    return (
        <Link className='bg-gray-100 p-4' href={`blog/${slug}`}>
          <h1 className='text-xl font-bold mb-4'>{title}</h1>
            <div className=''> 
                <Image 
                //  className='transition-opacity opacity-0 duration-[0.5s]'
                //  onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                 loading="lazy"
                 
                 src={image} 
                 alt={title} 
                 width={500}
                 height={500}
                 
                />
            </div>  
          <div className='mt-4'>
            <PortableText value={content} />
            <p>{excerpt}</p>
          </div>
        </Link>
      );
         
}

export default BlogClient