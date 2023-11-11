import { useRef, useEffect } from "react";

const isEqual = (prev, next) => {
  if (!prev || prev.length !== next.length) return false;
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== next[i]) {
      return false;
    }
  }
  return true;
};

export const useCustomHook = (cb, dependencyArray) => {
  const memoizedRef = useRef(null);

  if (
    !memoizedRef.current ||
    !isEqual(memoizedRef.current.dependencyArray, dependencyArray)
  ) {
    memoizedRef.current = {
      value: cb(),
      dependencyArray,
    };
  }

  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  return memoizedRef.current.value;
};
