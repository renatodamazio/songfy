import React from "react";
import Image from "./Image";
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
    <div>
      <div>
        <Image src={getImage(props.image)} alt={props.artist} />
      </div>
      <div>
        <h1>{props.album}</h1>
        <ul>
          {tracks?.track.map((item: any) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
