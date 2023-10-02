import React from "react";
import Videotest from "./Video";

const vid = "https://www.youtube.com/watch?v=LXb3EKWsInQ";

const page = () => {
  return (
    <div className="mt-[80px]">
      <Videotest videoSrc={vid} />
    </div>
  );
};

export default page;
