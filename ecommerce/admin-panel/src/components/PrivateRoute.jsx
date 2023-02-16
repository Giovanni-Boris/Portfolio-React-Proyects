import { Navigate } from "react-router-dom";

const auth = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser?.isAdmin;

const PrivateRoute = ({ children }) => {
  console.log("Password");
  return auth ? children : <Navigate to="/login" />;
};
//almost same than authentication

export default PrivateRoute;
