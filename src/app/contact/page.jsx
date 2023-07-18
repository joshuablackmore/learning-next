import React from 'react'
import { getArtwork } from '../../../sanity/schemas/sanity-utils'
import Image from 'next/image';

export default async function Contact() {
  const artwork = await getArtwork();

  console.log(artwork)

  return (
    <div className='h-screen pt-[45px]'>
      <div>
        {artwork.map((pic) => (
          <div><Image 
          src={pic.image}
          id='id'
          width={250}
          height={250}/>
          <h1>{pic._id}</h1>
          <h2>{pic.name}</h2>
          </div>
        ))}
      </div>
      
      <div>
        <Image 
        src={artwork[1].image}
        width={250}
        height={250} />
        <h1>{artwork[1].name}</h1>
      </div>

    </div>
  )
}

