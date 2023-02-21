import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
} from "./movieActions";
import { userRequest } from "../../requestMethods";
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await userRequest.get("movies");
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getMoviesFailure);
  }
};
