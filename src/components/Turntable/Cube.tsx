import React, { useState } from "react";
import Vinyl from "../Vinyl";
import Needle from "./Needle";
import Cylinder from "../Cylinder";
export default function Table(props: any) {
  const { rotate } = props;
  const [totalRounds, {}] = useState<any>([1, 2]);
  const [pieces, {}] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8]);
  const [piecesPool, {}] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

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
          <div className="cylinder-smaller">
            <Cylinder total={16} />
          </div>
          <div className="cylinder-bigger">
            <Cylinder total={16} />
          </div>
          <div className="arm-spinner">
            <Cylinder total={8} className="spinner-piece" />
            <Cylinder total={23} />
          </div>

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
