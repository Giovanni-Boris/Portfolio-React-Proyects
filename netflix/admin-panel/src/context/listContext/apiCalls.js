import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
} from "./listActions";
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

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());

  try {
    await userRequest.get("/lists");
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
