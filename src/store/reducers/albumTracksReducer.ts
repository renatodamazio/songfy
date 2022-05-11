import { createSlice } from "@reduxjs/toolkit";

const initialState:any = [];

const albumTracks = createSlice({
    name: "albumTracks",
    initialState,
    reducers: {
        setAlbumTracks(state:any, action:any) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

const { setAlbumTracks } = albumTracks.actions;
export default albumTracks.reducer;