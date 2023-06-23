import React from 'react'


const About = () => {
  return (
    <div className='h-screen'>
      <h1 className='py-20 text-3xl'>About me</h1>
      <div className=' container m-auto h-1/2 grid md:grid-cols-2 gap-4'>
        

          <div className='card hero-img  md:rounded-xl '>
            <div className='overlay flex  p-2  items-center h-full md:rounded-xl bg-black/60 '>
              <p className=' text-white mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores nihil repellendus excepturi nulla provident, fugiat, nam quae modi similique doloremque. Voluptatum nulla commodi officiis nisi quibusdam distinctio dignissimos at?</p>
            </div>
         </div>

         <div className='card hero-img md:rounded-xl'>
            <div className='overlay flex  p-2 items-center h-full md:rounded-xl bg-black/60 '>
              <p className=' text-white mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores nihil repellendus excepturi nulla provident, fugiat, nam quae modi similique doloremque. Voluptatum nulla commodi officiis nisi quibusdam distinctio dignissimos at?</p>
            </div>
         </div>

         <div className='card hero-img md:rounded-xl'>
            <div className='overlay flex p-2  items-center h-full md:rounded-xl bg-black/60 '>
              <p className=' text-white mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores nihil repellendus excepturi nulla provident, fugiat, nam quae modi similique doloremque. Voluptatum nulla commodi officiis nisi quibusdam distinctio dignissimos at?</p>
            </div>
         </div>

         <div className='card hero-img md:rounded-xl'>
            <div className='overlay flex  p-2  items-center h-full md:rounded-xl bg-black/60 '>
              <p className=' text-white mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores nihil repellendus excepturi nulla provident, fugiat, nam quae modi similique doloremque. Voluptatum nulla commodi officiis nisi quibusdam distinctio dignissimos at?</p>
            </div>
         </div>

      </div>
        
        
    </div>
  )
}

export default About