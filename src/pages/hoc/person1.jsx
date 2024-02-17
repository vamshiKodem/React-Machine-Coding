import React from "react";
import { Wrapper } from "./wrapper";

const Person1 = ({ amount, handleIncrement }) => {
  return (
    <>
      <h1>Hi I am Vamshi Krishna ${amount}</h1>
      <button onClick={() => handleIncrement(20)}>Add Amount</button>
    </>
  );
};

export default Wrapper(Person1);
