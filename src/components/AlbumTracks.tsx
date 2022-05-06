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
    if (typeof image === "object" && image.length > 0) {
      for (const key in image[3]) {
        if (key === "#text") {
          return image[3][key];
        }
      }
    }
    return "";
  };
  return (
    tracks?.track?.length > 0 ? (
      <div className="flex mb-6">
        <div className="p-2  w-96 min-w-min">
          <Image
            src={getImage(props.image)}
            alt={props.artist}
            className="rounded-md  w-96"
          />
        </div>
        <div className="p-4">
          <h1 className="text-4xl font-bold mb-3">{props.album}</h1>
          <ul>
            {tracks?.track.map((item: any, key: number) => (
              <li className="w-full inline-block" key={key}>
                <Link
                  to="#!"
                  className="w-full py-2 px-2 inline-block hover:bg-pink rounded-md hover:bg-opacity-25"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : <></>
  );
}
