import React, { useCallback } from "react";
import { useSimpleCache } from "../../customHooks/simpleCache/useSimpleCache";

const SimpleCache = () => {
  const { fetchAndCache } = useSimpleCache();

  const getTodos = useCallback(async () => {
    await fetchAndCache("https://jsonplaceholder.typicode.com/todos");
  }, [fetchAndCache]);

  return (
    <div className="container">
      <button onClick={getTodos} className="button">
        Get Todo
      </button>
    </div>
  );
};

export default SimpleCache;
