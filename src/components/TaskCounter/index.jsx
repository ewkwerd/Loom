import React from "react";
import "./TaskCounter.css";
import { TaskContext } from "../../contexts/TaskContext.js";

function TaskCounter() {
  const { tasksCreated, tasksCompleted } = React.useContext(TaskContext);

  return (
    <>
      <p className="task-counter__text task-counter__text--created">
        Created tasks
        <span className="task-counter__number"> {tasksCreated} </span>
      </p>
      <p className="task-counter__text task-counter__text--completed">
        Completed
        <span className="task-counter__number">
          {tasksCompleted} of {tasksCreated}
        </span>
      </p>
    </>
  );
}

export { TaskCounter };
