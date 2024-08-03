import React from "react";

import { usePagination2 } from "./usePagination2";
import "./pagination2.css";

export const Pagination2 = () => {
  const {
    data,
    selectedPage,
    onNextClick,
    onPreviousClick,
    numericButtons,
    onNumericButtonClick,
  } = usePagination2();

  return (
    <div className="pagination-container">
      {data.slice((selectedPage - 1) * 10, selectedPage * 10).map((data) => (
        <div key={data.title} className="list-container">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ))}

      <div className="button-container">
        {selectedPage === 1 ? null : (
          <button onClick={onPreviousClick}>Previous</button>
        )}
        {numericButtons.map((val) => (
          <button
            className={`numeric-btn ${
              selectedPage === val ? "selected" : null
            }`}
            onClick={() => onNumericButtonClick(val)}
            key={val}
            disabled={selectedPage === val}
          >
            {val}
          </button>
        ))}
        {selectedPage === numericButtons.length ? null : (
          <button onClick={onNextClick}>Next</button>
        )}
      </div>
    </div>
  );
};
