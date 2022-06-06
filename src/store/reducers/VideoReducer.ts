import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: "",
  state: 0
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
          video: action.payload
      }
    },
    setCover(state: any, action: any) {
      state.cover = action.playload;
    },
    setName(state: any, action: any) {
      state.name = action.payload;
    },
  },
});

export const { setState, setVideo, setCover, setName } = video.actions;
export default video.reducer;