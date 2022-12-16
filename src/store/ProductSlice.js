import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  singleProduct: [],
  loadingProduct: false,
  hasError: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    setLoadingProduct: (state, action) => {
      state.loadingProduct = action.payload;
    },
    setHasError: (state, action) => {
      state.hasError = action.payload;
    },
    setDeleteProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => {
          return product.id !== action.payload;
        }),
      ];
    },
    setUpdatedProduct: (state, action) => {
      const updatedProductInfo = action.payload;
      const oldProduct = state.products;
      state.products = {
        ...oldProduct,
        ...updatedProductInfo,
      };
    },
  },
});

//Actions Creators
export const {
  setProducts,
  setSingleProduct,
  setLoadingProduct,
  setDeleteProduct,
  setUpdatedProduct,
  setHasError,
} = productSlice.actions;

export default productSlice.reducer;
