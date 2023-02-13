import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

console.log(cartReducer);
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
