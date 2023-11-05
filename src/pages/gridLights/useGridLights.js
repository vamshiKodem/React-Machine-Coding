import { useState } from "react";

export const useGridLights = () => {
  const configMatrix = [
    [
      { id: 1, show: true },
      { id: 2, show: true },
      { id: 3, show: true },
    ],
    [
      { id: 4, show: true },
      { id: 5, show: false },
      { id: 6, show: true },
    ],
    [
      { id: 7, show: true },
      { id: 8, show: true },
      { id: 9, show: true },
    ],
  ];
  const [selectedGrid, setSelectedGrid] = useState([]);

  const onGridClick = (id) => {
    if (selectedGrid.includes(id)) {
      return;
    }
    const newSelectedGrid = [...selectedGrid, id];
    setSelectedGrid(newSelectedGrid);

    if (
      configMatrix.flat(1).filter((data) => data.show).length ===
      newSelectedGrid.length
    ) {
      unSelectGrid();
    }
  };

  const unSelectGrid = () => {
    const timer = setInterval(() => {
      setSelectedGrid((prev) => {
        const newData = prev.slice();
        newData.pop();
        if (newData.length === 0) {
          clearInterval(timer);
        }
        return newData;
      });
    }, 300);
  };

  return {
    configMatrix,
    onGridClick,
    selectedGrid,
  };
};
