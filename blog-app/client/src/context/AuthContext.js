import { createContext, useReducer, useEffect } from "react";
import authReducer from "./authReducer";

export const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const data = {
    ...state,
    dispatch,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
