import { createSlice } from "@reduxjs/toolkit";

interface sliceInterface {
  loading: boolean;
  artist: string;
}

const initialState: sliceInterface = {
  loading: false,
  artist: "",
};

const resultSlice = createSlice({
  name: "result",
  initialState,

  reducers: {
    setLoading: (state: any) => {
      state.loading = state;
    },
    setArtist: (state: any) => {
      return {
        ...state,
        artist: state,
      };
    },
  },
});

export const { setLoading } = resultSlice.actions;

export default resultSlice.reducer;
