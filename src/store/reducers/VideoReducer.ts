import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: "",
  trackIndice: 0,
  play: false,
  time: {},
  seeking: false,
  thumbnail: "",
  volume: 0.491150442477876,
  seekTo: 0,
  progress: 0,
  state: 0,
  thumbColors: {}
};

const video = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setState(state: any, action: any) {
      state.state = action.payload;
    },
    setVideo(state: any, action: any) {
      return {
        ...state,
        video: action.payload,
      };
    },
    setCover(state: any, action: any) {
      state.cover = action.payload;
    },
    setName(state: any, action: any) {
      state.name = action.payload;
    },
    setPlay(state: any, action: any) {
      state.play = action.payload;
    },
    setTime(state: any, action: any) {
      state.time = action.payload;
    },
    setProgress(state: any, action: any) {
      state.progress = action.payload;
    },
    setSeeking(state: any, action: any) {
      state.seeking = action.payload;
    },
    setSeekTo(state:any, action:any) {
      state.seekTo = action.payload;
    },
    setVolume(state:any, action:any) {
      state.volume = action.payload;
    },
    setTrackIndice(state:any, action:any) {
      state.trackIndice = action.payload;
    },
    setIncrementTrackIndice(state:any) {
      let indice = state.trackIndice+=1;
      state.trackIndice = indice;
    },
    setThumbnail(state:any, action:any) {
      state.thumbnail = action.payload;
    },
    setThumbColors(state:any, action:any) {
      state.thumbColors = action.payload;
    }
  },
});

export const {
  setState,
  setVideo,
  setCover,
  setName,
  setPlay,
  setTime,
  setVolume,
  setSeeking,
  setThumbnail,
  setIncrementTrackIndice,
  setTrackIndice,
  setThumbColors,
  setSeekTo
} = video.actions;
export default video.reducer;
