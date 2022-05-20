import React, { useState } from "react";
import Image from "../components/Image";
import Vinyl from "../components/Vinyl";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import ButtonLoading from "./ButtonLoading";
import getImageFromAPi from "../utils/getImageFromApi";

import "swiper/css/effect-coverflow";
export const Item = (props: any) => {
  return (
    <div className={`carousel-item ${props.className}`}>
      <span className="ease-out-cubic rounded-lg  relative">
        {props.children}
      </span>
    </div>
  );
};

function Carousel(props: any) {
  const { className } = props;
  return (
    <>
      <Swiper
        className={`${className ? className : ""}`}
        direction="vertical"
        modules={[EffectCoverflow]}
        effect="coverflow"
        spaceBetween={0}
        centeredSlides={true}
        speed={900}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={5}
      >
        {props.items.map((item: any, key: number) => {
          return (
            <SwiperSlide key={key}>
              <Item name={item.name} indice={key}>
                <>
                  <ButtonLoading loading={props.loading} album={item} />
                  <Image
                    key={key}
                    className="inline-block z-10 relative h-full ease-out-cubic rounded-lg border-2 border-transparent"
                    src={getImageFromAPi({ images: item.image, size: 3 })}
                  />
                  <div className="vinyl-wrapper ease-out-cubic-back">
                    <Vinyl
                      image={getImageFromAPi({ images: item.image, size: 3 })}
                    />
                  </div>
                </>
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const CarouselMemo = React.memo(Carousel);

export default CarouselMemo;
