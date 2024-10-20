import React, { useRef, useEffect } from "react";

export const ChildComponent = ({ onButtonClick, name }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        placeholder="enter your name"
        value={name}
        onChange={(e) => onButtonClick(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
};
