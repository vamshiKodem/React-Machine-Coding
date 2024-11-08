import React, { useCallback, useState } from "react";
import { useMappedCache } from "../../customHooks/useMappedCache/useMappedCache";

export const MappedCache = () => {
  const { fetchAndCache } = useMappedCache();
  const [todos, setTodos] = useState([]);

  const getTodos = useCallback(async () => {
    try {
      const result = await fetchAndCache(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(result);
    } catch (err) {
      console.log("error in service call", err);
    }
  }, [fetchAndCache]);

  return (
    <div className="container">
      <button className="h-20 w-40 rounded bg-slate-600" onClick={getTodos}>
        Get Todo
      </button>
      <div>
        {todos.map((todo) => (
          <h1>{todo.title}</h1>
        ))}
      </div>
    </div>
  );
};
