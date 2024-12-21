import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.mainUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutStart: (state) => {
      state.loading = true;
    },
    signOutSuccess: (state) => {
      state.mainUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutFailure: (state) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      (state.mainUser = null), 
      (state.loading = false), 
      (state.error = null);
    },
    deleteUserFailure: (state, action) => {
      (state.error = action.payload), 
      (state.loading = false);
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure
} = userSlice.actions;

export default userSlice.reducer;
