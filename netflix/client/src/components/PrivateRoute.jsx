import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/" />;
};
//almost same than authentication

export default PrivateRoute;
