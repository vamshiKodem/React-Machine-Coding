import React from "react";
import "./dynamicRouter.css";
import { Link } from "react-router-dom";
import { useAppContext } from "./appContext";

export const NabBar = () => {
  const { toggleTheme, toggleLoginStatus, isLoggedIn } = useAppContext();

  const onChangeThemeClick = () => {
    toggleTheme();
  };

  const onLogoutClick = () => {
    toggleLoginStatus(false);
  };

  return (
    <nav>
      <div className="nav-section">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/about"}>
          About
        </Link>
        <button className="dynamic-router-button" onClick={onChangeThemeClick}>
          Change Theme
        </button>
        {isLoggedIn ? <button onClick={onLogoutClick}>Logout</button> : null}
      </div>
    </nav>
  );
};
