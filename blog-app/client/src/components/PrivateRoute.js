import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
