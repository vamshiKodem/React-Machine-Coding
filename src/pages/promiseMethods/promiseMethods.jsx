import React from "react";

const POST_1 = "https://jsonplaceholder.typicode.com/posts/1";
const POST_2 = "https://jsonplaceholder.typicode.com/posts/2";
const POST_3 = "https://jsonplaceholder.typicode.com/posts/3";

export const PromiseMethods = () => {
  const fetchAPI = async (url) => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  };

  const getAllData = async () => {
    const response = await Promise.race([
      fetchAPI(POST_1),
      fetchAPI(POST_2),
      fetchAPI(POST_3),
    ]);

    console.log(response);
  };

  return (
    <div>
      <button onClick={getAllData}>Click Me</button>
    </div>
  );
};
