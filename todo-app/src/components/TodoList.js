import React, { useState } from "react";
import TodoItem from "./TodoItem";
function TodoList() {
    const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'do task1',
    isEditing: false,
    completed: true
    },
    {
    id: 2,
    text: 'Do task 2',
    isEditing: false,
    completed: false
    }
    ]);
    
    const [text, setText] = useState('');
   function addTask(text) {
    if(text){
    const newTask = {
    id: tasks.length+1,
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
    }
    function editTask(id){
        setTasks(tasks.map(task => {
            if (task.id === id) {
              return { ...task, isEditing: true };
            } else {
              return task;
            }
          }));
    }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }
    function handleSaveEdit(id,newText){
        setTasks(tasks.map(task => {
            if (task.id === id) {
              return { ...task, text: newText, isEditing: false };
            } else {
              return task;
            }
          }));
     

    }
   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }
   return (
    <div >
    {tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    editTask={editTask}
    handleSave={handleSaveEdit}
    toggleCompleted={toggleCompleted} 
    />
    ))}
    <div className="flex justify-between items-center ">
   <input
    className="bg-gray-100 rounded-sm"
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button className="bg-blue-400 text-white p-1 rounded-lg" onClick={() => addTask(text)}>Add</button>
    </div>
    </div>
    );
   }
   export default TodoList;
   