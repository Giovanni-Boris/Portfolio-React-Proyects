import axios from "axios";
import { getListsStart, getListsSuccess, getListsFailure } from "./listActions";
import { userRequest } from "../../requestMethods";
export const getLists = async (dispatch) => {
  dispatch(getListsStart());

  try {
    const res = await userRequest.get("/lists");
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};
