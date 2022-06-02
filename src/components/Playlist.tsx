import React from "react";
import { useSelector } from "react-redux";
export default function Playlist(props: any) {
  const albumTracks: any = useSelector<any>(
    (state) => state?.albumTrack?.tracks
  );

  return (
    <div className="absolute h-full justify-center right-0 flex flex-col p-5 w-fit bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">
      <ul className="flex flex-col">
        {albumTracks &&
          albumTracks.map((track: any, key: number) => {
            return (
              <li key={key} className="w-full inline-block">
                <a
                  href="#!"
                  className="track"
                >
                  <i>{track.name}</i>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
