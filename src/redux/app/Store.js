import { configureStore } from "@reduxjs/toolkit";
import LoadAllProductsSlice from "../features/LoadAllProductsSlice";
import CartSlice from "../features/CartSlice";

export default configureStore({
  reducer: {
    allProducts: LoadAllProductsSlice,
    cartArray: CartSlice,
  },
});
