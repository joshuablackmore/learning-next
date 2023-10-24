"use client";
import FullScreenImage from "./fullscreen";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView as framerView } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../../context/active-section-context";

type Artwork = {
  image: string;
  _id: string;
  alt: string;
  name: string;
};

export default function ClientPortfolio({ image, _id, alt, name }: Artwork) {
  /* active section */
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Portfolio");
    }
  }, [inView]);

  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div>
      <motion.div
        ref={ref}
        key={_id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Image
          loading="lazy"
          width="450"
          height="300"
          className=" rounded-lg bg-hi-light1 blur transition-all duration-1000 ease-in-out"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8zX1kFwAF2QJmdeHF+QAAAABJRU5ErkJggg=="
          src={image}
          alt={alt}
          onClick={() => setFullscreenImage(image)}
          onLoadingComplete={(image) => {
            image.classList.remove("blur");
            setTimeout(() => {
              image.classList.add("shadow-lg");
            }, 1000);
          }}
        />

        {/* Render the fullscreen image component if an image is clicked */}
        {fullscreenImage && (
          <FullScreenImage
            imageUrl={fullscreenImage}
            onClose={() => setFullscreenImage(null)}
          />
        )}
      </motion.div>
    </div>
  );
}
