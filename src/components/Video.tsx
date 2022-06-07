import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { setPlay, setState, setTime } from "../store/reducers/VideoReducer";

export default function Video() {
  const youtubeVideoItems: any = useSelector((state: any) => state.video);
  const dispatch = useDispatch();
  const videoPlayer: any = useRef(null);

  const handleProgress = (state: any) => {
    if (!youtubeVideoItems.seeking) {
      dispatch(setTime(state));
    }
  };

  useEffect(() => {
    videoPlayer.current.seekTo(youtubeVideoItems.seekTo);
  }, [youtubeVideoItems.seekTo]);

  return (
    <div className="">
      <ReactPlayer
        ref={videoPlayer}
        volume={youtubeVideoItems.volume}
        playing={youtubeVideoItems.play}
        onReady={() => dispatch(setPlay(true))}
        onPlay={() => dispatch(setState(1))}
        onPause={() => dispatch(setState(2))}
        onEnd={() => dispatch(setState(0))}
        onError={() => console.log("error")}
        onProgress={handleProgress}
        className="w-[300px] h-[300px] absolute bg-black"
        url={`https://www.youtube.com/watch?v=${youtubeVideoItems.video}`}
      />
    </div>
  );
}
