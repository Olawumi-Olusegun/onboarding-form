import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slices/cartSlice";
// import checkoutSlice from "./slices/checkoutSlice";


export const store = configureStore({
  //slices goes here
  reducer: {
    // cart: cartSlice,
    // checkout:checkoutSlice
  },
});