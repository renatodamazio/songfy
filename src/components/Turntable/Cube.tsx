import React, { useState } from "react";
import Vinyl from "../Vinyl";
import Needle from "./Needle";
import Cylinder from "../Cylinder";
export default function Table(props: any) {
  const { rotate } = props;
  const [totalRounds, {}] = useState<any>([1, 2]);

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
          {props.vinyl}
          {/* <Vinyl /> */}
        </div>

        <div className="arm">
          <div className="cylinder-smaller">
            <Cylinder total={16} />
          </div>
          <div className="cylinder-bigger">
            <Cylinder total={16} />
          </div>

          <div className="cylinder-middle">
            <Cylinder total={30} />
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
        <div className="wood-wrapper">
          <div className="wood wood-front"></div>
          <div className="wood wood-left"></div>
          <div className="wood wood-right"></div>
          <div className="wood wood-back"></div>
          <div className="wood wood-bottom">
            <span className="about-author">
              <ul>
                <li>Renato Damázio</li>
                <li>
                  <a href="https://github.com/renatodamazio" target={"_blank"} rel="noreferrer noopener">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/renato-dam%C3%A1zio/" target={"_blank"} rel="noreferrer noopener">Linkedin</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
