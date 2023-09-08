"use client";
import FullScreenImage from "./fullscreen";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";



export default function ClientPortfolio({ image, name, id, alt }) {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          loading="lazy"
          width="450"
          height="300"
          className="rounded-lg"
          src={image}
          alt={alt}
          onClick={() => handleImageClick(image)}
        />

        {/* Render the fullscreen image component if an image is clicked */}
        {fullscreenImage && (
          <FullScreenImage
            imageUrl={fullscreenImage}
            onClose={handleCloseFullscreen}
            
          />
        )}
      </motion.div>
    </>
  );
}