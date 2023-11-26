import React from "react";
import { useState, useEffect } from "react";
import './estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
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
      <div className="formCont">
        <form onSubmit={addTarea} >
            
            <input type="text" name="titulo" placeholder="Name" value={tareaData.titulo} onChange={handleChange}/>
            <br />
            <div className="input-group">
            <input type="text" name="descripcion" placeholder="Tag" value={tareaData.descripcion} onChange={handleChange} />
            <button type="sumbit">+</button></div>
            <br />
            <button type="sumbit">Save</button>
           
        </form>
      </div>
    )
}

export {ToDoList} 