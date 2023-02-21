import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
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

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await userRequest.delete("movies/" + id);
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteMovieFailure);
  }
};
