import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVideo, setTrackIndice } from "../store/reducers/VideoReducer";
import getYoutubeVideo from "../api/getYoutubeVideo";
import { MdPlayArrow } from "react-icons/md";

export default function Playlist() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const albumTracks: any = useSelector<any>(
    (state) => state?.albumTrack?.tracks
  );

  const indice: any = useSelector<any>((state) => state?.video?.trackIndice);

  const findYoutubeVideoId = async (text: string, trackIndice: number) => {
    dispatch(setTrackIndice(trackIndice));
    setLoading(true);

    const results = await getYoutubeVideo(text.replace(/ {1}/gi, "+"));
    const videoId = results[0].id;

    setLoading(false);
    dispatch(setVideo(videoId));
  };

  useEffect(() => {
    const track = albumTracks[indice];
    if (typeof track === "object") {
      findYoutubeVideoId(track.name + " " + track.artist.name, indice);
    }
  }, [indice]);

  return (
    <div className="playlist-container">
      <ul className="flex flex-col">
        {albumTracks &&
          albumTracks.map((track: any, key: number) => {
            return (
              <li
                key={key}
                className={`w-full inline-block ${
                  loading ? "opacity-100" : "opacity-100"
                }`}
              >
                <a
                  href="#!"
                  className="track flex content-center justify-start align-middle"
                  onClick={() =>
                    findYoutubeVideoId(
                      track.name + " " + track.artist.name,
                      key
                    )
                  }
                >
                  <i
                    className={`${
                      indice == key
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    } transition-ease-in-out-cubic flex content-center justify-center items-center mr-1`}
                  >
                    <MdPlayArrow />
                  </i>
                  <i>{track.name}</i>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
