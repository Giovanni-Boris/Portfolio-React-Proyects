import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import useReducer from "./userRedux";
console.log(cartReducer);
export default configureStore({
  reducer: {
    cart: cartReducer,
    user: useReducer,
  },
});
