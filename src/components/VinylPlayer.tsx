import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getImageFromAPi from "../utils/getImageFromApi";
import Playlist from "./Playlist";
import Vinyl from "./Vinyl";
import Image from "./Image";
interface boundingInterface {
  x: number;
  y: number;
  top: number;
  left: number;
}

export default function VinylPlayer(props: any) {
  const { className } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const album = useSelector((state: any) => state.albumTrack);
  const [position, setPositon] = useState<boundingInterface>();
  const { albumOpen } = useSelector((state: any) => state.albumOpen);
  const { id } = useParams();

  const mountedComponent = () => {
    const artist = id;
    const albumName = searchParams.get("album");
    const musicName = searchParams.get("music");

    getAlbumElement();
  };

  const getAlbumElement = () => {
    const element: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".swiper-slide-active"
    );

    if (!element.length) return false;

    const bound: boundingInterface = element[0].getBoundingClientRect();

    setPositon({
      x: bound.x,
      y: bound.y,
      top: bound.top,
      left: bound.left,
    });
  };

  useEffect(() => {
    console.log(position);
  }, [position]);

  useEffect(() => {
    mountedComponent();
  }, [id, searchParams]);

  const centerElement =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-[0.9] w-[337px] h-[337px]";

  return (
    <>
      <div
        className={`${centerElement} ${className} transition-ease-in-renato`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Vinyl
          rotate={false}
          image={getImageFromAPi({ images: albumOpen.image, size: 3 })}
          style={{ transform: `translate3d(-50%, -50%, 19px)` }}
          className="record absolute top-1/2 left-1/2  rotate-0"
        />
      </div>
    </>
  );
}
