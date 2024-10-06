import React from "react";
import "./TaskForm.css";
import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext.js";
import { FiXCircle, FiArrowDownCircle } from "react-icons/fi";

function TaskForm() {
  const { onSave, setOpenTaskModal } = useContext(TaskContext);

  const [newTask, setNewTask] = useState("");
  const [newTaskEmpty, setnewTaskEmpty] = useState(false);

  const onAdd = (event) => {
    event.preventDefault();

    if (!newTask.trim()) {
      setnewTaskEmpty(false);
      setTimeout(() => setnewTaskEmpty(true), 0);
      return;
    }

    setnewTaskEmpty(false);
    onSave(newTask);
    setOpenTaskModal(false);
  };

  const onCancel = () => {
    setOpenTaskModal(false);
  };

  return (
    <form className="task-form" onSubmit={onAdd}>
      <textarea
        className={`task-form__textarea ${
          newTaskEmpty ? "task-form__textarea--error" : ""
        }`}
        placeholder="Add a new task"
        aria-label="Add task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <div className="task-form__actions">
        <button
          type="button"
          className="task-form__button task-form__button--cancel"
          onClick={onCancel}
        >
          <p className="task-form__text">Cancel</p>
          <FiXCircle className="task-form__icon" />
        </button>

        <button
          type="submit"
          className="task-form__button task-form__button--add"
        >
          <p className="task-form__text">Add</p>
          <FiArrowDownCircle className="task-form__icon" />
        </button>
      </div>
    </form>
  );
}

export { TaskForm };
