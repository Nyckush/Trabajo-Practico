import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import { useState } from "react";
import { ToDoList } from "./ToDoList";

const caja = ()=>{
    return(
        <div key={todo.id} className="caja-tarea">
                    <input type="checkbox" className="check" checked={todo.isComplete} />
                    <p className={`border border-success ${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
                    {todo.titulo}
                    </p>
                    <span className="badge bg">{todo.descripcion}</span>
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