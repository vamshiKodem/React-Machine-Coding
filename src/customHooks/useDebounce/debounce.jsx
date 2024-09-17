import React, { useState } from "react";
import { useDebounce } from "./useDebounce";

export const Debounce = () => {
  const [text, setText] = useState("");

  const onInputChange = (e) => {
    setText(e.target.value);
    debouncedFunction();
  };

  const fetchItems = () => {
    console.log("some expensive calculation");
  };

  const debouncedFunction = useDebounce(fetchItems, 2000);

  return (
    <div>
      <input type="text" value={text} onChange={onInputChange} />
    </div>
  );
};
