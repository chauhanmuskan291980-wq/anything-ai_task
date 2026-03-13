import React, { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        required
      />

      <button type="submit">
        {editingTask ? "Update" : "Add"}
      </button>

      {editingTask && (
        <button
          type="button"
          onClick={() => setEditingTask(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
}