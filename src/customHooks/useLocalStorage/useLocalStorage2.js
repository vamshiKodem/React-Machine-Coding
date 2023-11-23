import { useState, useEffect } from "react";

const setInitialValue = (key, initialValue) => {
  const result = localStorage.getItem(key);
  if (result) return result;

  return initialValue;
};

export const localStorage2 = (key, initialValue) => {
  const [value, setValue] = useState(() => setInitialValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};
