import React from "react";
import Image from "../components/Image";
import Vinyl from "../components/Vinyl";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import ButtonLoading from "./ButtonLoading";

import "swiper/css/effect-coverflow";
export const Item = (props: any) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      data-album-name={props.name}
      style={{ ...props.style }}
      className={`carousel-item ${props.className}`}
    >
      <span className="ease-out-cubic rounded-lg  relative">
        {props.children}
      </span>
    </div>
  );
};

const getAlbumImage = (data: any[]) => {
  const largeImage = data[3];
  return largeImage["#text"];
};

function Carousel(props: any) {
  return (
    <>
      <Swiper
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
                <ButtonLoading album={item}/>
                  {/* <button
                    className={`load-album ease-in-out-cubic ${
                      item.name === pickUpAlbum.name
                        ? "rounded-[50%] bg-white hover:bg-gray-light"
                        : ""
                    }`}
                    onClick={(ev) => {
                      ev.preventDefault();
                      if (item.name !== pickUpAlbum.name) {
                        // setPickUpAlbum(item);
                      }
                    }}
                  >
                    <MdPlayArrow
                      fontSize={50}
                      className={
                        item.name === pickUpAlbum.name
                          ? "opacity-0"
                          : "opacity-1"
                      }
                    />
                    <Loader
                      className={`${
                        item.name === pickUpAlbum.name
                          ? "opacity-1"
                          : "opacity-0"
                      } absolute top-0 left-0 -my-1 -mx-1`}
                    />
                  </button> */}
                  <Image
                    key={key}
                    className="inline-block z-10 relative h-full ease-out-cubic rounded-lg border-2 border-transparent"
                    src={getAlbumImage(item.image)}
                  />
                  <div className="vinyl-wrapper ease-out-cubic-back">
                    <Vinyl image={getAlbumImage(item.image)} />
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
