import { useState, useEffect } from "react";

export const useOutlook = () => {
  const GET_PRODUCTS = "https://dummyjson.com/products?limit=100";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(undefined);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(GET_PRODUCTS);
      const jsonResult = await result.json();
      setProducts(jsonResult.products);
    } catch (e) {
      throw Error("service failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onProductItemClick = (product) => {
    setSelectedProduct(product);
  };

  return {
    products,
    isLoading,
    selectedProduct,
    onProductItemClick,
    getProducts,
  };
};
