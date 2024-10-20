import React, { useState } from "react";
import { ChildComponent } from "./childComponent";
import "./componentStyles.css";

export const ParentComponent = () => {
  const [name, setName] = useState("");

  const onButtonClick = (value) => {
    setName(value);
  };

  return (
    <div className="parent-container">
      <ChildComponent onButtonClick={onButtonClick} name={name} />
      <h2>{`Value from the child component to parent component: ${name}`}</h2>
    </div>
  );
};
