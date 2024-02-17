import React from "react";
import { Wrapper } from "./wrapper";

const Person2 = ({ amount, handleIncrement }) => {
  return (
    <>
      <h1>Hi I am Krishna Vamshi ${amount}</h1>
      <button onClick={() => handleIncrement(10)}>Add Amount</button>
    </>
  );
};

export default Wrapper(Person2);
