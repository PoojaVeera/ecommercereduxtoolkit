import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState: {
    cartValues: [],
    totalPrice: [0],
  },
  reducers: {
    incrementCart: (state, action) => {
      state.cartValues.push(action.payload);
      const priceArray = state.cartValues.map((obj) => obj.productPrice); //obj is object
      state.totalPrice = priceArray.reduce((a, b) => a + b);
    },
    decrementCart: (state, action) => {
      // splicing out the object using index
      const index = state.cartValues.findIndex(
        (obj) => obj.productName === action.payload.productName
      );
      if (index > -1) {
        state.cartValues.splice(index, 1);
      }
      const priceArray = state.cartValues.map((obj) => obj.productPrice);
      state.totalPrice = priceArray.reduce((a, b) => a + b, 0); // ,0 is given to avoid type error : Reduce of empty array with no initial value
    },
  },
});

export const { incrementCart, decrementCart } = cartReducer.actions;
export default cartReducer.reducer;
