import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../store/reducers/VideoReducer";

export default function Video() {
  const youtubeVideoItems: any = useSelector((state: any) => state.video);
    const dispatch = useDispatch();

  const onReady = (state:any) => {
    console.log(state);
  }

  return (
    <div>
      <ReactPlayer
        playing={true}
        onReady={() => console.log("redy")}
        onPlay={() => dispatch(setState(1))}
        onPause={() => dispatch(setState(2))}
        onEnd={() => dispatch(setState(0))}
        onError={() => console.log("error")}
        className="w-[300px] h-[300px] absolute bg-black"
        url={`https://www.youtube.com/watch?v=${youtubeVideoItems.video}`}
      />
    </div>
  );
}
