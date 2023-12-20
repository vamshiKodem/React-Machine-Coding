import { useRef } from "react";

export const useCustomEffect = (callback, dependencyArray) => {
  const isFirstRender = useRef(true);
  const prevDependencyRef = useRef([]);

  if (isFirstRender.current) {
    callback();
    isFirstRender.current = false;
    prevDependencyRef.current = dependencyArray || [];
    return;
  }
  console.log(prevDependencyRef.current, dependencyArray);
  const isDependencyChanged =
    JSON.stringify(prevDependencyRef.current) ===
    JSON.stringify(dependencyArray);

  if (!isDependencyChanged) {
    callback();
  }

  prevDependencyRef.current = dependencyArray || [];
};
