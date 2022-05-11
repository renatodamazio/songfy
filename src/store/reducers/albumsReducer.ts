import { createSlice } from "@reduxjs/toolkit";

interface sliceInterface {
  album: string;
  open: boolean
}

const initialState: sliceInterface = {
  album: "",
  open: false
};

const albumSlice = createSlice({
  name: "albums",
  initialState,

  reducers: {
    setOpen: (state: any, action: any) => {
      state.open = action.payload;
    },

    setAlbums: (state: any, action: any) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAlbums, setOpen } = albumSlice.actions;

export default albumSlice.reducer;
