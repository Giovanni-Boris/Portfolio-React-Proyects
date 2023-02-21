import movieReducer from "./movieReducer";
import { createContext, useReducer, useEffect } from "react";

const initialState = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const data = { ...state, dispatch };
  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
