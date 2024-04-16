
import React, { useState } from 'react';
import DropdownItem from './DropdownItem';
function TodoItem({ task, deleteTask,editTask,handleSave,toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 const [textEditing,setTextEditing]=useState(task.text);
 
 return (
    <div>
{task.isEditing ? (
    <div className="flex justify-between items-center">
            <input
             className="bg-gray-100 border-2 border-blue-500 rounded-sm"
              type="text"
              value={textEditing}
              onChange={(e) => setTextEditing(e.target.value)}
              
              autoFocus
            />
                    <button className="bg-blue-400 text-white p-1 rounded-lg" onClick={() => handleSave(task.id,textEditing)}>Save</button>

        </div>
          )
           : (
    <div className={task.completed ? "bg-green-200 flex justify-between items-center border-2 border-gray-300 rounded-sm my-2 p-2" : "flex justify-between items-center border-2 border-gray-300 rounded-sm my-2 p-2"}>
 <input  

 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p  >
  {task.text}
</p>
    <DropdownItem
    onEdit={editTask}
    onDelete={deleteTask}
    task={task}></DropdownItem>
 </div>)}
 </div>
 );
}
export default TodoItem;
