'use client'

import { FormEvent, useState } from "react"

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState([ ])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault() 

        
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name, email, message,
                }),
            });
        
            const {msg} = await res.json()
            setError(msg);
            console.log(error)
    }

    return (
        <form onSubmit={handleSubmit} className="border h-[50%] flex flex-col items-center justify-center">
            <label>Name</label>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            placeholder="Name"
            />
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="Email"/>
            <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border"></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}




{/* <form 
        onSubmit={handleSubmit}>
      <div className='w-full flex flex-col'>
        <label htmlFor='name'>Name</label>
        <input 
            required 
            type='text' 
            id='name' 
            autoComplete='off' 
            className='border border-hi-light1 rounded-sm'/>
      </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input 
          required 
          type='email' 
          id='email' 
          autoComplete='off'
          className='border border-hi-light1 rounded-sm'/>
        </div>
        <div>
        <label htmlFor="message">Message</label>
        <textarea 
        id="message"
        rows={4} 
        placeholder='type your message here...'
        className='w-full border border-hi-light1 rounded-sm' />
        </div>
        <button type='submit' className='px-4 py-2 bg-hi-light1 rounded-md'>Send message</button>
    </form> */}