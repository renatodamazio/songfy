import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVideo } from "../store/reducers/VideoReducer";
import getYoutubeVideo from "../api/getYoutubeVideo";

export default function Playlist(props: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const albumTracks: any = useSelector<any>(
    (state) => state?.albumTrack?.tracks
  );

  const findYoutubeVideoId = async (text: string) => {
    setLoading(true);
    const results = await getYoutubeVideo(text);
    const videoId = results?.items[0].id.videoId
    setLoading(false);
    dispatch(setVideo(videoId));
  };

  return (
    <div className="playlist-container">
      <ul className="flex flex-col">
        {albumTracks &&
          albumTracks.map((track: any, key: number) => {
            return (
              <li key={key} className={`w-full inline-block ${loading ? 'opacity-5' : 'opacity-100'}`}>
                <a
                  href="#!"
                  className="track"
                  onClick={() => findYoutubeVideoId(track.name+' '+track.artist.name)}
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
