import { createSlice } from "@reduxjs/toolkit";

const stateUI = { cartIsVisible: false, notif: null };

export const ui = createSlice({
  name: "ui-slice",
  initialState: stateUI,
  reducers: {
    setCartVisible(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    setnotif(state, action) {
      state.notif = {
        status: action.payload.status,
        msg: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});
export const uiActions = ui.actions;
