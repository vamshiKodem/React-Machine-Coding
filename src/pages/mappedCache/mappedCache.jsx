import React, { useCallback, useState } from "react";
import { useMappedCache } from "../../customHooks/useMappedCache/useMappedCache";

export const MappedCache = () => {
  const { fetchAndCache } = useMappedCache();
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const result = await fetchAndCache(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result);
    } catch (err) {
      console.log("error in service call", err);
    }
  }, [fetchAndCache]);

  return (
    <div className="container">
      <button className="h-20 w-40 rounded bg-slate-600" onClick={getUsers}>
        Get Users
      </button>
      <div>
        {users.map((user) => (
          <h1>{user.name}</h1>
        ))}
      </div>
    </div>
  );
};
