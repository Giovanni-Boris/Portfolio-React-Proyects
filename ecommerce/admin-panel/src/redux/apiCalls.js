import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductFailure,
  getProductSuccess,
} from "./productRedux";
import { publicRequest } from "../requestMethod";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch, user) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.post("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
