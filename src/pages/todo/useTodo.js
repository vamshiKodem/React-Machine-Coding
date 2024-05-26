import { useEffect, useId, useState } from "react";

const GET_TODO = "https://dummyjson.com/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputId = useId();
  const [todoInput, setTodoInput] = useState("");

  const getTodo = async () => {
    try {
      const data = await fetch(GET_TODO);
      const jsonData = await data.json();
      setTodoList(jsonData.todos);
      console.log(jsonData.todos);
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

  const onTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const onSubmitPress = () => {
    if (!todoInput) {
      return;
    }
    const newTodo = {
      completed: false,
      id: todoList.length + 1,
      todo: todoInput,
    };
    setTodoList([...todoList, newTodo]);
    setTodoInput("");
  };

  const onDeleteTodoClick = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  return {
    todoList,
    onCancelClick,
    inputId,
    todoInput,
    onTodoInputChange,
    onSubmitPress,
    onDeleteTodoClick,
  };
};
