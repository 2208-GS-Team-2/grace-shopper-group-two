import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  quantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

//ACTION CREATORS
export const { setCart, setQuantity} = cartSlice.actions;

export default cartSlice.reducer;