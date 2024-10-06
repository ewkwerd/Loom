import "./TaskItem.css";
import { FiCheckCircle, FiCircle, FiTrash2 } from "react-icons/fi";

function TaskItem({ text, state, onToggleComplete, onDelete }) {
  return (
    <div className="task-item">
      <span className="task-item__button">
        {state ? (
          <FiCheckCircle
            className="task-item__icon task-item__icon--completed"
            onClick={onToggleComplete}
          />
        ) : (
          <FiCircle
            className="task-item__icon task-item__icon--complete"
            onClick={onToggleComplete}
          />
        )}
      </span>
      <p
        className={
          state
            ? "task-item__text task-item__text--completed"
            : "task-item__text"
        }
      >
        {text}
      </p>
      <span className="task-item__button">
        <FiTrash2
          className="task-item__icon task-item__icon--delete"
          onClick={onDelete}
        />
      </span>
    </div>
  );
}

export { TaskItem };
