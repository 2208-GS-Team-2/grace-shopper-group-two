import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import singleProductReducer from "./singleProductSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
