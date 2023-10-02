"use client";
import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.css";

interface VideoProps {
  videoSrc: string;
}

const Videotest = ({ videoSrc }: VideoProps) => {
  const [hasWindow, setHasWindow] = React.useState(false);
  const [playing, setPlaying] = React.useState(true);
  const [test, setTest] = React.useState(false);

  const loadedRef = React.useRef(null);
    const [secondsLoaded, setSecondsLoaded] = React.useState(0);
    

    const [duration, setDuration] = React.useState(0);
    const [progress, setProgress] = React.useState(0)
    

  const [muted, setMuted] = React.useState(true);



  React.useEffect(() => {
    if (window !== undefined) {
      setHasWindow(true);
    }
  }, []);

//   React.useEffect(() => {
//     const player = loadedRef.current;

//     if (player) {
//       setSecondsLoaded(player.getSecondsLoaded());
//     }
//   }, [muted]);

  

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0 }}
        exit={{ translateX: "100%" }}
        transition={{ duration: 1 }}
        className="w-[50%]"
      >
        {hasWindow && (
                  <ReactPlayer
                    
            url={videoSrc}
            width={"100%"}
            height={500}
            playing={playing}
            muted={muted}
            onPause={() => {
              setTest(!test);
            }}
            ref={loadedRef}
                      controls
                      onProgress={(e) => {
                          setProgress(e.playedSeconds)
                      }}
                      onDuration={(e) => {
                          setDuration(e)
                      }}
                      
          />
        )}
        <progress
          id="progress"
          max={duration}
          value={progress}
          className={styles.progress}
        ></progress>
      </motion.div>

      <p
        onClick={() => {
          setMuted(!muted);
        }}
      >
        {muted ? "unmute" : "mute"}
      </p>
      <p
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "pause" : "play"}
      </p>
      <p>{test ? "yo" : "no"}</p>
      <h1>{duration.toFixed(1)}</h1>
    </AnimatePresence>
  );
};

export default Videotest;
