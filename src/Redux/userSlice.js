import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Auth: false,
  token: "",
  role: "GUEST",
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.Auth = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.data = action.payload.data;
    },
    logOut: (state) => {
      state.Auth = false;
      state.token = "";
      state.role = "GUEST";
      state.data = {};
    },
    updateAccessToken: (
      state,
      action
    ) => {
      state.token = action.payload.token;
    },
  },
});

export const { logIn, logOut, updateAccessToken } = userSlice.actions;
export default userSlice.reducer;