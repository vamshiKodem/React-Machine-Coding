import React from "react";

import "./infiniteScroll.css";
import { InfiniteScrollCard } from "./infiniteScrollCard";
import { useInfiniteScroll } from "./useInfiniteScroll";

export const InfiniteScroll = () => {
  const { products, lastCardList } = useInfiniteScroll();

  return (
    <div className="infinity-container">
      <h1>Infinity Scroll Project</h1>
      <div className="products-container">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <InfiniteScrollCard
                lastCardRef={lastCardList}
                product={product}
                key={product.id + index}
              />
            );
          }
          return (
            <InfiniteScrollCard product={product} key={product.id + index} />
          );
        })}
      </div>
    </div>
  );
};
