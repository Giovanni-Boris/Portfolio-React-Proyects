import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./authAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
