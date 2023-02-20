import authReducer from "./authReducer";
import { createContext, useReducer } from "react";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ childen }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const data = {
    ...state,
    dispatch,
  };
  return <AuthContext.Provider value={data}>{childen}</AuthContext.Provider>;
};
