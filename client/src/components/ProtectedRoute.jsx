import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true"; // Correct auth check

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
