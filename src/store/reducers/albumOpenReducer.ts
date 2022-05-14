import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumOpen: [],
};

const albumOpen = createSlice({
  name: "albumOpen",
  initialState,
  reducers: {
    setOpen(state: any, action: any) {
      state.albumOpen = action.payload;
    },
  },
});

export const { setOpen } = albumOpen.actions;
export default albumOpen.reducer;
