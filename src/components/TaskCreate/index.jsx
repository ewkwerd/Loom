import "./TaskCreate.css";
import { FiPlusCircle } from "react-icons/fi";

function TaskCreate({ setOpenModal }) {
  return (
    <span
      className="task-add__button"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <p className="task-add__text">Create</p>
      <FiPlusCircle className="task-add__icon" />
    </span>
  );
}

export { TaskCreate };
