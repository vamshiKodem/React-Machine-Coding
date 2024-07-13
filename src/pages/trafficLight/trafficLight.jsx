import React from "react";
import "./trafficLight.css";
import { useTrafficLight } from "./useTrafficLight";

export const TrafficLight = () => {
  const { activeSignal, lightConfig } = useTrafficLight();

  return (
    <div className="container">
      <div className="traffic-light-container">
        {Object.keys(lightConfig).map((val) => (
          <div
            key={val}
            className={`light ${val === activeSignal ? val : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
