import { useEffect, useState } from "react";

const lightConfig = {
  red: {
    backgroundColor: "red",
    duration: 4000,
    next: "green",
  },
  orange: {
    backgroundColor: "orange",
    duration: 1000,
    next: "red",
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "orange",
  },
};

export const useTrafficLight = () => {
  const [activeSignal, setActiveSignal] = useState("green");

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSignal(lightConfig[activeSignal].next);
    }, lightConfig[activeSignal].duration);

    return () => clearTimeout(timer);
  }, [activeSignal]);

  return {
    lightConfig,
    activeSignal,
  };
};
