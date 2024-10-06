import React from "react";
import "./TaskModal.css";
import ReactDOM from "react-dom";

function TaskModal({ children }) {
  return ReactDOM.createPortal(
    <div className="task-modal__container">{children}</div>,
    document.getElementById("task-modal__root")
  );
}

export { TaskModal };
