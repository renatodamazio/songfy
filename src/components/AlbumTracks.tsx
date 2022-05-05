import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
interface AlbumInterface {
  image: string;
  artist: string;
  album: string;
  [tracks: string]: string | object;
}

export default function AlbumTracks(props: AlbumInterface) {
  const tracks: any = props.tracks;

  const getImage = (image: any) => {
    for (const key in image[2]) {
      if (key === "#text") {
        return image[2][key];
      }
    }
    return "";
  };
  return (
    <div className="flex">
      <div className="p-2">
        <Image
          src={getImage(props.image)}
          alt={props.artist}
          className="rounded-md"
        />
      </div>
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-3">{props.album}</h1>
        <ul>
          {tracks?.track.map((item: any) => (
            <li className="w-full inline-block">
              <Link to="#!" className="w-full py-2 px-2 inline-block hover:bg-pink rounded-md hover:bg-opacity-25">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
