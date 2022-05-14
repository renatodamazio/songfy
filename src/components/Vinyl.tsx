import React from "react";
import Image from "./Image";
export default function vinyl(props: any) {
  const { className, image, rotate} = props;

  return (
    <div className={`vinyl-disk-container ${className}`}>
      <div className="vinyl-reflex"></div>

      <div className={`vinyl-disk ${rotate ? "animate-spin duration-700" : ""}`}>
        <div className="vinyl-cover">
          <Image src={image} />
        </div>
      </div>
    </div>
  );
}
