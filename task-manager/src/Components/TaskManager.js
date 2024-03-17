// TaskManager.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    if (!newTask.title || !newTask.description) return;
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: '', description: '' });
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task Title"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Task Description"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
      <hr />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
      ))}
    </div>
  );
};

export default TaskManager;

