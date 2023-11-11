import React, { useState, useMemo } from "react";
import { useCustomHook } from "./useCustomMemo";

export const CustomMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const square = () => {
    console.log("some expensive function");
    return counter * counter;
  };

  const memoizedSquare = useCustomHook(square, [counter]);

  return (
    <div>
      UseCustomMemo
      <h1>counter : {counter}</h1>
      <button onClick={() => setCounter((pre) => pre + 1)}>increment</button>
      <h1>Square : {memoizedSquare}</h1>
      <h1>counter2 : {counter2}</h1>
      <button onClick={() => setCounter2((pre) => pre - 1)}>Decrement</button>
    </div>
  );
};
