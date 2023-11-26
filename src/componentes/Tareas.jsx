import React from "react";
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToDoList } from "./ToDoList";



const Tareas = ()=>{

    return(

        <div className="caja-tareas">
            <div className="d-flex align-items-center list-group-item">
                <h5>List</h5>
            </div> 
            {
                toDoArray.map( (todo)=>
                <div key={todo.id} className="caja-tareas">
                    <input type="checkbox" className="check" checked={todo.isComplete} />
                    <p className={`p-0 m-0 flex-grow-1 ${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
                    {todo.titulo}
                    <span>{todo.descripcion}</span>
                    </p>
                    {todo.isComplete && <span>Completada</span>}

                </div>

                )
            }
        </div> 
    )
}

export default Tareas