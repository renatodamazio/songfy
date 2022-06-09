import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Needle from "./Needle";
import Cylinder from "../Cylinder";
import Vinyl from "../Vinyl";
import getImageFromAPi from "../../utils/getImageFromApi";
import VideoPlayer from "../VideoPlayer";
import { setThumbColors } from "../../store/reducers/VideoReducer";

const Vibrant = require("node-vibrant");

export default function Table(props: any) {
  const { rotate } = props;
  const [showVinyl, setShowVinyl] = useState<boolean>(false);
  const album: any = useSelector<any>((state) => state.albumOpen);
  const video: any = useSelector<any>((state) => state.video);
  const [ledColor, setLedColor] = useState();
  const dispatch = useDispatch();
  let startLedAnimation: any;

  useEffect(() => {
    if (album?.albumOpen?.artist) {
      setTimeout(() => {
        setShowVinyl(true);
      }, 800);
    }
  }, [album]);

  useEffect(() => {
    if (video.state === 1) {
      vinylLed();
    }
  }, [video.state]);

  useEffect(() => {
    if (video.state === 1) {
      vinylLed();
    }
  }, [video.thumbColors]);

  const vinylLed = (status?: number) => {
    let indice = 0;

    const limit = video.thumbColors.length - 1;
    const color = video.thumbColors;

    setLedColor(color[indice]?.hex);

    startLedAnimation = setInterval(() => {
      indice++;
      if (indice === limit) indice = 0;
      setLedColor(color[indice]?.hex);
    }, 2800);
  };

  const getCollorPaletteFromYtCover = (e: any) => {
    Vibrant.from(`${e.target.src}`)
      .maxColorCount(200)
      .getPalette()
      .then((palette: any) => {
        const colors = [];

        for (let color in palette) {
          const hex = palette[color].getHex();

          colors.push({ hex });
        }

        dispatch(setThumbColors(colors));
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <>
      <div className="cover-bg">
        <img
          src={video.thumbnail}
          onLoad={(e) => getCollorPaletteFromYtCover(e)}
        />
      </div>
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
          <span
            className="vinyl-led"
            style={{
              boxShadow:
                video.state === 1
                  ? `0px 0px 12px 6px ${ledColor}`
                  : `0px 0px 0px 6px #000`,
              border:
                video.state === 1 ? `1px solid ${ledColor}` : `1px solid #000`,
            }}
          ></span>
        </div>

        <div className="arm">
          <div
            className="absolute top-0 h-full rotate-45 w-full translate-y-[9px] translate-x-[126px] transition-ease-in-renato"
            style={{
              transformStyle: "preserve-3d",
              top: "-150px",
              transform: `translateZ(21px) translateX(81px) translateY(143px) skew(0deg, 0deg) rotate(${
                video.state === 1 ? "-333deg" : "-360deg"
              })`,
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
        <div className="board">
          <VideoPlayer />
        </div>
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
