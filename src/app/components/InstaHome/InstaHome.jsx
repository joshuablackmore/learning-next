import Image from "next/image";



async function getPics() {
  const token = process.env.Instagram_API_KEY
  const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

const InstaHome = async () => {
  const insta = await getPics();

  const lessPics = insta.data.slice(0, 1);
  
  return (
    
    <div className='flex h-screen '>
      {lessPics.map((pic) => {
      return (
      <div key={pic.id} className="flex items-center m-auto">
        <Image loading="lazy" src={pic.media_url} width='450' height='300' className="rounded-lg border border-red-400" alt="insta feed"/>
        
      </div>
      )
      
      
    })}
    </div>
  
  )
}

export default InstaHome