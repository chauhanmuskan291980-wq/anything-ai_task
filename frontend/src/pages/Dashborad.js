 import React, { useEffect, useState } from "react";
import API from "../api";
import TaskForm from "../components/TaskFrom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE
  const createTask = async (title) => {
    await API.post("/tasks", { title });
    fetchTasks();
  };

  // UPDATE
  const updateTask = async (title) => {
    await API.put(`/tasks/${editingTask.id}`, { title });
    setEditingTask(null);
    fetchTasks();
  };

  // DELETE
  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>

      <TaskForm
        onSubmit={editingTask ? updateTask : createTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <span>{task.title}</span>

            <div>
              <button onClick={() => setEditingTask(task)}>
                Edit
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}