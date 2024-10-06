import "./TaskEmpty.css";
import { FiClipboard } from "react-icons/fi";

function TaskEmpty() {
  return (
    <div className="task-empty">
      <FiClipboard className="task-empty__icon" />
      <div className="task-empty__content">
        <p className="task-empty__text task-empty__text--title">
          You don't have any saved tasks
        </p>
        <p className="task-empty__text task-empty__text--message">
          Clear tasks and organize your to-do items.
        </p>
      </div>
    </div>
  );
}

export { TaskEmpty };
