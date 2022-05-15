import React, { useState } from "react";
import Cube from "./Cube";
export default function BaseTurnTable() {
  const [rotate, setRotate] = useState(false);

  const perspectiveStyle = {
    perspective: '600px',
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };
  

  return (
    <div style={perspectiveStyle} className="absolute flex-col items-center justify-center w-full h-full flex">
      <Cube rotate={rotate} />
      <button className="bg-white absolute top-1/2 left-0" onClick={() => setRotate(!rotate)}>
        Turn {rotate ? "off 3d" : "on 3d"}
      </button>
    </div>
  );
}
