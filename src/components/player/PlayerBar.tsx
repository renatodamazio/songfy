import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getYoutubeVideo from "../../api/getYoutubeVideo";

export default function PlayerBar(props: any) {
  const getPlayTracks = useSelector((state: any) => state.tracks.playTrack);
  const [playing, setPlaying] = useState<any>([]);

  useEffect(() => {
    const total = getPlayTracks.length - 1;
    setPlaying(getPlayTracks[total]);
  }, [getPlayTracks]);

  useEffect(() => {
    if (playing?.artist) {
      getYoutubeVideo(playing?.artist?.name + "+" + playing?.name);
    }
  }, [playing]);
  return (
    <div>
      {playing?.name} {playing?.artist?.name}
    </div>
  );
}
