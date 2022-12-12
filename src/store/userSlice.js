import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {}, //this is for log in user
  users: [],
  singleUser: [], // this is for single user for admin to update their information.
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
    setSingleUser: (state, action) => {
      state.singleUser = action.payload;
    },
    setDeleteUser: (state, action) => {
      state.users = [
        ...state.users.filter((oneUser) => {
          return oneUser.id !== action.payload;
        }),
      ];
    },
    setUpdatedSingleUser: (state, action) => {
      const updatedSingleUserInfo = action.payload;
      const oldUserInfo = state.users;
      state.users = {
        ...updatedSingleUserInfo,
        ...oldUserInfo,
      };
    },
    setHasError: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

export const {
  setUser,
  resetUser,
  setUsers,
  setSingleUser,
  setDeleteUser,
  setHasError,
  setUpdatedSingleUser,
} = userSlice.actions;
export default userSlice.reducer;
