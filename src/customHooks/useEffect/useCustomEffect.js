import { useRef } from "react";

export const useCustomEffect = (callback, dependencyArray) => {
  const isFirstRender = useRef(true);
  const prevDependencyRef = useRef([]);

  if (isFirstRender.current) {
    callback();
    isFirstRender.current = false;
    return;
  }

  const isDependencyChanged =
    JSON.stringify(prevDependencyRef) === JSON.stringify(dependencyArray);

  if (isDependencyChanged) {
    callback();
  }

  prevDependencyRef.current = dependencyArray || [];
};
