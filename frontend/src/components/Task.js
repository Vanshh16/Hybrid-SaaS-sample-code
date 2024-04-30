// components/Tasks.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = () => {
    axios.post('/api/tasks', { title: 'New Task', description: 'Description' })
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
