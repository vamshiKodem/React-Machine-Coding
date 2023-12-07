import { useState } from "react";

export const useDragAndDrop = () => {
  const [initialDragList, setInitialDragList] = useState([
    { title: "Item 1", id: 1 },
    { title: "Item 2", id: 2 },
    { title: "Item 3", id: 3 },
    { title: "Item 4", id: 4 },
    { title: "Item 5", id: 5 },
  ]);
  const [dragList, setDragList] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("dragItems", JSON.stringify(item));
  };

  const handleOnDrop = (e) => {
    const data = JSON.parse(e.dataTransfer.getData("dragItems"));
    const isExisting = dragList.find((list) => list.id === data.id);
    if (!isExisting) {
      const newInitialDragList = initialDragList.filter(
        (list) => list.id !== data.id
      );
      setInitialDragList(newInitialDragList);
      setDragList([...dragList, data]);
    }
  };

  return {
    initialDragList,
    dragList,
    handleDragStart,
    handleOnDrop,
  };
};
