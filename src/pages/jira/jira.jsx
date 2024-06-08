import React, { useState } from "react";

import "./jira.css";
import { useJira } from "./useJira";

export const Jira = () => {
  const { newTask, onFormChange, onSubmitClick, tasks } = useJira();

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="text"
          name="title"
          placeholder="title"
          value={newTask.title}
          onChange={onFormChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={newTask.description}
          onChange={onFormChange}
        />
        <select name="type" id="type" onChange={onFormChange}>
          <option value="">Please Select Type</option>
          <option value="open">Open</option>
          <option value="progress">progress</option>
          <option value="done">done</option>
        </select>

        <button onClick={onSubmitClick}>Submit</button>
      </div>

      <div className="jira-container">
        {Object.keys(tasks).map((task) => (
          <div className="list-container" key={task}>
            <h4>{task.toUpperCase()}</h4>
            {tasks[task].map((list) => (
              <div key={list.id} className="list">
                <p>{list.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
