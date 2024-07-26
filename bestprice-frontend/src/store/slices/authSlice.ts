import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

if (typeof window !== "undefined") {
  // Ensure this code runs only on the client-side
  initialState.isLoggedIn = !!localStorage.getItem("storeToken");
  initialState.user = JSON.parse(localStorage.getItem("user"));
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
