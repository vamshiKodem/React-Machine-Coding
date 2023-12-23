import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./screens/about";
import { Home } from "./screens/home";
import { User } from "./screens/user";

export const DynamicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/:userId" Component={User} />
      </Routes>
    </BrowserRouter>
  );
};
