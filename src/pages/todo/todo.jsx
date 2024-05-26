import React from "react";
import "./todo.css";
import { useTodo } from "./useTodo";

export const Todo = () => {
  const {
    todoList,
    onCancelClick,
    inputId,
    onTodoInputChange,
    onSubmitPress,
    todoInput,
    onDeleteTodoClick,
  } = useTodo();

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Add Todo"
        id={inputId}
        value={todoInput}
        onChange={(e) => onTodoInputChange(e)}
      />
      <button onClick={onSubmitPress}>Submit</button>
      <ul>
        {todoList.map((list) => (
          <li key={list.id}>
            <h6 className={list.completed === true ? "completed" : null}>
              {list.todo}
            </h6>
            <div>
              <span className="link" onClick={() => onCancelClick(list.id)}>
                Completed
              </span>
              <span className="link" onClick={() => onDeleteTodoClick(list.id)}>
                Delete
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
