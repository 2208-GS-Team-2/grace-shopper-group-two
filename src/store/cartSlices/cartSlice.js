import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    resetQuantity: (state, action) => {
      state.quantity = 0;
    },
  },
});

//ACTION CREATORS
export const { setCart, resetCart, setQuantity, resetQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
