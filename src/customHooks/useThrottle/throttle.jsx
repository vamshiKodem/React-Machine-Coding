import React from "react";
import { useThrottle } from "./useThrottle";

export const Throttle = () => {
  const onSubmitClick = () => {
    console.log("some expensive function");
  };

  const optimizedSubmit = useThrottle(onSubmitClick, 2000);

  return (
    <div>
      <button onClick={optimizedSubmit}>Click Me</button>
    </div>
  );
};
