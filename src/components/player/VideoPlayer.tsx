import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {getYoutubeVideoMock} from "../../api/getYoutubeVideo";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

export default function VideoPlayer() {
  const [control, setControl] = useState<any>();
  const [music, setMusic] = useState<any>();
  const playTrack = useSelector((state: any) => state.tracks.playTrack);

  const getYoutubeVideoInformations = async () => {
    const musicPlayer = playTrack[playTrack.length - 1];
    const video = await getYoutubeVideoMock(
      musicPlayer.artist.name + musicPlayer.name
    );

    if (video.error) {
      alert(video.error.message);
      return;
    }

    setMusic({
      name: musicPlayer?.name,
      artist: musicPlayer?.artist?.name,
      status: 0, 
      videoId: video?.items[0]?.id?.videoId,
      timer: "00:00",
    });
  };

  const loadYoutubeAPI = () => {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag: any = document.getElementsByTagName("script")[0];

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  const onYouTubeIframeAPIReady = () => {  
    const player = new window.YT.Player("songfy-yt-video-player", {
      height: "360",
      width: "640",
      videoId: "",
      events: {
        onReady: () => {},
        onStateChange: () => {},
      },
    });

    setControl(player); 
  }; 

  useEffect(() => { 
    getYoutubeVideoInformations();
  }, [playTrack]);

  useEffect(() => {
    if (typeof control === "object") {
      try {  
        control.loadVideoById(music.videoId);
      } catch(err){}
    }
  }, [music]);

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
