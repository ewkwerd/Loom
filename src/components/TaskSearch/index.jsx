import React from "react";
import "./TaskSearch.css";
import { TaskContext } from "../../contexts/TaskContext.js";

function TaskSearch() {
  const { searchedTasks, setSearchedTasks } = React.useContext(TaskContext);

  return (
    <input
      name="taskSearch"
      type="text"
      className="task-search__input"
      placeholder="Search for a task"
      aria-label="Search task"
      value={searchedTasks}
      onChange={(event) => setSearchedTasks(event.target.value)}
    />
  );
}

export { TaskSearch };
