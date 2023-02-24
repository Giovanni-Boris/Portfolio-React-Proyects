import { createContext, useReducer } from "react";
import authReducer from "./authReducer";
export const AuthContext = createContext();

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const data = {
    ...state,
    dispatch,
  };
  return (
    <AuthContextProvider.Provider value={data}>
      {children}
    </AuthContextProvider.Provider>
  );
};
