import { useState } from "react";

export const useJira = () => {
  const [tasks, setTasks] = useState({
    open: [{ id: "10", title: "title1", description: "description" }],
    progress: [
      { id: "1", title: "title1", description: "description" },
      { id: "2", title: "title1", description: "description" },
      { id: "3", title: "title1", description: "description" },
    ],
    done: [{ id: "11", title: "title1", description: "description" }],
  });

  const initialInputState = {
    title: "",
    description: "",
    type: "",
  };

  const [newTask, setNewTask] = useState(initialInputState);

  const onFormChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const onSubmitClick = () => {
    if (!newTask.description || !newTask.title || !newTask.type) {
      alert("data missing");
      return;
    }
    const newData = {
      title: newTask.title,
      id: Math.random(),
      description: newTask.description,
      type: newTask.type,
    };
    setTasks({
      ...tasks,
      ...tasks[newTask.type].push(newData),
    });

    setNewTask(initialInputState);
  };

  return {
    onSubmitClick,
    onFormChange,
    newTask,
    tasks,
  };
};
