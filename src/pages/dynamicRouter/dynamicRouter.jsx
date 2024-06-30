import React from "react";
import "./dynamicRouter.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./screens/about";
import { Home } from "./screens/home";
import { User } from "./screens/user";
import { Invalid } from "./screens/invalid";
import { ThemeProvider, useAppContext } from "./appContext";
import { NabBar } from "./navBar";
import { Login } from "./screens/login";
import { PrivateRouter } from "./privateRouter";

export const DynamicRouter = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NabBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRouter>
                <Home />
              </PrivateRouter>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRouter>
                <About />
              </PrivateRouter>
            }
          />
          <Route
            path="user/:userId"
            element={
              <PrivateRouter>
                <User />
              </PrivateRouter>
            }
          />
          <Route path="*" element={Invalid} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
