import { useState, useEffect, useRef, useCallback } from "react";

export const useInfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const GET_PRODUCTS = new URL("https://dummyjson.com/products?limit=15");
  const observer = useRef();

  const getProducts = async () => {
    try {
      GET_PRODUCTS.searchParams.set("skip", page * 15);
      const response = await fetch(GET_PRODUCTS);
      const jsonResponse = await response.json();
      setProducts((prev) => [...prev, ...jsonResponse.products]);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  // this is the way using event listener and document object
  // const scrollAtBottom = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", scrollAtBottom);
  //   return () => document.removeEventListener("scroll", scrollAtBottom);
  // }, []);

  const lastCardList = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);

  return {
    products,
    lastCardList,
  };
};
