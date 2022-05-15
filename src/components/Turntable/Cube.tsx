import React from "react";
import Vinyl from "../Vinyl";
import Needle from "./Needle";

import Baoard from "./Board";
export default function Table(props: any) {
  const { rotate } = props;

  return (
    <div className={`${rotate ? "rotate-table" : ""} cube`}>
      <div className="board"></div>
      <div className="wood"></div>
      <div className="wood wood-lateral right"></div>
      {/* <div className="wood"></div> */}
      {/* <div className="back">BACK</div> */}
      {/* <div className="front">FRONT</div>*/}
      {/* <div className="right"></div> */}
      {/* <div className="left">LEFT</div>  */}
    </div>
  );
}
