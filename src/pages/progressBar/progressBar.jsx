import React from "react";
import "./progressBar.css";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = () => {
  const { percentage, WIDTH, onStartClick } = useProgressBar();

  const newVal = (percentage / WIDTH) * 100;
  console.log(newVal);

  return (
    <div className="progressBar-container">
      ProgressBar
      <div className="outer-bar">
        <div style={{ width: `${newVal}%` }} className="inner-bar"></div>
      </div>
      <button onClick={onStartClick}>start</button>
    </div>
  );
};
