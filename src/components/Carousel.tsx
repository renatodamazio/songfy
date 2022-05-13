import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import { useSelector, useDispatch } from "react-redux";
import Vinyl from "../components/Vinyl";
import { setAlbums, setOpen } from "../store/reducers/albumsReducer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

import "swiper/css/effect-coverflow";
export const Item = (props: any) => {
  return (
    <div
      onClick={() => {
        ActiveSlider(props);
      }}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      data-album-name={props.name}
      className="carousel-item"
    >
      <span className="transition-all">{props.children}</span>
    </div>
  );
};

const getAlbumImage = (data: any[]) => {
  const largeImage = data[3];
  return largeImage["#text"];
};

const removeAllCoverClasses = () => {
  document
    .querySelectorAll(".destak-cover")
    .forEach((item) => item.classList.remove("destak-cover"));

  document
    .querySelectorAll(".remove-cover")
    .forEach((item) => item.classList.remove("remove-cover"));

  document
    .querySelectorAll(".open-vinyl")
    .forEach((item) => item.classList.remove("open-vinyl"));
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

  setTimeout(() => items[indice].classList.add("destak-cover"), 700);
  setTimeout(() => items[indice].classList.add("open-vinyl"), 900);
};

export default function Carousel(props: any) {
  return (
    <Swiper
      direction="vertical"
      modules={[EffectCoverflow]}
      effect="coverflow"
      spaceBetween={0}
      centeredSlides={true}
      loop={false}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.items.map((item: any, key: number) => {
        return (
          <SwiperSlide key={key}>
            <Item name={item.name} indice={key}>
              <>
                <Image
                  key={key}
                  className="rounded-lg inline-block z-10 relative h-full"
                  src={getAlbumImage(item.image)}
                />{" "}
              </>
            </Item>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
