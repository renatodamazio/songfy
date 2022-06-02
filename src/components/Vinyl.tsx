import React from "react";
import Image from "./Image";
export default function vinyl(props: any) {
  const { image, style } = props;
  return (
    <div
      className="w-[300px] h-[300px] border-2 border-[black] rounded-full"
      style={{
        ...style,
        background: " repeating-radial-gradient(#000000, #141414 3px)",
      }}
    >
      <Image
        className="rounded-full w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={
          image
        }
      />
    </div>
  );
}
