import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import { useState } from "react";
import { ToDoList } from "./ToDoList";





const Tareas = ()=>{
    const [todoArray, setTodoArray] = useState([]
    /* [{
     titulo: "Milk",
     descripcion: "algo",
     isComplete: false,
     id:1
    },
    {
        titulo: "Butter",
        descripcion: "algo",
        isComplete: true,
        id:2
       },
    {
        titulo: "Limon",
        descripcion: "algo",
        isComplete: false,
        id:3
       },
    {
        titulo: "Banana",
        descripcion: "algo",
        isComplete: false,
        id:4
       },
    {
        titulo: "Potato",
        descripcion: "algo",
        isComplete: false,
        id:5
       },
    {
        titulo: "Carrot",
        descripcion: "algo",
        isComplete: false,
        id:6
       }

    ] */)
      
        
       

    return(
        

        <div className="caja-tareas">
            { 
                todoArray.map( (todo)=>
                <div key={todo.id} className="border border-success d-flex align-items-center justify-content-between caja-tareas">
                    <div className="left d-flex align-items-baseline justify-content-between">
                    <input type="checkbox" className="check p-100" checked={todo.isComplete} />
                        <p className={`${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
                        {todo.titulo}
                        </p>
                    </div>
                    <div className="right">
                        <span className="badge bg">{todo.descripcion}</span>
                        {todo.isComplete}
                    </div>
                 </div>

                )
            }
        </div> 
    )
     } 

export default Tareas 