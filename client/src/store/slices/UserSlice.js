import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: { user: null, type: null },
  reducers: {
    addCurrentUser(state, action) {
      const { user, type } = action.payload;
      return { user, type };
    },
    removeCurrentUser(state, action) {
      return { user: null, type: null };
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer; // Make sure to export the reducer
