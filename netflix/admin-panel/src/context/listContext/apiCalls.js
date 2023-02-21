import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  createListStart,
  createListSuccess,
  createListFailure,
} from "./listActions";
import { userRequest } from "../../requestMethods";

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());

  try {
    const res = await userRequest.post("/lists", list);
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//get
export const getLists = async (dispatch) => {
  dispatch(getListsStart());

  try {
    const res = await userRequest.get("/lists");
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};
//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());

  try {
    await userRequest.get("/lists");
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
