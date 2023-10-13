"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const Title = ({ title }) => {
  const frameRef = useRef(null);
  const isInView = useInView(frameRef);

  return (
    <div ref={frameRef}>
      {isInView && (
        <div className="flex justify-center">
          <motion.h1
            className="text-xl font-semibold"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
        </div>
      )}
    </div>
  );
};
