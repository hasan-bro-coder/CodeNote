import React, { useState,useEffect } from "react";
import "./css/todo.scss";


const TodoApp = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        setEditIndex(index);
        setEditText(tasks[index].text);
    };

    const saveEditTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].text = editText;
        setTasks(newTasks);
        setEditIndex(null);
        setEditText("");
    };

    return (
        <div className="todo-con">
            <div className="form">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="todo-inp"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)}
                            
                        />
                        {editIndex === index ? (
                            <input
                                type="text"
                                className="edit"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <p>{task.text}</p>
                        )}
                        {editIndex === index ? (
                            <button onClick={() => saveEditTask(index)}>S</button>
                        ) : (
                            <button className="hid" onClick={() => editTask(index)}>E</button>
                        )}
                        <button className="hid" onClick={() => deleteTask(index)}>D</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;

