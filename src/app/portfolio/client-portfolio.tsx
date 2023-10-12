"use client";
import FullScreenImage from "./fullscreen";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView as framerView,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../context/active-section-context";

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

  const frameRef = useRef(null);
  const isInView = framerView(frameRef, { once: true });
  // const { scrollYProgress } = useScroll();

  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div ref={frameRef}>
      {isInView && (
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
            className="rounded-lg"
            src={image}
            alt={alt}
            onClick={() => setFullscreenImage(image)}
          />

          {/* Render the fullscreen image component if an image is clicked */}
          {fullscreenImage && (
            <FullScreenImage
              imageUrl={fullscreenImage}
              onClose={() => setFullscreenImage(null)}
            />
          )}
        </motion.div>
      )}
    </div>
  );
}
