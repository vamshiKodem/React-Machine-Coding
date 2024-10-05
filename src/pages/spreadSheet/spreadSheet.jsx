import React, { useState } from "react";

import "./spreadSheet.css";
import { Cell } from "./common/cell";

export const SpreadSheet = () => {
  const sheetConfig = [
    [0, 1, 2, 10],
    [3, 4, 5, 20],
    [6, 7, 8, 30],
  ];

  const [selected, setSelected] = useState(null);

  const onCellClick = (id) => {
    setSelected(id);
  };

  const onCellBlur = () => {
    setSelected(null);
  };

  return (
    <div className="container">
      <div className="spread-sheet-container">
        {sheetConfig.map((row) => (
          <div key={row} className="row">
            {row.map((cell) => (
              <div
                key={cell}
                onDoubleClick={() => onCellClick(cell)}
                onBlur={onCellBlur}
                className="column"
              >
                <Cell selected={selected} id={cell} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
