import { useState } from 'react'
import './App.css'
import { TaskList, TaskForm, TaskItem } from './componentes/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskList />
      <TaskForm />
      <TaskItem />
    
      <h1>hola</h1>
    </>
  )
}

export default App
