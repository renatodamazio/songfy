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
      <div className="vinyl-pin">
        <span className="pin-left"></span>
        <span className="pin-right"></span>
        <span className="pin-front"></span>
        <span className="pin-back"></span>
        <span className="pin-top"></span>
      </div>


        <div className="vinyl-on-table">
          <Vinyl />
        </div>

        <div className="arm">
          <div className="stick-round-top">
            {totalRounds.map((item: number) => {
              return <span key={item} className={`spot-${item}`}></span>;
            })}
          </div>
          <div className="stick-long">
            <Needle />
          </div>
        </div>
        <div className="board"></div>
        <div className="wood"></div>
        <div className="wood wood-lateral right"></div>
      </div>
    </>
  );
}
