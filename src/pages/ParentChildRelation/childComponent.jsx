import React, { useState, useRef, useEffect } from "react";

export const ChildComponent = ({ onButtonClick }) => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const onSubmitClick = () => {
    onButtonClick(name);
    setName("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={onSubmitClick}>Submit</button>
    </div>
  );
};
