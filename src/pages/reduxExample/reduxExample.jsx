import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../reducer/counterSlice";

export const ReduxExample = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [inputCount, setInputCount] = useState(0);

  return (
    <div className="container">
      <h1>Redux Example</h1>
      <h2>{counter}</h2>
      <input
        type="number"
        value={inputCount}
        onChange={(e) => setInputCount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(inputCount))}>
        Increment by Input
      </button>
    </div>
  );
};
