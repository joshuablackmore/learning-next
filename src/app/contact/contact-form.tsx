"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../context/active-section-context";
import { useInView as framerView, motion } from "framer-motion";
import { Title } from "../components/title";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const tempPic: string =
  "https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2";

const ContactForm2 = () => {
  /* active section */
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView]);

  const frameRef = useRef(null);
  const isInView = framerView(frameRef, { once: true });

  const [formSuccess, setFormSuccess] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isSubmitted,
      isDirty,
      touchedFields,
      isSubmitSuccessful,
      isValid,
    },
  } = useForm<FormValues>();

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
        console.log(res);
        console.log(data);
        setFormSuccess(true);
      }
    } catch (err: any) {
      console.error("Err", err);
    }

    window.scrollTo(0, 0);
  };

  return (
    <div ref={frameRef}>
      
      {isInView && (
        <motion.div
          ref={ref}
          className="h-screen lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className=" relative h-[40%] bg-hi-light1 lg:h-full lg:w-[50%]">
            <Image
              src={tempPic}
              fill
              objectFit="cover"
              alt="temp style photo"
              className="object-left opacity-0 duration-700"
              onLoadingComplete={(image) => {
                image.classList.remove("opacity-0");
                setImageLoaded(true);
              }}
            />
            
          </div>

          <div className="flex h-[60%] items-center justify-center lg:h-full lg:w-[50%] ">
            {formSuccess ? (
              <span>Thanks for your message!</span>
            ) : (
              <div className=" flex h-[75%] w-[75%] flex-col items-center ">
                  <Title title="Get in touch" />
                  <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex h-full w-[100%] flex-col justify-center space-y-8"
                >
                  <input
                    className="rounded-md border border-hi-light1 p-2 hover:border-hi-light2 hover:bg-hi-light2/10"
                    type="text"
                    placeholder="name"
                    {...register("name", { required: "name is required" })}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className="flex justify-end text-hi-light1">
                      {" "}
                      {errors.name.message}
                    </span>
                  )}

                  <input
                    className="rounded-md border border-hi-light1 p-2 hover:border-hi-light2 hover:bg-hi-light2/10 "
                    type="text"
                    placeholder="email"
                    {...register("email", {
                      required: "please enter your email address",
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span className="flex justify-end text-hi-light1">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="flex justify-end text-hi-light1">
                      Please enter a valid email address
                    </span>
                  )}

                  <textarea
                    className=" rounded-md border border-hi-light1 p-2 hover:border-hi-light2 hover:bg-hi-light2/10"
                    placeholder="message"
                    {...register("message", {
                      required: "please include a message!",
                      minLength: 10,
                    })}
                    rows={5}
                  />

                  {errors.message && errors.message.type === "required" && (
                    <span className="flex justify-end text-hi-light1">
                      {errors.message.message}
                    </span>
                  )}
                  {errors.message && errors.message.type === "minLength" && (
                    <span className="flex justify-end text-hi-light1">
                      Your message does not exceed the minimum length!
                    </span>
                  )}

                  <div className="w-[50%] self-center">
                    <input
                      className={`w-full rounded-md ${
                        isValid
                          ? `bg-hi-light1 text-light1`
                          : "bg-hi-light1/20 text-hi-light1/30  "
                      }`}
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm2;
