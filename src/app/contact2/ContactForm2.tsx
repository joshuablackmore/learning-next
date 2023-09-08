'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


type FormValues = {
    name: string,
    email: string,
    message: string
}

const ContactForm2 = () => {

    const [formSuccess, setFormSuccess] = useState(false)

    const { register, handleSubmit, watch, formState: { errors, isSubmitted, isDirty, touchedFields, isSubmitSuccessful, isValid } } = useForm<FormValues>();

    
    const onSubmit = async (data: FormValues) => {
      
    
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
          if (res.status === 200) {
            
            // console.log(res)
            // console.log(data)
            setFormSuccess(true)
          }
        } catch (err: any) {
          console.error("Err", err);
        }
    
        window.scrollTo(0, 0);
      };
    


  return (
    <div className='pt-[45px] 2xl:pt-[60px] h-screen'>
        <div className='flex items-center justify-center h-full '>
            
            
            {formSuccess ?
            <span>Thanks for you message!</span>
        :
       
            <form onSubmit={handleSubmit(onSubmit)}
            className=' flex flex-col justify-center space-y-8 w-[80%] md:w-[60%] lg:w-[40%] h-[50%]'>
           
            <input 
            className='border border-hi-light1 hover:border-hi-light2 hover:bg-hi-light2/10 rounded-md p-2'
            type='text'
            placeholder='name'
            {...register("name", { required: 'name is required' })}
            
              />
              {errors.name && errors.name.type === 'required' && (
                <span 
                className='flex justify-end text-hi-light1'>    {errors.name.message}</span>
              )}
            
            <input 
            className='border border-hi-light1 hover:border-hi-light2 hover:bg-hi-light2/10 rounded-md p-2 '
            type='text'
            placeholder='email'
            {...register("email", { required: 'please enter your email address', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} 
            />
            {errors.email && errors.email.type === 'required' && (
            <span
            className='flex justify-end text-hi-light1'>
                {errors.email.message}</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
                <span
                className='flex justify-end text-hi-light1'>
                    Please enter a valid email address</span>
            )}

            <textarea 
            className='border border-hi-light1 hover:border-hi-light2 hover:bg-hi-light2/10 rounded-md p-2 h-[40%]'
            
            placeholder='message'
            {...register("message", { required: 'please include a message!', minLength: 10 })}
            
            />

            {errors.message && errors.message.type === 'required' && (
                <span
                className='flex justify-end text-hi-light1'>{errors.message.message}</span>
            )}
            {errors.message && errors.message.type === 'minLength' && (
                <span
                className='flex justify-end text-hi-light1'>
                    Your message does not exceed the minimum length!</span>
            )}
            
            <div className='w-[50%] self-center'>
            <input
            className={`rounded-md w-full ${isValid ? `bg-hi-light1 text-light1` :'bg-hi-light1/20 text-hi-light1/30  '}`}
            type='submit' 
            
            
            />
            </div>
            </form>
            }
        </div>
    </div>
  )
}

export default ContactForm2