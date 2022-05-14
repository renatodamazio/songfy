import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albumsReducer";
import albumOpenReducer from "./reducers/albumOpenReducer";
import albumTrackReducer from "./reducers/albumTrackReducer";
const store = configureStore({
  reducer: {
    albums: albumsReducer,
    albumOpen: albumOpenReducer,
    albumTrack: albumTrackReducer
  },
});

export default store;
