"use client";

import { FormEvent, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { animate, motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 200) {
        setSubmitted(true);
        console.log(res);
      }
    } catch (err: any) {
      console.error("Err", err);
    }

    setName("");
    setEmail("");
    setMessage("");
    window.scrollTo(0, 0);
  };

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Thanks for your email!!</h1>
    </motion.div>
  ) : (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      className="h-[50%]"
    >
      <form
        onSubmit={handleSubmit}
        className="flex h-full flex-col justify-around overflow-auto rounded-md"
      >
        <div className="mx-6 flex flex-row gap-4">
          <BsFillPersonFill size={30} className="" />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full rounded-md border"
            placeholder="  name"
            required
          />
        </div>
        <div className="mx-6 flex flex-row gap-4">
          <MdEmail size={30} />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full rounded-md border"
            placeholder="  email"
            required
          />
        </div>
        <div className="mx-6 flex flex-row items-center gap-4 ">
          <BsPencilFill size={25} />
          <textarea
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border"
            placeholder="  .... ..... ....."
            required
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="rounded-lg border bg-hi-light1 p-2 text-[#fff] hover:bg-hi-light2"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
