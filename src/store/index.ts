import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./reducers/resultReducer";

const store = configureStore({
    reducer: {
        results: resultReducer
    }
});

export default store;