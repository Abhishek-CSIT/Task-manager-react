import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserPage from "./modules/user/pages/UserPage";
import TaskPage from "./modules/task/pages/TaskPage";
import DashBoard from "./modules/dashboard/DashBoard";
import TaskForm from "./modules/task/components/TaskForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="user" element={<UserPage />} />
        <Route path="task" element={<TaskPage />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="create-task" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
