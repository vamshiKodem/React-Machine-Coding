import React from "react";
import { useAppContext } from "./appContext";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { isLoggedIn } = useAppContext();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
