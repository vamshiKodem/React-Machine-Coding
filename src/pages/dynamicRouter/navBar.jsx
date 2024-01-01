import React from "react";
import "./dynamicRouter.css";
import { Link } from "react-router-dom";
import { useThemeContext } from "./themeContext";

export const NabBar = () => {
  const { toggleTheme } = useThemeContext();

  const onChangeThemeClick = () => {
    toggleTheme();
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
        <button onClick={onChangeThemeClick}>Change Theme</button>
      </div>
    </nav>
  );
};
