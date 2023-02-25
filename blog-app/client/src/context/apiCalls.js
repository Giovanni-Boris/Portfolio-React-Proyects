import { publicRequest } from "../requestMethods";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  updateStart,
  updateSuccess,
  updateFailure,
} from "./authActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    res.data && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await publicRequest.post("auth/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};
