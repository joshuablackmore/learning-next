"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const HeroClient = ({ heading, intro }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const profPic =
    "https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2";

  useEffect(() => {
    const image = new Image();
    image.src = profPic;
    image.onload = () => {
      setImageSrc(image.src);
      setImageLoaded(true);
    };
  }, []);

  return (
    <>
      <div className=" bg-light1 flex flex-col min-h-screen m-auto pt-[46px] xl:pt-0 border-b">
        {imageLoaded && (
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex min-h-[395px] h-[50%] md:h-[60%] lg:h-[80%] xl:flex-col justify-center "
          >
            <img
              src={imageSrc}
              alt="hero pic"
              className=" object-cover"
            ></img>
          </motion.div>
        )}

        <div className=" w-[100%] flex flex-col items-center text-fontDark1 ">
          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="w-full flex flex-col  items-start md:mx-2 xl:mx-20  "
            >
              <div className="pt-6">
                <h1 className=" text-[2.2rem] flex justify-center">
                  {heading}
                </h1>
                <div className="flex flex-col justify-center m-3 text-xl font-light pl-2 pt-8">
                  <PortableText value={intro[0]} />
                  {/* <Link
                    href="/portfolio"
                    className="pt-6 pb-6 flex justify-center text-hi-light2 text-xl hover:text-hi-light1 pl-2"
                  >
                    View Portfolio
                  </Link> */}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroClient;
