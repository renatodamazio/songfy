import React, { useState } from "react";
import Vinyl from "../Vinyl";
import Needle from "./Needle";

import Baoard from "./Board";
export default function Table(props: any) {
  const { rotate } = props;
  const [totalRounds, {}] = useState<any>([1, 2]);
  let inital: number = 60;

  return (
    <>
     
      <div className={`${rotate ? "rotate-table" : ""} cube`}>
      <div className="vinyl-pin">333</div>

        <div className="vinyl-on-table">
          <Vinyl />
        </div>
        <div className="vinyl-base"></div>
        <div className="arm">
          <div className="stick-round-top">
            {totalRounds.map((item: number) => {
              return <span key={item} className={`spot-${item}`}></span>;
            })}
          </div>
          <div className="stick-long">
            <Needle/>
          </div>
        </div>
        <div className="board"></div>
        <div className="wood"></div>
        <div className="wood wood-lateral right"></div>
        {/* <div className="wood"></div> */}
        {/* <div className="back">BACK</div> */}
        {/* <div className="front">FRONT</div>*/}
        {/* <div className="right"></div> */}
        {/* <div className="left">LEFT</div>  */}
      </div>
    </>
  );
}
