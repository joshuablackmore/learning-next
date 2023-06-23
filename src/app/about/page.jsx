import React from 'react'


const About = () => {
  return (
    <div className='h-screen flex items-center justify-center '>
      <div className='container flex flex-col h-full'>
        <h1 className='py-20 text-3xl'>About me</h1>

          <div className='card my-6 self-center hero-img  h-[50%] md:rounded-xl lg:max-w-[60%] xl:max-w-[50%]'>
            <div className='overlay flex items-center h-full md:rounded-xl bg-black/60 '>
              <p className=' text-white mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores nihil repellendus excepturi nulla provident, fugiat, nam quae modi similique doloremque. Voluptatum nulla commodi officiis nisi quibusdam distinctio dignissimos at?</p>
            </div>
         </div>

         <div className='card my-6 self-center hero-img  h-[50%] md:rounded-xl lg:max-w-[60%] xl:max-w-[50%]'>
            <div className='overlay flex items-center h-full md:rounded-xl bg-black/60 '>
              <p className=' text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores nihil repellendus excepturi nulla provident, fugiat, nam quae modi similique doloremque. Voluptatum nulla commodi officiis nisi quibusdam distinctio dignissimos at?</p>
            </div>
         </div>

      </div>
        
        
    </div>
  )
}

export default About