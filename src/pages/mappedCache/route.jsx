import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./products";
import { Users } from "./users";

export const MappedCacheRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
