import React, { useState } from "react";

export const Cell = ({ selected, id }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="cell">
      {selected === id ? (
        <input onChange={(e) => setInputValue(e.target.value)} />
      ) : (
        inputValue
      )}
    </div>
  );
};
