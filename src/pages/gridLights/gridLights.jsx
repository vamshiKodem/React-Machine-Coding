import React from "react";
import "./gridLights.css";
import { useGridLights } from "./useGridLights";

export const GridLights = () => {
  const { configMatrix, onGridClick, selectedGrid } = useGridLights();

  // this need to go to separate file
  const Cell = ({ id, onGridClick }) => {
    return (
      <button
        key={id}
        onClick={() => onGridClick(id)}
        className={`cell ${selectedGrid.includes(id) ? "selected" : null}`}
      ></button>
    );
  };

  return (
    <div className="gridLights-container">
      <div className="cell-container">
        {configMatrix
          .flat(1)
          .map((data) =>
            data.show ? (
              <Cell id={data.id} key={data.id} onGridClick={onGridClick} />
            ) : (
              <span key={data.id} />
            )
          )}
      </div>
    </div>
  );
};
