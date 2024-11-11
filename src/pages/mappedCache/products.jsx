import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMappedCache } from "../../customHooks/useMappedCache/useMappedCache";

export const Products = () => {
  const { fetchAndCache } = useMappedCache();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const getProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await fetchAndCache(
        "https://dummyjson.com/products?limit=15"
      );
      setProducts(result.products);
    } catch (err) {
      console.log("error", err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchAndCache]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {products.map((product) => (
            <h2>{product.title}</h2>
          ))}
        </div>
      )}

      <button
        className="h-20 w-200 border-2 border-slate-600 rounded p-5"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};
