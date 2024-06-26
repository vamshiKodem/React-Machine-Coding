import React from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../appContext";
import "../dynamicRouter.css";

export const Home = () => {
  const userList = [
    { id: 1, name: "vamshi" },
    { id: 2, name: "krishna" },
  ];

  const navigation = useNavigate();

  const onAboutClick = () => {
    navigation("/about");
  };

  const onUserClick = (user) => {
    navigation(`user/${user.id}`, { state: { userData: user } });
  };

  return (
    <div>
      Home
      <button className="dynamic-router-button" onClick={onAboutClick}>
        Go to About screen
      </button>
      {userList.map((user) => (
        <button
          className="dynamic-router-button"
          onClick={() => onUserClick(user)}
          key={user.id}
        >
          {user.name}
        </button>
      ))}
    </div>
  );
};
