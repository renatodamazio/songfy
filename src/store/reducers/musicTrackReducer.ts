import { createSlice } from "@reduxjs/toolkit";
import { musicTrackInterface } from "../interface/musicInterface";

const initialState: musicTrackInterface = {
  track: [{}],
};

const musicTrack = createSlice({
  name: "musicTrack",
  initialState,
  reducers: {
    setTrack: (state: any, action: any) => {
      state.track.push(action.payload);
    },
  },
});

export const { setTrack } = musicTrack.actions;

export default musicTrack.reducer;
