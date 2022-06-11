import Image from "./Image";
import getImageFromAPi from "../utils/getImageFromApi";
import { Link } from "react-router-dom";
import { setOpen } from "../store/reducers/albumOpenReducer";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { useLocation } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect } from "react";

export default function AlbumsList(props: any) {
  let { search } = useLocation();
  const { albums } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof albums.album === "object") {
      const albumName = search.replace("?album=", "").replace(/\+/gi, " ");
      const paginations: any = document.querySelectorAll(
        ".swiper-pagination-bullet"
      );
      let page = 0;

      albums?.album?.forEach((item: any, key: number) => {
        if (item.name === albumName) page = key;
      });

      paginations[page]?.click();
    }
  }, [search]);

  return (
    <div className="album-list glass-morphism">
      <Swiper
        slidesPerView={9}
        spaceBetween={30}
        freeMode={true}
        slideToClickedSlide={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {albums.album &&
          albums?.album?.map((item: any) => {
            return (
              <SwiperSlide key={item.name} className="hover:scale-105">
                <Link to={"#!"} onClick={() => dispatch(setOpen(item))}>
                  <Image
                    className="rounded-lg"
                    alt={item.name}
                    src={getImageFromAPi({ images: item.image, size: 2 })}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
