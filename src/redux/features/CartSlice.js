import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("smCart")
    ? JSON.parse(localStorage.getItem("smCart"))
    : [],
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartReducer: (state, action) => {
      let findindex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );

      if (findindex == -1) {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("smCart", JSON.stringify(state.cart));
      } else {
        state.cart[findindex].qun++;
        localStorage.setItem("smCart", JSON.stringify(state.cart));
      }
    },

    removeProduct: (state, action) => {
      let filteredData = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filteredData;
      localStorage.setItem("smCart", JSON.stringify(state.cart));
    },

    updateQuntity: (state, action) => {
      state.cart[action.payload.id].qun += action.payload.n;

      if (state.cart[action.payload.id].qun == 0) {
        state.cart[action.payload.id].qun = 1;
      }

      localStorage.setItem("smCart", JSON.stringify(state.cart));
    },

    cartClear: (state) => {
      state.cart = [];
      localStorage.setItem("smCart", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartReducer, removeProduct, updateQuntity, cartClear } =
  CartSlice.actions;

export default CartSlice.reducer;
