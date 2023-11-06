import React, { useState, useEffect } from "react";
import "./pagination.css";

export const usePagination = () => {
  const [products, setProducts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const GET_PRODUCTS = new URL("https://dummyjson.com/products?limit=10");

  const getProducts = async () => {
    try {
      GET_PRODUCTS.searchParams.set("skip", (selectedPage - 1) * 10);
      const result = await fetch(GET_PRODUCTS);
      const productsJson = await result.json();
      setProducts(productsJson);
      setTotalPages(productsJson.total / 10);
    } catch (err) {
      throw Error("service fail", err);
    }
  };

  useEffect(() => {
    console.log(selectedPage);
    getProducts();
  }, [selectedPage]);

  const onNextClick = () => {
    console.log(GET_PRODUCTS);
    setSelectedPage(selectedPage + 1);
  };

  const onPreviousClick = () => {
    setSelectedPage(selectedPage - 1);
  };

  const onPageNumberClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  return {
    selectedPage,
    products,
    totalPages,
    onNextClick,
    onPreviousClick,
    onPageNumberClick,
  };
};
