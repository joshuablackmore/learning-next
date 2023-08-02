import { getHome } from '../../../sanity/schemas/sanity-utils';
import HeroClient from './client-comp'

export default async function HeroServer() {
    const data = await getHome();
    
  return (  

    <div>
      {data.map((info) => (
        <div key={info._id}>
        <HeroClient heading={info.heading} intro={info.intro} />
        </div>
        
      ))}

      
        
    </div>
    
  )
}

