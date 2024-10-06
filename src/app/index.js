import { AppContent } from "./AppContent.js";
import { TaskProvider } from "../contexts/TaskContext.js";

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;
