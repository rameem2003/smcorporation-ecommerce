import { createSlice } from "@reduxjs/toolkit";

export const LoadAllProductsSlice = createSlice({
  name: "All Products",
  initialState: {
    products: [],
  },
  reducers: {
    allProducts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allProducts } = LoadAllProductsSlice.actions;

export default LoadAllProductsSlice.reducer;
