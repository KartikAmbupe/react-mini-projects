import { useState } from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, isCompleted: false }]);
            setNewTask('');
        }
    };

    const taskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, isCompleted: !task.isCompleted };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    };

    return (
        <div className='flex justify-center'>
            <div className="app text-center font-sans mt-10 mx-4">
                <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
                <div className="input-container mb-4">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter a task..."
                        className="border rounded px-3 py-2 mr-2"
                    />
                    <button 
                        onClick={addTask} 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Add
                    </button>
                </div>
                <div className="table-container">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="">
                                <th className="border px-4 py-2 ">Status</th>
                                <th className="border px-4 py-2 ">Task</th>
                                <th className="border px-4 py-2 ">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index} className={task.isCompleted ? 'line-through text-gray-500' : ''}>
                                    <td className="border px-4 py-2 text-center">
                                        <input
                                            type="checkbox"
                                            checked={task.isCompleted}
                                            onChange={() => taskCompletion(index)}
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{task.text}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <button 
                                            onClick={() => removeTask(index)} 
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Todo;
