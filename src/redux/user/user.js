import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || "",
  access_token: localStorage.getItem("access_token") || "",
};

// Storing User details and Token
export const chronosUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdate: (state, action) => {
      if (action.payload?.token) {
        let t = action.payload?.token;
        state.token = t;
        localStorage.setItem("token", t);
      }
      if (action.payload?.access_token) {
        let t = action.payload?.access_token;
        state.access_token = t;
        localStorage.setItem("access_token", t);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { userUpdate } = chronosUser.actions;

export default chronosUser.reducer;
