import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../appContext";

export const Login = () => {
  const { isLoggedIn, toggleLoginStatus } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const onLoginClick = () => {
    toggleLoginStatus(isLoggedIn ? false : true);
  };

  return (
    <div>
      <button onClick={onLoginClick}>Login</button>
    </div>
  );
};
