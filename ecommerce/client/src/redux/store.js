import { configureStore } from "@redux-toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
