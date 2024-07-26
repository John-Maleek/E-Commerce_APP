import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
