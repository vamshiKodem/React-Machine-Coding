import React from "react";
import "./infiniteScroll.css";

export const InfiniteScrollCard = (props) => {
  const { product, lastCardRef } = props;
  return (
    <div className="product-container" ref={lastCardRef}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
    </div>
  );
};
