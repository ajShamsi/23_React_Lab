// TaskItem.js
import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSaveEdit = () => {
    onEdit(editedTask);
    setEditing(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="task-content">
          {editing ? (
            <>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Task Title"
                name="title"
                value={editedTask.title}
                onChange={handleEditChange}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Task Description"
                name="description"
                value={editedTask.description}
                onChange={handleEditChange}
              ></textarea>
            </>
          ) : (
            <>
              <h5 className="card-title task-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>
            </>
          )}
        </div>
        <div className="task-buttons">
          {editing ? (
            <button className="btn btn-success" onClick={handleSaveEdit}>
              Save
            </button>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => setEditing(true)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;


