"use client";

import { useState } from "react";

const HelloWorld = ({ image, name, id }) => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <img src={image}></img>
      <h2>{id}</h2>
    </div>
  );
};

export default HelloWorld;
