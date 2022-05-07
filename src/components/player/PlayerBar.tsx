import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlayerBar(props: any) {
  const getPlayTracks = useSelector((state: any) => state.tracks.playTrack);
  const [playing, setPlaying] = useState<any>([]);

  useEffect(() => {
    const total = getPlayTracks.length - 1;
    setPlaying(getPlayTracks[total]);
  }, [getPlayTracks]);

  useEffect(() => {
    console.log(playing);
  }, [playing]);

  return <div>{playing?.name} {playing?.artist?.name}</div>;
}
