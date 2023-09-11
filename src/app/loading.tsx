import React from "react";
import { BarLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 pt-[45px] 2xl:pt-[60px]">
      <h1>Loading...</h1>
      <BarLoader color="#36d7b7" speedMultiplier={2} />
    </div>
  );
};

export default loading;
