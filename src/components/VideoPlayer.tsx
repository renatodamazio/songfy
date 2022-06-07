import React from "react";
import {
  setPlay,
  setTime,
  setSeeking,
  setSeekTo,
  setVolume,
} from "../store/reducers/VideoReducer";
import { useDispatch, useSelector } from "react-redux";
import { MdPlayCircle, MdPauseCircle } from "react-icons/md";

export default function VideoPlayer() {
  const dispatch = useDispatch();
  const video: any = useSelector<any>((state) => state.video);

  function convertMsToHM(time: number) {
    let d = Number(time);
    var hour = Math.floor(d / 3600);
    var minutes = Math.floor((d % 3600) / 60);
    var seconds = Math.floor((d % 3600) % 60);

    var mDisplay = minutes >= 10 ? minutes : `0${minutes}`;
    var sDisplay = seconds >= 10 ? seconds : `0${seconds}`;

    return mDisplay + ":" + sDisplay;
  }

  const handleSeekMouseDown = () => {
    dispatch(setSeeking(true));
  };

  const handleSeekMouseUp = (value: any) => {
    dispatch(setSeeking(false));
    dispatch(setSeekTo(parseFloat(value)));
  };

  const handleVolume = (e: any) => {
    dispatch(setVolume(e.target.value));
  };

  const handleSeekChange = (value: any) => {
    const timer = { ...video.time };
    timer.played = value;

    dispatch(setTime(timer));
  };

  return (
    <>
      <div className="absolute left-0 h-[10px] w-[130px] top-1/2 -translate-y-1/2 -translate-x-[40%] -rotate-90 ">
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={video.volume}
          onChange={handleVolume}
        />
      </div>
      <div className="absolute bottom-0 content-center left-0 text-white w-full p-1 flex items-center">
        <div>
          {video.play ? (
            <button onClick={() => dispatch(setPlay(false))}>
                 <MdPauseCircle size={30}/>
            </button>
          ) : (
            <button onClick={() => dispatch(setPlay(true))}>
                <MdPlayCircle size={30}/>
            </button>
          )}
        </div>
        <div className="w-full px-2 flex">
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            onMouseDown={() => {
              handleSeekMouseDown();
            }}
            onMouseUp={(e: any) => {
              handleSeekMouseUp(e?.target?.value);
            }}
            onChange={(e) => {
              handleSeekChange(e?.target?.value);
            }}
            className="w-full"
            value={video.time?.played}
          />
        </div>
        <div className="px-2">{convertMsToHM(video.time?.playedSeconds)}</div>
      </div>
    </>
  );
}
