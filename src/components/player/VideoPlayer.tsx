import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVideo } from "../../store/reducers/videoPlayerReducer";
import videointerface from "../../store/interface/videointerface";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

export default function VideoPlayer() {
  const [control, setControl] = useState<any>();
  const [currentVideo, setCurrentVideo] = useState<videointerface>();
  const youtubeResults = useSelector(
    (state: any) => state.video.youtubeResults
  );
  const currentTrack = useSelector((state: any) => state.tracks.playTrack);
  const dispatch = useDispatch();

  let player: any;

  const setPlayerVideoData = () => {
    const video = youtubeResults[0];

    if (typeof video === "object") {
      const videoId = video.id.videoId as string;
      const musicInfo = currentTrack[currentTrack.length - 1];

      setCurrentVideo({
        name: musicInfo.artist.name,
        videoId: videoId,
        status: 0,
        timer: "00:00",
      });
    }
  };

  useEffect(() => {
    if (typeof currentVideo === "object") {
      dispatch(setVideo(currentVideo));
      loadVideoById();
    }
  }, [currentVideo]);

  useEffect(() => {
    setPlayerVideoData();
  }, [youtubeResults]);

  const loadYoutubeAPI = () => {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag: any = document.getElementsByTagName("script")[0];

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  const PlayVideo = () => {
    if (typeof control === "object") {
      control.playVideo();
    }
  };

  const loadVideoById = () => {
    if (typeof control === "object") {
      control.loadVideoById(currentVideo?.videoId)
    }
  }

  const onPlayerReady = () => {
    PlayVideo();
  };

  const onPlayerStateChange = () => {};

  const onYouTubeIframeAPIReady = () => {
    player = new window.YT.Player("songfy-yt-video-player", {
      height: "360",
      width: "640",
      videoId: currentVideo?.videoId ? currentVideo?.videoId : "",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    if (typeof control !== "object") {
      setControl(player);
    }
  };

  useEffect(() => {
    if (!window.YT) {
      loadYoutubeAPI();
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);
  return (
    <div>
      <div id="songfy-yt-video-player"></div>
    </div>
  );
}
