import Image from "next/image";



async function getPics() {
  const token = process.env.Instagram_API_KEY
  const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

const Gallery = async () => {
  const insta = await getPics();

  const lessPics = insta.data.slice(0, 8);
  
  return (
    
    <div className='flex flex-col pt-20 gap-2 sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3 '>
      {lessPics.map((pic) => {
      return (
      <div key={pic.id} className="flex justify-center">
        <Image src={pic.media_url} width='450' height='300' className="" />
      </div>
      )
      
      
    })}
    </div>
  
  )
}

export default Gallery