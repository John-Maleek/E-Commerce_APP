import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
