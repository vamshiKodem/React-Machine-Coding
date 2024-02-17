import React, { useState } from "react";

export const Wrapper = (OrginalComponent) => {
  const UpdatedComponent = () => {
    const [amount, setAmount] = useState(0);

    const handleIncrement = (addedAmount) => {
      setAmount(amount + addedAmount);
    };

    return (
      <OrginalComponent amount={amount} handleIncrement={handleIncrement} />
    );
  };

  return UpdatedComponent;
};
