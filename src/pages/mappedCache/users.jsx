import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMappedCache } from "../../customHooks/useMappedCache/useMappedCache";

export const Users = () => {
  const { fetchAndCache } = useMappedCache();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await fetchAndCache(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result);
    } catch (err) {
      console.log("error in service call", err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchAndCache]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {users.map((user) => (
            <h1>{user.name}</h1>
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
