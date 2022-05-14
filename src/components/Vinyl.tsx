import React from "react";
import Image from "./Image";
export default function vinyl(props: any) {
  return (
    <div className={`vinyl-disk-container ${props.className}`}>
      <div className="vinyl-reflex"></div>

      <div className="vinyl-disk">
        <div className="vinyl-cover">
          <Image src={props.image} />
        </div>
      </div>
    </div>
  );
}
