import React from "react";
import { useLocation } from "react-router-dom";

export const User = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>Some data about user</h1>
      <h3>Name : {state.userData.name}</h3>
    </div>
  );
};
