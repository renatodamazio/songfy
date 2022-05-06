import { createSlice } from "@reduxjs/toolkit";

interface sliceInterface {
  track: any[];
}

const initialState: sliceInterface = {
  track: [],
};

const musicTrack = createSlice({
  name: "musicTrack",
  initialState,
  reducers: {
    setTrack: (state: any, action: any) => {
      return {
        ...state,
        track: action.payload,
      };
    },
  },
});

export const { setTrack } = musicTrack.actions;

export default musicTrack.reducer;
