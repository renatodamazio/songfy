import React, { useEffect, useState, useRef } from "react";
import Vinyl from "../components/Vinyl";
import Image from "../components/Image";

export default function Carousel(props: any) {
  const [items, setItems] = useState<any>([...props.items]);
  const [start, setStart] = useState<number>(0);
  const [pressed, setPressed] = useState<boolean>(false);

  const carousel: any = useRef(null);
  const carouselInner: any = useRef(null);

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
      setPressed(true);

      const startMouseMove = e.offsetX - carouselInner.current.offsetTop;
      setStart(startMouseMove);

      carousel.current.style.cursor = "grabbing";
    });
  };

  const carouselMouseEnter = () => {
    carousel.current.addEventListener("mouseenter", (e: any) => {
      carousel.current.style.cursor = "grab";
    });
  };

  const carouselMouseUp = () => {
    carousel.current.addEventListener("mouseup", (e: any) => {
      carousel.current.style.cursor = "grab";
    });
  };

  useEffect(() => {
    carouselMouseDown();
    carouselMouseEnter();
    carouselMouseUp();
  }, []);

  return (
    <div className="carousel" ref={carousel}>
      <ul className="carousel-inner" ref={carouselInner}>
        {items.map((item: any, key: number) => {
          return <Item key={key} indice={key} item={item} />;
        })}
      </ul>
    </div>
  );
}
