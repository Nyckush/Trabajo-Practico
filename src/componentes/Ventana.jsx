import { useState } from "react";
import NuevaTarea from "./NuevaTarea";
import { ToDoList } from "./ToDoList";
import './estilos.css'
const Ventana = ()=>{

  const [verFormulario, setVerFormulario] = useState(false)
  

    return (
        <div className="w-100">
          <button className="btn btn-success" onClick={()=> setVerFormulario(true)}>Add</button>
          <NuevaTarea isOpen= {verFormulario} onClose={()=>setVerFormulario(false)}/>
          

        </div>
    )
}

export default Ventana