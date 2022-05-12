import React, { useEffect, useState, useRef } from "react";
import Vinyl from "../components/Vinyl";
import Image from "../components/Image";

export default function Carousel(props: any) {
  const [items, setItems] = useState<any>([...props.items]);
  const [start, _setStart] = useState<number>(0);
  const [pressed, _setPressed] = useState<boolean>(false);

  const carousel: any = useRef(null);
  const carouselInner: any = useRef(null);

  const pressedRef: any = useRef(pressed);
  const startRef: any = useRef(start);

  const setPressed = (state: boolean) => {
    pressedRef.current = state;
    _setPressed(state);
  };

  const setStart = (state: number) => {
    startRef.current = state;
    _setStart(state);
  };

  const getAlbumImage = (data: any[]) => {
    const largeImage = data[3];
    return largeImage["#text"];
  };

  const Item = (data: any) => {
    const { name, indice } = data.item;
    return (
      <li className="h-60 flex justify-center align-middle content-center border-2">
        {name}
      </li>
    );
  };

  const carouselMouseDown = () => {
    carousel.current.addEventListener("mousedown", (e: any) => {
      e.preventDefault();

      const distance: number = Number(
        Math.floor(e.offsetY - carouselInner.current.offsetTop)
      );
      const startMouseMove: number = distance;
      setStart(startMouseMove);

      carousel.current.style.cursor = "grabbing";

      setPressed(true);
    });
  };

  const carouselMouseEnter = () => {
    carousel.current.addEventListener("mouseenter", (e: any) => {
      carousel.current.style.cursor = "grab";
    });
  };

  const carouselMouseUp = () => {
    carousel.current.addEventListener("mouseup", (e: any) => {
      setPressed(false);
      carousel.current.style.cursor = "grab";
    });
  };

  const carouselMove = () => {
    carousel.current.addEventListener("mousemove", (e: any) => {
      if (!pressedRef.current) return;

      e.preventDefault();

      let y = e.offsetY;
      let startY = startRef.current;

      carouselInner.current.style.top = `${y - startY}px`;

      checkBounderies();
    });
  };

  const checkBounderies = () => {
    let outer = carousel.current.getBoundingClientRect();
    let inner = carouselInner.current.getBoundingClientRect();

    let total = inner.top - outer.height;

    if (parseInt(carouselInner.current.style.top) > 0) {
      try {
        carouselInner.current.style.top = "0px";
      } catch (err) {
        console.log("error...");
      }
    } else if (Math.abs(total) > inner.height) {
      try {
        carouselInner.current.style.top = `-${inner.height - outer.height}px`;
      } catch (err) {
        console.log("error...");
      }
    }
  };

  useEffect(() => {
    carouselMouseDown();
    carouselMouseEnter();
    carouselMouseUp();
    carouselMove();

    checkBounderies();
  }, []);

  return (
    <div className="carousel" ref={carousel}>
      {pressed ? "sim" : "Não"}
      <ul className="carousel-inner" ref={carouselInner}>
        {items.map((item: any, key: number) => {
          return <Item key={key} indice={key} item={item} />;
        })}
      </ul>
    </div>
  );
}
