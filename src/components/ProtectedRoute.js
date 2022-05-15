import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (props.loggedIn ? <Component/> : <Navigate to="./sign-in"/>);
}

export default ProtectedRoute;