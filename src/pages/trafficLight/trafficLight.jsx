import React from "react";
import "./trafficLight.css";
import { useTrafficLight } from "./useTrafficLight";

export const TrafficLight = () => {
  const {} = useTrafficLight();

  return <h1>Traffic Light</h1>;
};
