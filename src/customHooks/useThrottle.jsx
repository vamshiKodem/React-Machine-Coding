import { useRef, useEffect } from "react";

export const useThrottle = (callback, delay) => {
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (...args) => {
    if (timer.current) {
      return;
    }
    timer.current = setTimeout(() => {
      callback(...args);
      timer.current = undefined;
    }, delay);
  };
};
