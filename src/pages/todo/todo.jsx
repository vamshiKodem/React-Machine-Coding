import React from "react";
import "./todo.css";
import { useTodo } from "./useTodo";

export const Todo = () => {
  const { todoList, onCancelClick } = useTodo();

  return (
    <div className="todo-container">
      <ul>
        {todoList.map((list) => (
          <li key={list.id}>
            <h6 className={list.completed === true ? "completed" : null}>
              {list.todo}
            </h6>
            <span className="link" onClick={() => onCancelClick(list.id)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
