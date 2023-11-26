import React from "react";
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToDoList } from "./ToDoList";





const Tareas = ()=>{
    const [todoArray, setTodoArray] = useState(
    [{
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

    ])
      
        
       

    return(
        

        <div className="caja-tareas">
            <div className="d-flex align-items-center">
             <p>List</p> <p>Tag</p>
            </div> 
            { 
                todoArray.map( (todo)=>
                <div key={todo.id} className="caja-tareas">
                    <input type="checkbox" className="check" checked={todo.isComplete} />
                    <p className={`p-0 m-0 flex-grow-1 ${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
                    {todo.titulo}
                    <span className="badge bg">{todo.descripcion}</span>
                    </p>
                    {todo.isComplete} 
                 </div>

                )
            }
        </div> 
    )
     } 

export default Tareas 