import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer, // Assign currentUserReducer to currentUser slice
  },
});

export default store;
