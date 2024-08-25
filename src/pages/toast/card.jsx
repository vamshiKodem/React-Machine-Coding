import React, { useEffect, useRef } from "react";

import "./toast.css";

export const Card = ({ removeToast, id, message, duration }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    toastRef.current = setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => {
      clearTimeout(toastRef.current);
    };
  }, [duration, id, removeToast]);

  return (
    <div className="toast">
      <h2>
        {message}
        {duration}
      </h2>
      <button className="cancel-button" onClick={() => removeToast(id)}>
        X
      </button>
    </div>
  );
};
