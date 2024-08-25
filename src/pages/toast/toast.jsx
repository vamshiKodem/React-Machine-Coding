import React, { useCallback, useState } from "react";

import "./toast.css";
import { Card } from "./card";

export const Toast = () => {
  const [toastList, setToastList] = useState([]);

  const onButtonClick = (duration) => {
    const id = Math.random();
    setToastList([
      ...toastList,
      {
        id,
        message: "This is some random text",
        duration,
      },
    ]);
  };

  const removeToast = useCallback(
    (id) => {
      setToastList(toastList.filter((toast) => toast.id !== id));

      console.log(toastList);
    },
    [toastList]
  );

  return (
    <div className="toast-container">
      <div className="toast-list-container">
        {toastList.map((list) => (
          <Card key={list.id} removeToast={removeToast} {...list} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => onButtonClick(5000)}>Click Me 5000</button>
        <button onClick={() => onButtonClick(4000)}>Click Me 4000</button>
        <button onClick={() => onButtonClick(3000)}>Click Me 3000</button>
        <button onClick={() => onButtonClick(2000)}>Click Me 2000</button>
        <button onClick={() => onButtonClick(6000)}>Click Me 6000</button>
      </div>
    </div>
  );
};
