import React, { useCallback, useEffect, useMemo, useState } from "react";

import "./pagination.css";

export const CommonPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onSpecificPageButtonClick = (index) => {
    setCurrentPage(index);
  };

  const onPreviousButtonClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextButtonClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination
      totalPages={25}
      elementsToShow={10}
      currentPage={currentPage}
      onNextButtonClick={onNextButtonClick}
      onPreviousButtonClick={onPreviousButtonClick}
      onSpecificPageButtonClick={onSpecificPageButtonClick}
    />
  );
};

const Pagination = ({
  totalPages,
  elementsToShow,
  currentPage,
  onSpecificPageButtonClick,
  onPreviousButtonClick,
  onNextButtonClick,
}) => {
  const getPaginationValue = useCallback((currentPage, elementsToShow) => {
    return new Array(elementsToShow)
      .fill()
      .map((_, index) => currentPage + index);
  }, []);

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        disabled={currentPage === 0}
        onClick={onPreviousButtonClick}
      >
        &lt;
      </button>
      {getPaginationValue(currentPage, elementsToShow).map((value) => (
        <button
          className={`pagination-button ${
            value === currentPage ? "selected" : null
          }`}
          onClick={() => onSpecificPageButtonClick(value)}
          disabled={currentPage === value}
          key={value}
        >
          {value + 1}
        </button>
      ))}
      <button
        className="pagination-button"
        disabled={currentPage === totalPages - 1}
        onClick={onNextButtonClick}
      >
        &gt;
      </button>
    </div>
  );
};
