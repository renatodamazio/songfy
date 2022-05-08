import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./reducers/resultReducer";
import musicTrackReducer from "./reducers/musicTrackReducer";
import videoPlayerReducer from "./reducers/videoPlayerReducer";
const store = configureStore({
  reducer: {
    results: resultReducer,
    tracks: musicTrackReducer,
    video: videoPlayerReducer
  },
});

export default store;
