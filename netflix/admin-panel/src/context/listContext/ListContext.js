import listReducer from "./listReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, INITIAL_STATE);

  const data = {
    ...state,
    dispatch,
  };
  return <ListContext.Provider value={data}>{children}</ListContext.Provider>;
};
