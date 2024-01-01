import React from "react";
import "./dynamicRouter.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./screens/about";
import { Home } from "./screens/home";
import { User } from "./screens/user";
import { Invalid } from "./screens/invalid";
import { ThemeProvider } from "./themeContext";
import { NabBar } from "./navBar";

export const DynamicRouter = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NabBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="user/:userId" Component={User} />
          <Route path="*" Component={Invalid} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
