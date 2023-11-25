import { useState } from 'react'
import { TaskList, TaskForm, TaskItem } from './componentes/Index'
import ToDoList from './componentes/ToDoList';
import Tareas from './componentes/Tareas';
import Header from './componentes/Header';
import './App.css'


function App() {



  return (
    <>  
    <div className='nav'>
      <Header />
    </div>

    <div className='contenedor'>
      <Tareas />
      <button onClick={<ToDoList/>}>Add</button>
    </div>
     
  </>
  )
}

export default App
