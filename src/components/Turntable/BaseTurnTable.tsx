import React, { useState } from "react";
import Cube from "./Cube";

export default function BaseTurnTable(props: any) {
  const { className } = props;
  const [rotate, setRotate] = useState(false);

  const perspectiveStyle = {
    perspective: "600px",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "hsl(0deg 0% 13%)"
  };

  return (
    <div
      style={perspectiveStyle}
      className={`absolute flex-col items-center justify-center w-full h-full flex ${className}`}
    >
      <Cube rotate={rotate} vinyl={props.children} />
      <button
        className="bg-white absolute top-1/2 left-0"
        onClick={() => setRotate(!rotate)}
      >
        Turn {rotate ? "off 3d" : "on 3d"}
      </button>
    </div>
  );
}
