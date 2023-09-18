"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type blogParams = {
  title: string;
  image: string;
  slug: string;
  excerpt: string;
};

const BlogClient: React.FC<blogParams> = ({ title, image, slug, excerpt }) => {
  return (
    <div>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-xl border shadow-lg shadow-dark3 hover:shadow-none active:bg-hi-light1"
      >
        <Image
          className="opacity-0 transition-opacity duration-[0.5s] "
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          loading="lazy"
          src={image}
          alt={title}
          objectFit="cover"
          fill={true}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-dark3/75 transition-all duration-300 hover:bg-dark3/0" />

        <div className="z-50 mt-4 flex flex-col items-center text-light1">
          <h1 className="mb-4 text-xl font-bold">{title}</h1>
          <p>{excerpt}</p>
          <Link
            href={`blog/${slug}`}
            className="z-50 mt-4 rounded-md bg-hi-light1 p-1 hover:bg-hi-light2 active:bg-dark3"
          >
            Read more...
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogClient;
