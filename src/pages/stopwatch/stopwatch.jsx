import React from "react";
import { useStopwatch } from "./useStopwatch";
import "./stopwatch.css";

export const Stopwatch = () => {
  const { hours, minutes, seconds, onStartClick, onResetClick, onPauseClick } =
    useStopwatch();

  return (
    <div className="stopwatch-container">
      <h1>{`${hours}H: ${minutes}M: ${seconds}S`}</h1>
      <div className="button-container">
        <button onClick={onStartClick}>Start</button>
        <button onClick={onPauseClick}>Pause</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
};
