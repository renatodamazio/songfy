import { createSlice } from "@reduxjs/toolkit";

interface sliceInterface {
  album: string;
}

const initialState: sliceInterface = {
  album: "",
};

const albumSlice = createSlice({
  name: "albums",
  initialState,

  reducers: {
    setAlbums: (state: any, action: any) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAlbums } = albumSlice.actions;

export default albumSlice.reducer;
