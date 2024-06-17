// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./audioReducer";

const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
});

export default store;
