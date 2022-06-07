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
        className="image-record"
        src={
          image
        }
      />
    </div>
  );
}
