import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
