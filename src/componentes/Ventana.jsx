import { useState } from "react";
import NuevaTarea from "./NuevaTarea";
import { ToDoList } from "./ToDoList";
import './estilos.css'
const Ventana = () => {

  const [verFormulario, setVerFormulario] = useState(false)


  return (
    /* 
    Div inferior de la lista para agregar nuevas tareas, tiene el boton "Add". 
    Cuando se hace click se abre el componente de NuevaTarea que también lleva dentro
    otro componente que es ToDoList 
     
    */
    <div className="w-100 text-center">

      <button className="btn btn-success" onClick={() => setVerFormulario(true)}>Add</button>
      <NuevaTarea isOpen={verFormulario} onClose={() => setVerFormulario(false)} />


    </div>
  )
}

export default Ventana