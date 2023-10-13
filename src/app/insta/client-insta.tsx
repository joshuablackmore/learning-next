"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, progress, useInView as framerView } from "framer-motion";
import Image from "next/image";
import { HiPlay, HiStop } from "react-icons/hi";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { instaMedia } from "./page";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../context/active-section-context";
import { once } from "form-data";

const ClientInsta: React.FC<instaMedia> = ({
  media_url,
  media_type,
  id,
  caption,
}) => {
  const [playing, setPlaying] = React.useState(true);
  const [muted, setMuted] = useState(true);
  const [hasWindow, setHasWindow] = React.useState(false);
  const [vidProgress, setVidProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [overlay, setOverLay] = React.useState(true);

  React.useEffect(() => {
    if (window !== undefined) {
      setHasWindow(true);
    }
  }, []);

  /* active section */
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Instagram");
    }
  }, [inView]);

  const frameRef = useRef(null);
  const isInView = framerView(frameRef, { once: true });

  return (
    <div ref={frameRef}>
      {isInView && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          key={id}
          className="m-2 flex flex-col items-center justify-center sm:border-b-dark3"
        >
          {media_type === "IMAGE" ? (
            <>
              <Image
                loading="lazy"
                src={media_url}
                width="500"
                height="350"
                objectFit="true"
                className="m-2 rounded-md opacity-0 transition-all duration-700"
                alt="insta feed"
                onLoadingComplete={(image) => {
                  image.classList.remove("opacity-0");
                  setTimeout(() => {
                    image.classList.add("shadow-xl");
                  }, 1000);
                }}
              />
              <div className="">
                <p className="mx-4 flex flex-1 ">{caption}</p>
              </div>
            </>
          ) : (
            <>
              {hasWindow && (
                <div id="wrap" className={overlay ? styles.blur : ""}>
                  <ReactPlayer
                    playsinline
                    width="100%"
                    height="100%"
                    url={media_url}
                    muted={muted}
                    playing={playing}
                    onProgress={(progress) => {
                      setVidProgress(progress.playedSeconds);
                      if (progress.loadedSeconds > 10) {
                        setOverLay(false);
                      }
                    }}
                    onDuration={(seconds) => {
                      setDuration(seconds);
                    }}
                  />
                </div>
              )}

              <progress
                id="progressBar"
                max={duration}
                value={vidProgress}
                className={styles.progress}
              ></progress>

              <div className="flex gap-4 pb-4">
                <p
                  onClick={() => {
                    setPlaying(!playing);
                  }}
                >
                  {playing ? (
                    <HiStop size={40} className=" text-hi-light1" />
                  ) : (
                    <HiPlay size={40} className=" text-hi-light2" />
                  )}
                </p>

                <p
                  onClick={() => {
                    setMuted(!muted);
                  }}
                >
                  {muted ? (
                    <BiVolumeMute size={35} className="text-hi-light1" />
                  ) : (
                    <GoUnmute size={35} className="text-hi-light2" />
                  )}{" "}
                </p>
              </div>

              <p className="mx-4 ">{caption}</p>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ClientInsta;
