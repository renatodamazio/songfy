import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albumsReducer";

const store = configureStore({
  reducer: {
    results: albumsReducer,
  },
});

export default store;
