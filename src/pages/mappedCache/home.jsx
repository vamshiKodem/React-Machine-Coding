import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button
        className="h-20 w-200 border-2 border-slate-600 rounded p-5"
        onClick={() => navigate("/products")}
      >
        Go to Products
      </button>
      <button
        className="h-20 w-200 border-2 border-slate-600 rounded p-5"
        onClick={() => navigate("/users")}
      >
        Go to Users
      </button>
    </div>
  );
};
