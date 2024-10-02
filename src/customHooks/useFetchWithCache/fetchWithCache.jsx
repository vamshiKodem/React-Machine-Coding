import React, { useState } from "react";
import { fetchWithCache } from "./useFetchWithCache";

export const FetchWithCache = () => {
  const [users, setUsers] = useState([]);

  const onGetUserClick = async () => {
    const { data } = await fetchWithCache(
      "getUsers",
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  return (
    <div className="container">
      <button onClick={onGetUserClick}>Get users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
