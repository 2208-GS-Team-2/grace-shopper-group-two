import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productStuffSlice";
import cartReducer from "./cartSlices/cartSlice";
import guestCartReducer from "./cartSlices/guestCartSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		product: productReducer,
		cart: cartReducer,
		guestCart: guestCartReducer,
	},
});

export default store;
