import React, { useState } from "react";
import "./popup.css";

export const Popup = () => {
  const [popupVisible, setPopupVisible] = useState(true);

  const onButtonClick = () => {
    setPopupVisible(!popupVisible);
  };

  const onBackgroundClick = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <button onClick={onButtonClick}>Click Me</button>
      {popupVisible ? (
        <div onClick={onBackgroundClick} className="popup-content-container">
          <div onClick={(e) => e.stopPropagation()} className="popup-container">
            <h2>Popup Content</h2>
            <button onClick={onBackgroundClick}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
