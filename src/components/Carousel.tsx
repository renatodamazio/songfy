import React, { useEffect, useState, useRef } from "react";
import Vinyl from "../components/Vinyl";
import Image from "../components/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function Carousel(props: any) {
  const [items, {}] = useState<any>([...props.items]);
  const carousel: any = useRef(null);

  const getAlbumImage = (data: any[]) => {
    const largeImage = data[3];
    return largeImage["#text"];
  };

  const Item = (props: any) => {
    const { name, image } = props;
    return (
      <div className="carousel-item-wrapper">
        <div className="carousel-item">{name}</div>
      </div>
    );
  };

  const configureSlides = (props: any) => {
    const { slides } = props;
    if (!slides.length) return;
    let index: number = 0;
    let onTop: any = [];
    let onBottom: any = [];

    slides.map((item: any, key: number) => {
      if (item.classList.contains("swiper-slide-active")) return (index = key);
    });

    for (let y = slides.length - 1; y > index; y--) {
      onBottom.push(slides[y]);
    }

    for (let x = index ; x >= 0; x--) {
      if (!slides[x].classList.contains("swiper-slide-next")) {
         onTop.push(slides[x]);
      }
    }

    onTop.forEach((item: any) => {
      const element = item.querySelectorAll(".carousel-item")[0];
      element.classList.add("on-top");
      element.classList.remove("on-bottom");
    });

    onBottom.forEach((item: any) => {
      const element = item.querySelectorAll(".carousel-item")[0];
      element.classList.add("on-bottom");
      element.classList.remove("on-top");
    });

  };

  return (
    <div className="carousel" ref={carousel}>
      <Swiper
        mousewheel={true}
        spaceBetween={0}
        slidesPerView="auto"
        freeMode={false}
        slideToClickedSlide={true}
        freeModeSticky={true}
        effect="coverflow"
        centeredSlides={true}
        direction="vertical"
        coverflowEffect={{
          rotate: -5,
          stretch: 270,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChangeTransitionEnd={(swiper: any) => configureSlides(swiper)}
        onSwiper={(swiper: any) => configureSlides(swiper)}
      >
        {items.map((item: any, key: number) => {
          return (
            <SwiperSlide key={key}>
              <Item name={item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
