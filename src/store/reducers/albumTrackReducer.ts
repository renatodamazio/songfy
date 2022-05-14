import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: false,
};

const albumTracks = createSlice({
  name: "albumTracks",
  initialState,
  reducers: {
    setAlbumTrack(state: any, action: any) {
      state.tracks = action.payload;
    },
  },
});

export const { setAlbumTrack } = albumTracks.actions;
export default albumTracks.reducer;
