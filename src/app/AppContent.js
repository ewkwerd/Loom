import React from "react";
import logo from "../assets/img/logo.png";
import "./AppContent.css";
import { TaskContext } from "../contexts/TaskContext.js";
import { TaskSearch } from "../components/TaskSearch";
import { TaskCreate } from "../components/TaskCreate";
import { TaskCounter } from "../components/TaskCounter";
import { TaskItem } from "../components/TaskItem";
import { TaskModal } from "../components/TaskModal";
import { TaskForm } from "../components/TaskForm";
import { TaskLoading } from "../components/TaskLoading";
import { TaskEmpty } from "../components/TaskEmpty";
import { TaskError } from "../components/TaskError";

function AppContent() {
  const {
    tasksFound,
    openTaskModal,
    setOpenTaskModal,
    onToggleComplete,
    onDelete,
    loadingTasks,
    tasksError,
  } = React.useContext(TaskContext);

  return (
    <React.Fragment>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="Loom Logo" className="header__image" />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main__container">
          <div className="main__task-actions">
            <TaskSearch />
            <TaskCreate setOpenModal={setOpenTaskModal} />
            {openTaskModal && (
              <TaskModal>
                <TaskForm />
              </TaskModal>
            )}
          </div>
          <div className="main__task-details">
            <div className="main__task-status">
              <TaskCounter />
            </div>
            <div className="main__task-list">
              {loadingTasks && <TaskLoading />}
              {tasksError && <TaskError />}
              {!loadingTasks && tasksFound.length === 0 && <TaskEmpty />}
              {tasksFound.map((task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  state={task.state}
                  onToggleComplete={() => onToggleComplete(task.id)}
                  onDelete={() => onDelete(task.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export { AppContent };
