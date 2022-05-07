import { createSlice } from "@reduxjs/toolkit";
import { musicTrackInterface } from "../interface/musicInterface";

const initialState: musicTrackInterface = {
  track: [{}],
  playTrack: {}
};

const musicTrack = createSlice({
  name: "musicTrack",
  initialState,
  reducers: {
    setTrack: (state: any, action: any) => {
      state.track.push(action.payload);
    },

    setPlayTrack: (state:any, action:any) => {
      state.playTrack = action.payload
    }
  },
});

export const { setTrack } = musicTrack.actions;

export default musicTrack.reducer;
