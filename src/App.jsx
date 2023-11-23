import { useState } from 'react'
import './App.css'
import { TaskList, TaskForm, TaskItem } from './componentes/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='contenedor'>
        <h1>Superlist</h1>
        <TaskForm />
      </div>
    </>
  )
}

export default App
