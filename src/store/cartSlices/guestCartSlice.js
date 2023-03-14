import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	guestCart: {},
	quantity: 0,
};

const guestCartSlice = createSlice({
	name: "guestCart",
	initialState,
	reducers: {
		setGuestCart: (state, action) => {
			state.cart = action.payload;
		},
		resetGuestCart: (state, action) => {
			state.cart = [];
		},
		setGuestCartQuantity: (state, action) => {
			state.quantity = action.payload;
		},
		resetGuestCartQuantity: (state, action) => {
			state.quantity = 0;
		},
	},
});

//ACTION CREATORS
export const {
	setGuestCart,
	resetGuestCart,
	setGuestCartQuantity,
	resetGuestCartQuantity,
} = guestCartSlice.actions;

export default guestCartSlice.reducer;
