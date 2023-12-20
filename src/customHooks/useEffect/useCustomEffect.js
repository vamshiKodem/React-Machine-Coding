import { useRef } from "react";

export const useCustomEffect = (callback, dependencyArray = []) => {
  const isFirstRender = useRef(true);
  const dependencyRef = useRef(dependencyArray);

  if (isFirstRender.current) {
    callback();
    isFirstRender.current = false;
    return;
  }
};
