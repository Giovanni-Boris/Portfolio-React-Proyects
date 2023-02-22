import { Navigate } from "react-router-dom";

const auth = true;

const PrivateRoute = ({ children }) => {
  return auth ? children : <Navigate to="/" />;
};
//almost same than authentication

export default PrivateRoute;
