import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./authActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    res.data && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
