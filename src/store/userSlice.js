import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  users: {},
  hasError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    resetUser: (state, action) => {
      state.user = {};
    },
    setHasError: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

export const { setUser, resetUser, setHasError, setUsers } = userSlice.actions;
export default userSlice.reducer;
