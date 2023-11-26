import React from "react";
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToDoList } from "./ToDoList";

const caja = ()=>{
    return(
        <div key={todo.id} className="caja-tareas">
                    <input type="checkbox" className="check" checked={todo.isComplete} />
                    <p className={`p-0 m-0 flex-grow-1 ${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
                    {todo.titulo}
                    <span className="badge bg">{todo.descripcion}</span>
                    </p>
                    {todo.isComplete} 
                 </div>

                 /*<div className={styles.taskItem}>
                 <button onClick={() => onComplete(task.id)}>CheckBox</button>
                 <p className={task.isCompleted ? styles.completed : ''}>{task.task}</p>
                 <span>{task.tag}</span>
             </div>*/
    )
}
export default caja