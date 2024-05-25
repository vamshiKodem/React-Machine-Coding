import { useEffect, useState } from "react";

const GET_TODO = "https://dummyjson.com/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const getTodo = async () => {
    try {
      const data = await fetch(GET_TODO);
      const jsonData = await data.json();
      setTodoList(jsonData.todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const onCancelClick = (id) => {
    const updatedTodoList = todoList.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          completed: !list.completed,
        };
      }
      return list;
    });
    setTodoList(updatedTodoList);
  };

  return {
    todoList,
    onCancelClick,
  };
};
