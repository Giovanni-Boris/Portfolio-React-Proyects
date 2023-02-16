import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductFailure,
  getProductSuccess,
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess,
} from "./productRedux";
import { publicRequest, userRequest } from "../requestMethod";
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
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    //const res = await userRequest.delete("/products" + id);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
