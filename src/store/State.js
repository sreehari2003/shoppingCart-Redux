import { configureStore } from "@reduxjs/toolkit";
import { ui } from "./ui-slice";
import { cartSlice } from "./cart-slice";
export const store = configureStore({
  reducer: {
    ui: ui.reducer,
    cart: cartSlice.reducer,
  },
});
