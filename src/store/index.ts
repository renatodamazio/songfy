import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albumsReducer";
import albumOpenReducer from "./reducers/albumOpenReducer";
const store = configureStore({
  reducer: {
    albums: albumsReducer,
    albumOpen: albumOpenReducer,
  },
});

export default store;
