import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteTaskById, findAllTasks } from "../services/tasks";
import { Link } from "react-router";

function TaskList() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const tasks = findAllTasks();
    console.log(tasks);
    setTask(tasks);
  }, []);

  const handleDelete = (id) => {
    deleteTaskById(id);
    setTask(task.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h3>My Tasks</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {task.map((t) => {
            return (
              <tr>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.desc}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <span>{t.title}</span>
          <span>{t.desc}</span> */}

      <div>
        <Link className="btn btn-primary mx-3" to="/taskform">
          Add Task
        </Link>
      </div>
      <div>
        <br />
        <Link className="btn btn-secondary mx-3" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default TaskList;
