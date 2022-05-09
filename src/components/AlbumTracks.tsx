import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { setTrack, setPlayTrack } from "../store/reducers/musicTrackReducer";
import { useDispatch } from "react-redux";
import { Play } from "./buttons";

interface AlbumInterface {
  image: string;
  artist: string;
  album: string;
  [tracks: string]: string | object;
}

export default function AlbumTracks(props: AlbumInterface) {
  const tracks: any = props.tracks;
  const dispatch = useDispatch();

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
  return tracks?.track?.length > 0 ? (
    <div className="flex mb-6">
      <div className="p-2  w-96 min-w-min">
        <Image
          onClick={() => dispatch(setTrack(tracks?.track))}
          src={getImage(props.image)}
          alt={`Play all ${props.artist} album`}
          className="rounded-md  w-96 cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-3">{props.album}</h1>
        <ul>
          {tracks?.track.map((item: any, key: number) => (
            <li
              className="w-full inline-block"
              key={key}
              data-track={`${props.artist}-${item.name}`}
            >
              <Link
                to="#!"
                className="w-full py-2 px-2 hover:bg-pink rounded-md hover:bg-opacity-25 flex"
              >
                <Play
                  size="small"
                  onClick={() => dispatch(setPlayTrack(item))}
                />
                &nbsp;&nbsp;
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
