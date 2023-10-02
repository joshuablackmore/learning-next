"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface VideoProps {
  videoSrc: string;
}

const Video = ({ videoSrc }: VideoProps) => {
  const [mute, setMute] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const vidEl = React.useRef<HTMLVideoElement>(null);

  const handleMute = () => {
    setMute(!mute);
  };
  const handlePause = () => {
    setPaused(!paused);
  };

  React.useEffect(() => {
    if (!vidEl.current) return;

    if (paused) {
      vidEl.current.play();
    } else {
      vidEl.current.pause();
    }
  }, [paused]);

  console.log(vidEl);

  return (
    <AnimatePresence>
      <div className="flex h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ translateX: "100%" }}
          animate={{ translateX: 0 }}
          exit={{ translateX: "100%" }}
          transition={{ duration: 1 }}
        >
          <video src={videoSrc} muted={mute} controls ref={vidEl} />
        </motion.div>
        <button onClick={handleMute}>{mute ? "unmute" : "mute"}</button>
        <button onClick={handlePause}>{paused ? "pause" : "play"}</button>
      </div>
    </AnimatePresence>
  );
};

export default Video;
