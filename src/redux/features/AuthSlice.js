import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "User",
  initialState: {
    user: {
      name: "Mahmood Hassan Rameem",
      phone: "01409029641",
      email: "rameem2019@gmail.com",
    },
  },
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
