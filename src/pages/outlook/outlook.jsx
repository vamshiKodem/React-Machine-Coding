import React from "react";
import "./outlook.css";
import { useOutlook } from "./useOutlook";

export const Outlook = () => {
  const {
    isLoading,
    onProductItemClick,
    products,
    selectedProduct,
    getProducts,
  } = useOutlook();

  return (
    <div className="main-container">
      {!isLoading ? (
        <>
          <div className="left-section">
            <h1>THIS IS LEFT SECTION</h1>
            <div className="left-inner-section">
              {products.map((product) => (
                <div
                  className="product-item"
                  onClick={() => onProductItemClick(product)}
                  key={product.id}
                >
                  <h3>{product.title}</h3>
                  <p>{product.category}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right-section">
            {selectedProduct ? (
              <>
                <h1>{selectedProduct.title}</h1>
                <p>{selectedProduct.description}</p>
                <div className="image-container">
                  <img
                    className="img-thumbnail"
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                  />
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
