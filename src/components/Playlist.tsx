import React from "react";

export default function Playlist(props: any) {
  const { tracks } = props;
  return (
    <ul className="absolute right-0 top-0">
      {tracks &&
        tracks.map((track: any, key: number) => {
          return <li key={key}>{track.name}</li>;
        })}
    </ul>
  );
}
