import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
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

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await userRequest.post("movies/", movie);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createMovieFailure);
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
