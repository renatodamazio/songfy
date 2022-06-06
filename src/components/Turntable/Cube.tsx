import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Needle from "./Needle";
import Cylinder from "../Cylinder";
import Vinyl from "../Vinyl";
import getImageFromAPi from "../../utils/getImageFromApi";
export default function Table(props: any) {
  const { rotate } = props;
  const [totalRounds, {}] = useState<any>([1, 2]);
  const [showVinyl, setShowVinyl] = useState<boolean>(false);
  const album: any = useSelector<any>((state) => state.albumOpen);
  const video: any = useSelector<any>((state) => state.video);

  console.log(video);

  useEffect(() => {
    if (album?.albumOpen?.artist) {
      setTimeout(() => {
        setShowVinyl(true);
      }, 800);
    }
  }, [album]);

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

        <div
          className={`vinyl-on-table run-record inline-block rotate-[81deg]`}
        >
          <span
            className={`${album?.albumOpen?.artist ? "open-record" : ""} wheel`}
          >
            {showVinyl && (
              <>
                <div className="vinyl-reflex"></div>
                <span className={`${video.state === 1 ? "rotate-spin" : ""}`}>
                  <Vinyl
                    image={getImageFromAPi({
                      images: album?.albumOpen.image,
                      size: 3,
                    })}
                  />
                </span>
              </>
            )}
          </span>
        </div>

        <div className="arm">
          <div
            className="absolute top-0 h-full rotate-45 w-full translate-y-[9px] translate-x-[126px] transition-ease-in-renato"
            style={{
              transformStyle: "preserve-3d",
              top: "-150px",
              transform:
                `translateZ(21px) translateX(81px) translateY(143px) skew(0deg, 0deg) rotate(${video.state === 1 ? "-333deg" : "-360deg"})`,
            }}
          >
            <div className="cylinder-smaller">
              <Cylinder total={16} />
            </div>
            <div className="cylinder-bigger">
              <Cylinder total={16} />
            </div>

            <div className="stick-long">
              <Needle />
            </div>
          </div>

          <div
            className="absolute"
            style={{
              transform: "translateZ(32px) translate(46px, -42px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="arm-spinner">
              <Cylinder total={8} className="spinner-piece" />
              <Cylinder total={23} />
            </div>

            <div className="cylinder-middle">
              <Cylinder total={30} />
            </div>
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
                  <a
                    href="https://github.com/renatodamazio"
                    target={"_blank"}
                    rel="noreferrer noopener"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/renato-dam%C3%A1zio/"
                    target={"_blank"}
                    rel="noreferrer noopener"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
