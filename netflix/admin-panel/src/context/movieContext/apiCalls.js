import { getMoviesStart } from "./movieActions";
import {
  userRequest,
  getMoviesSuccess,
  getMoviesSuccess,
} from "../../requestMethods";
const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await userRequest.get("movies");
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getMoviesFailure);
  }
};
