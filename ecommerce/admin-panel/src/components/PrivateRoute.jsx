import { Navigate } from "react-router-dom";

const auth =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser
    ?.isAdmin;

const PrivateRoute = ({ children }) => {
  console.log("Password");
  return auth ? children : <Navigate to="/" />;
};
//almost same than authentication

export default PrivateRoute;
