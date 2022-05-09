import { createSlice } from "@reduxjs/toolkit";
import videoPlayerInterface from "../interface/videointerface";

const initialState: videoPlayerInterface = {
  name: "",
  music: "",
  videoId: "",
  status: 0,
  timer: "",
};

const videoPlayer = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    setVideo: (state: any, action: any) => {
      state.video = action.payload;
    },

    setYoutubeResults: (state: any, action: any) => {
      state.youtubeResults = action.payload;
    },
  },
});

export const { setVideo, setYoutubeResults } = videoPlayer.actions;
export default videoPlayer.reducer;
