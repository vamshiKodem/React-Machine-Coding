import { useRef } from "react";

const isEqual = (previous, current) => {
  if (previous.length !== current.length || previous.length === 0) return false;
  for (let i = 0; i < previous.length; i++) {
    if (previous[i] !== current[i]) {
      return false;
    }
  }
  return true;
};

export const useCustomEffect = (callback, dependencyArray) => {
  const isFirstRender = useRef(true);
  const prevDependencyRef = useRef([]);

  if (isFirstRender.current) {
    callback();
    isFirstRender.current = false;
    prevDependencyRef.current = dependencyArray || [];
    return;
  }

  const isDependencyChanged = isEqual(
    prevDependencyRef.current,
    dependencyArray
  );

  if (!isDependencyChanged) {
    callback();
  }

  prevDependencyRef.current = dependencyArray || [];
};
