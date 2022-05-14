import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import { useSelector, useDispatch } from "react-redux";
import Vinyl from "../components/Vinyl";
import { setAlbums, setOpen } from "../store/reducers/albumsReducer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { MdPlayArrow } from "react-icons/md";

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


export default function Carousel(props: any) {
  const [pickUpAlbum, setPickUpAlbum] = useState<any>("");
  const { setOpenAlbum } = props;

  useEffect(() => {
    setOpenAlbum(pickUpAlbum);
  }, []);
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
              <Item
                name={item.name}
                indice={key}
              >
                <>
                  <button
                    className={`load-album ease-in-out-cubic ${item.name === pickUpAlbum.name ? "rounded-[50%]" : ""}`}
                    onClick={() => setPickUpAlbum(item)}
                  >
                    <MdPlayArrow fontSize={50} />
                  </button>
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
