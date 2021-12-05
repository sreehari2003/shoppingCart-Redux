import { createSlice } from "@reduxjs/toolkit";
const init = { items: [], totalQuantity: 0 };
export const cartSlice = createSlice({
  name: "slice",
  initialState: init,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          name: newItem.title,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const exist = state.items.find((el) => {
        return el.id === id;
      });
      if (exist.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== id);
        //looking for bugs here👀
      } else {
        exist.quantity--;
        exist.price = exist.totalPrice - exist.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
