import { Routes, Route } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskForm from "./components/TaskForm";
import Logout from "./components/Logout";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <Routes>
        <Route index element=<Login /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
        <Route path="/taskform" element=<TaskForm /> />
        <Route path="/logout" element=<Logout /> />
        <Route path="/user/tasks" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
