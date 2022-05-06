import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./reducers/resultReducer";
import musicTrackReducer from "./reducers/musicTrackReducer";

const store = configureStore({
    reducer: {
        results: resultReducer,
        tracks: musicTrackReducer
    }
});

export default store;