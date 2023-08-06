'use client'

import { FormEvent, useState } from "react"
import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsPencilFill } from 'react-icons/bs'

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault() 

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name, email, message,
                }),
            }) 
            if (res.status === 200) {
                setSubmitted(true)
            }
        } catch (err: any) {
            console.error('Err', err)
        }
        
            setName('')
            setEmail('')
            setMessage('')
    }

    return (
        submitted ? 
        
        <div>
            <h1>Thanks for your email!!</h1>
        </div> 
        
        :

        <form onSubmit={handleSubmit} className=" flex flex-col justify-around border border-hi-light1 h-[50%] rounded-md overflow-auto">
            <div className="flex flex-row gap-4 mx-6">
                <BsFillPersonFill size={30} />
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                className="border bg-light2 rounded-md"
                placeholder="name"
                required
                />
            </div>
            <div className="flex flex-row gap-4 mx-6">
                <MdEmail size={30} />
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="border bg-light2 rounded-md"
                placeholder="email"
                required
                />
            </div>
            <div className="flex flex-row gap-4 items-center mx-6 ">
                <BsPencilFill size={25} />
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded-md bg-light2"
                placeholder=" .... ..... ....."
                required >
                </textarea>
            </div>
            <div className="flex flex-col items-center justify-center">
            <button 
            type="submit"
            className="border bg-hi-light1 hover:bg-hi-light2 p-2 rounded-lg text-[#fff]">Submit</button>
            </div>
        </form>
    )
}

