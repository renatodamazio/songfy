import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../store/reducers/albumsReducer";
export const Item = (props: any) => {
  return (
    <li
      onClick={() => {
      }}
      data-album-name={props.name}
      className="carousel-item"
      style={{
        perspective: "900px",
        transformStyle: "preserve-3d",
      }}
    >
      <span className="transition-all" style={{ transform: "rotateX(35deg)" }}>
        {props.children}
      </span>
    </li>
  );
};

export default function Carousel(props: any) {
  const configureImageLayout = () => {
    const totalImages = props.children.length;
    const parentCover: any = document.querySelector("#parent-covers");

    if (typeof parentCover !== "object") return false;

    for (let i = 0; i < totalImages; i++) {
      let cover: any = parentCover?.querySelectorAll(`li`)[i];
      let top: number = (i * 30) / 0.5;
      cover.style.transform = `translateY(${top}px)`;
    }
  };

  useEffect(() => {
    configureImageLayout();
  }, []);

  return (
    <>
    <div></div>
      <ul
        id="parent-covers"
        className={`relative w-full justify-center content-center ${props.className}`}
      >
        {props.children}
      </ul>
    </>
  );
}
