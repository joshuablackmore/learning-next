import React from 'react'
import HelloWorld from './HelloWorld'
import { getData } from './getData';

const page = async () => {

  const data = await getData();
 

  console.log(data[0].name)
    
  return (
    <div className='pt-[45px]'>
      <HelloWorld name={data[0].name} image={data[0].image} id={data[0]._id} />
   
    </div>
  )
}

export default page