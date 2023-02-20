import React from "react";
import { Navigate } from "react-router-dom";

const auth = true;
const PrivateRoute = ({ children }) => {
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
