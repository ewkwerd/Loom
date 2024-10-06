import "./TaskLoading.css";
import { FiLoader } from "react-icons/fi";

function TaskLoading() {
  return (
    <div className="task-loading">
      <FiLoader className="task-loading__icon" />
      <div className="task-loading__content">
        <p className="task-loading__text task-loading__text--title">
          Loading your tasks
        </p>
        <p className="task-loading__text task-loading__text--message">
          We're getting everything ready, please wait.
        </p>
      </div>
    </div>
  );
}

export { TaskLoading };
