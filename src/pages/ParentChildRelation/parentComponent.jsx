import React, { useState } from "react";
import { ChildComponent } from "./childComponent";
import "./componentStyles.css";

export const ParentComponent = () => {
  const [childData, setChildData] = useState("");

  const onButtonClick = (value) => {
    setChildData(value);
  };

  return (
    <div className="parent-container">
      <ChildComponent onButtonClick={onButtonClick} />
      <h2>{`Value from the child component ${childData}`}</h2>
    </div>
  );
};
