"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ClientInsta = ({ lessPics }) => {
  return (
    <div className="pt-[45px] bg-light1 ">
      <h1 className="m-4 flex justify-center">Recent Instagram posts</h1>
      <div className="pb-10 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3 ">
        {lessPics.map((pic) => {
          return (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              key={pic.id}
              className="flex flex-col justify-center items-center border-b sm:border-b-light1 m-2"
            >
              <Image
                loading="lazy"
                src={pic.media_url}
                width="450"
                height="300"
                className="m-2 rounded-md"
                alt="insta feed"
              />
              <p className="m-2">...{pic.caption.slice(0, 20)}....</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientInsta;
