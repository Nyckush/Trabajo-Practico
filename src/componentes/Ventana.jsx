import React from "react";
import { useState } from "react";
import { NuevaTarea } from "./NuevaTarea"
import { ToDoList } from "./ToDoList";

const Ventana = ()=>{

  const [verFormulario, setVerFormulario] = useState(false)
  

    return (
        <div className="w-100">
          <button className="boton" onClick={()=> setMostrar(true)}>Add</button>
          <NuevaTarea isOpen= {verFormulario} onClose={()=>setVerFormulario(false)}>
           <ToDoList/>
          </NuevaTarea>

        </div>
    )
}

export {Ventana}