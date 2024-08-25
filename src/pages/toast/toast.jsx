import React, { useRef, useState } from "react";

import "./toast.css";

export const Toast = () => {
  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef(null);

  const onButtonClick = () => {
    setShowToast(!showToast);

    toastRef.current = setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const onCancelClick = () => {
    setShowToast(false);
    clearTimeout(toastRef.current);
  };

  return (
    <div className="toast-container">
      {showToast ? (
        <div className="toast">
          <h2>Some Text</h2>

          <button className="cancel-button" onClick={onCancelClick}>
            X
          </button>
        </div>
      ) : null}
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
};
