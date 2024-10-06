import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading: loadingTasks,
    error: tasksError,
  } = useLocalStorage("tasks", []);

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.state === true).length;
  const [searchedTasks, setSearchedTasks] = useState("");
  const tasksFound = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchedTasks.toLowerCase())
  );
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const onSave = (text) => {
    const newTasks = [...tasks];
    let newId = newTasks.length > 0 ? newTasks[newTasks.length - 1].id + 1 : 1;

    newTasks.push({
      id: newId,
      text: text,
      state: false,
    });

    saveTasks(newTasks);
  };

  const onToggleComplete = (id) => {
    const newTasks = [...tasks];

    const taskIndex = newTasks.findIndex((task) => task.id === id);

    if (newTasks[taskIndex].state === true) {
      newTasks[taskIndex].state = false;
    } else {
      newTasks[taskIndex].state = true;
    }

    saveTasks(newTasks);
  };

  const onDelete = (id) => {
    const newTasks = [...tasks];

    const taskIndex = newTasks.findIndex((task) => task.id === id);

    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksCreated,
        tasksCompleted,
        searchedTasks,
        setSearchedTasks,
        tasksFound,
        openTaskModal,
        setOpenTaskModal,
        loadingTasks,
        tasksError,
        onSave,
        onToggleComplete,
        onDelete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
