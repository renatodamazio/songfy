import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albumsReducer";
import albumTracksReducer from "./reducers/albumTracksReducer";

const store = configureStore({
  reducer: {
    albums: albumsReducer,
    albumTracks: albumTracksReducer
  },
});

export default store;
