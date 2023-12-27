import React from "react";
import "./progressBar.css";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = () => {
  const { percentage, WIDTH } = useProgressBar();

  const newVal = (percentage / WIDTH) * 100;
  console.log(newVal);

  return (
    <div className="progressBar-container">
      <span>{`ProgressBar : ${Math.floor(newVal)}%`}</span>
      <div className="outer-bar">
        <div style={{ width: `${newVal}%` }} className="inner-bar"></div>
      </div>
    </div>
  );
};
