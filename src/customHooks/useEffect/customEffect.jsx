import React, { useState, useEffect } from "react";
import { useCustomEffect } from "./useCustomEffect";

export const CustomEffect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useCustomEffect(() => {
    console.log("first render", count1, count2);
  }, [count2]);

  // useEffect(() => {
  //   console.log("useEffect", count1, count2);
  // }, [count2]);

  const onClick = () => {
    setCount2(count2 + 1);
  };
  console.log(" re rending", count1, count2);

  return (
    <div>
      <p>{(count1, count2)}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
