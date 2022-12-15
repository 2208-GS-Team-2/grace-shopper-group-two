import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    }
  },
});

//ACTION CREATORS
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;