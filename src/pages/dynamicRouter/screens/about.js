import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const onAboutClick = () => {
    navigate("/");
  };

  return (
    <div>
      About Screen
      <button onClick={onAboutClick}>Go to About screen</button>
    </div>
  );
};
