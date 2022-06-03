import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albumsReducer";
import albumOpenReducer from "./reducers/albumOpenReducer";
import albumTrackReducer from "./reducers/albumTrackReducer";
import VideoReducer from "./reducers/VideoReducer";
const store = configureStore({
  reducer: {
    video: VideoReducer,
    albums: albumsReducer,
    albumOpen: albumOpenReducer,
    albumTrack: albumTrackReducer,
  },
});

export default store;
