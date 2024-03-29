import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productStuffSlice';
import cartReducer from './cartSlices/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
