import React, { useState } from "react";
import "./dragAndDrop.css";
import { useDragAndDrop } from "./useDragAndDrop";

export const DragAndDrop = () => {
  const { initialDragList, dragList, handleDragStart, handleOnDrop } =
    useDragAndDrop();
  return (
    <div className="drag-drop-container">
      <div className="list-container">
        {initialDragList.map((data) => (
          <div
            key={data.id}
            className="drag-list"
            draggable
            onDragStart={(e) => handleDragStart(e, data)}
          >
            {data.title}
          </div>
        ))}
      </div>
      <div
        className="drop-container"
        onDrop={handleOnDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {dragList.length > 0 &&
          dragList.map((list) => (
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, list)}
              className="drag-list"
              key={list.id}
            >
              {list.title}
            </div>
          ))}
      </div>
    </div>
  );
};
