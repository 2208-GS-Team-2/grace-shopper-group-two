import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: {},
  selectedCart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    setSelectedCart: (state, action) => {
      state.selectedCart = action.payload;
    },
  },
});

//ACTION CREATORS
const { setCarts, setSelectedCart } = CartSlice.actions;

export default CartSlice.reducer;
