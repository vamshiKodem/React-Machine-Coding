import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./screens/about";
import { Home } from "./screens/home";
import { User } from "./screens/user";
import { Invalid } from "./screens/invalid";

export const DynamicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="user/:userId" Component={User} />
        <Route path="*" Component={Invalid} />
      </Routes>
    </BrowserRouter>
  );
};
