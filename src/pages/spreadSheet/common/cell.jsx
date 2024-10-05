import React, { useEffect, useState } from "react";

export const Cell = ({ selected, id, inputRef }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (selected === id) {
      inputRef.current.focus();
    }
  }, [id, inputRef, selected]);

  return (
    <div className="cell">
      {selected === id ? (
        <input ref={inputRef} onChange={(e) => setInputValue(e.target.value)} />
      ) : (
        inputValue
      )}
    </div>
  );
};
