import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getYoutubeVideo from "../../api/getYoutubeVideo";
import VideoPlayer from "./VideoPlayer";
import { setYoutubeResults } from "../../store/reducers/videoPlayerReducer";
import { Play } from "../buttons/index";

export default function PlayerBar(props: any) {
  const getPlayTracks = useSelector((state: any) => state.tracks.playTrack);
  const [playing, setPlaying] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = getPlayTracks.length - 1;
    setPlaying(getPlayTracks[total]);
  }, [getPlayTracks]);

  const callYoutubeApiGetVideo = async (params: string) => {
    const results: any = await getYoutubeVideo(params);
    dispatch(setYoutubeResults(results?.items));
  };

  useEffect(() => {
    if (playing?.artist) {
      callYoutubeApiGetVideo(playing?.artist?.name + "+" + playing?.name);
    }
  }, [playing]);
  return (
    <div>
      <VideoPlayer />
      <Play size="big"/>
      {playing?.name} {playing?.artist?.name}
    </div>
  );
}
