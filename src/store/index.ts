import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albumsReducer";

const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
});

export default store;
