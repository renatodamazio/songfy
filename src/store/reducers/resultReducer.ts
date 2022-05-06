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
    setLoading: (state: any, action:any) => {
      state.loading = action.payload;
    },
    setArtist: (state: any) => {
      return {
        ...state,
        artist: state,
      };
    },
  },
});

export const { setLoading, setArtist } = resultSlice.actions;

export default resultSlice.reducer;
