import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleProduct: [],
  loadingProduct: false,
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    setLoadingProduct: (state, action) => {
      state.loadingProduct = action.payload;
    },
  },
});

export const { setSingleProduct, setLoadingProduct } =
  singleProductSlice.actions;
export default singleProductSlice.reducer;
