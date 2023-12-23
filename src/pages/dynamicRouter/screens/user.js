import React from "react";
import { useLocation } from "react-router-dom";

export const User = () => {
  const { state } = useLocation();

  return <div>{state.userData.name}</div>;
};
