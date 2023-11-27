import React from "react";
import { useState, useEffect } from "react";
import './estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
    const nuevo = {}
    const tags = ["Supermercado", "Tareas Pendientes", "Trabajo", "Social", "Familia", "Importante"]
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
    const [tareaData, setTareaData] = useState({titulo:'', descripcion:''})
    const handleChange = ({target}) =>{
        setTareaData({...tareaData, [target.name]:target.value})
    }
    const addTarea = (e) =>{
        e.preventDefault();
        if(tareaData.titulo != '' && tareaData.descripcion != ''){
            const todo = tareaData;
            todo.isComplete = false;
            todo.id = todoArray.length + 1;

            setTodoArray([...todoArray, todo])
            setTareaData({titulo:'', descripcion:''})
            
        }
        console.dir(e)
    }
    useEffect(()=>{
        const data = window.localStorage.getItem('todoItems')
        if (data != null) setTodoArray(JSON.parse(data))
    },[])
    useEffect(()=>{
        const data = JSON.stringify(todoArray)
        window.localStorage.setItem('todoItems', data)
    },[todoArray])

    
    return (
      <div className={nuevo}>
        <form onSubmit={addTarea} >
            <input type="text" name="titulo" placeholder="Name" value={tareaData.titulo} onChange={handleChange}/>
            <br />
            <div className="input-group">
            <input type="text" name="descripcion" placeholder="Tag" value={tareaData.descripcion} onChange={handleChange} />
            <select name="tags" id="tags">
                {tags.map( (tag, i) => {
                    const tarea = <option value={`tag-${i}`}>{tag}</option>;
                    return tarea;
                })}
            </select>
            </div>
            <br />
            <button type="sumbit" onClick={addTarea}>Save</button>
           
        </form>
      </div>
    )
}

export {ToDoList}