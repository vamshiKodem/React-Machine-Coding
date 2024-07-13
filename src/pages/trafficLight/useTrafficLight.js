import { useEffect, useRef, useState } from "react";

export const useTrafficLight = () => {
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

  const [activeSignal, setActiveSignal] = useState("green");

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSignal(lightConfig[activeSignal].next);
    }, lightConfig[activeSignal].duration);

    return () => clearTimeout(timer);
  }, [activeSignal, lightConfig]);

  return {
    lightConfig,
    activeSignal,
  };
};
