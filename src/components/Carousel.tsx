import React, { useEffect, useState } from "react";

export const Item = (props: any) => {
  return (
    <li
      onClick={() => ActiveSlider(props)}
      data-album-name={props.name}
      className="flex flex-col justify-center content-center w-full absolute top-0 left-0 transition-all"
      style={{
        width: "400px",
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

const removeAllCoverClasses = () => {
  document
    .querySelectorAll(".destak-cover")
    .forEach((item) => item.classList.remove("destak-cover"));

  document
    .querySelectorAll(".remove-cover")
    .forEach((item) => item.classList.remove("remove-cover"));

  document
    .querySelectorAll(".open-vinil")
    .forEach((item) => item.classList.remove("open-vinil"));
};

const ActiveSlider = async (query: any) => {
  removeAllCoverClasses();

  const indice: number = query.indice;
  const items: any = document
    .querySelector("#parent-covers")
    ?.querySelectorAll("li");

  for (let i: any = items?.length - 1; i >= indice; i--) {
    items[i].classList.add("remove-cover");
  }

  setTimeout(() => items[indice].classList.add("destak-cover"), 300);
  setTimeout(() => items[indice].classList.add("open-vinil"), 600);
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
    <ul
      id="parent-covers"
      className="relative w-full justify-center content-center"
    >
      {props.children}
    </ul>
  );
}
