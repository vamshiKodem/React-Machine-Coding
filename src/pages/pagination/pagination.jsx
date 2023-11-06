import React from "react";

import "./pagination.css";
import { usePagination } from "./usePagination";

export const Pagination = () => {
  const {
    products,
    totalPages,
    selectedPage,
    onNextClick,
    onPreviousClick,
    onPageNumberClick,
  } = usePagination();

  return (
    <div className="pagination-container">
      {products.products && products.products.length ? (
        <div className="product-container">
          {/* This is for pagination in frontend */}
          {/* {products.products.slice(selectedPage * 10 - 10, selectedPage * 10).map((data) => ( */}
          {products.products.map((data) => (
            <div className="product" key={data.id}>
              <img
                src={data.thumbnail}
                alt={data.title}
                className="product-img"
              />
              <h1>{data.brand}</h1>
            </div>
          ))}
        </div>
      ) : (
        "Loading"
      )}
      <div className="pagination-container">
        {/* This is for pagination in frontend */}
        {/* {products.products && products.products.length ? (
          <div className="pagination-column">
            {selectedPage === 1 ? null : (
              <span onClick={onPreviousClick}>Previous</span>
            )}
            {[...Array(products.products.length / 10)].map((_, i) => (
              <span
                className="page-number"
                key={i}
                onClick={() => onPageNumberClick(i + 1)}
              >
                {i + 1}
              </span>
            ))}
            {selectedPage < products.products.length / 10 ? (
              <span onClick={onNextClick}>Next</span>
            ) : null}
          </div>
        ) : null} */}
        {products.products && products.products.length ? (
          <div className="pagination-column">
            {selectedPage === 1 ? null : (
              <span onClick={onPreviousClick}>Previous</span>
            )}
            {[...Array(totalPages)].map((_, i) => (
              <span
                className={`page-number ${
                  i + 1 === selectedPage ? "selected" : ""
                }`}
                key={i}
                onClick={() => onPageNumberClick(i + 1)}
              >
                {i + 1}
              </span>
            ))}
            {selectedPage < totalPages ? (
              <span onClick={onNextClick}>Next</span>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
