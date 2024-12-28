import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if(newTask.trim() !== ''){
      setTasks([...tasks, {text: newTask, isCompleted: false}]);
      setNewTask("");
    }
  };

  const taskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if(i === index){
        return {...task, isCompleted: !task.isCompleted}
      }
      else{
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }

  return (
    <>
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.isCompleted ? "completed" : ""}>
            <input className='checkbox'
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => taskCompletion(index)}
            />
            {task.text}{' '}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
