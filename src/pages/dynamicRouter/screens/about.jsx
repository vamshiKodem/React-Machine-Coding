import React from "react";
import { useNavigate } from "react-router-dom";
import "../dynamicRouter.css";

export const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      About
      <button onClick={() => navigate("/")}>Go to About screen</button>
    </div>
  );
};
