import "./TaskError.css";
import { FiAlertTriangle } from "react-icons/fi";

function TaskError() {
  return (
    <div className="task-error">
      <FiAlertTriangle className="task-error__icon" />
      <div className="task-error__content">
        <p className="task-error__text task-error__text--title">
          Oops! Something went wrong
        </p>
        <p className="task-error__text task-error__text--message">
          An error occurred, please refresh.
        </p>
      </div>
    </div>
  );
}

export { TaskError };
