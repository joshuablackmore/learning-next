"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, progress } from "framer-motion";
import Image from "next/image";
import { HiPlay, HiStop } from "react-icons/hi";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { instaMedia } from "./page";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";

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
  const [overlay, setOverLay] = React.useState(false);

  React.useEffect(() => {
    if (window !== undefined) {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={id}
        className="m-2 flex flex-col items-center justify-center border-b sm:border-b-light1"
      >
        {media_type === "IMAGE" ? (
          <>
            <Image
              loading="lazy"
              src={media_url}
              width="450"
              height="300"
              className="m-2 rounded-md pb-4 opacity-0"
              alt="insta feed"
              onLoadingComplete={(image) => {
                image.classList.remove("opacity-0");
              }}
            />
            <p className="mx-4 ">{caption}</p>
          </>
        ) : (
          <>
            {hasWindow && (
              <div id="wrap" className={overlay ? "" : styles.blur}>
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
                      setOverLay(true);
                      
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
    </div>
  );
};

export default ClientInsta;
