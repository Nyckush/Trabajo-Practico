import { useState } from 'react'
import './App.css'
import { TaskList, TaskForm, TaskItem } from './componentes/Index'

function App() {
  const [formVisible, setFormVisible] = useState(false)
  const visible = () => {
    setFormVisible(!formVisible)
  }

  const [tasks, setTasks] = useState([]);

  function addTask(task, tag) {
    setTasks([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        task: task,
        tag: tag,
        isCompleted: false
      }
    ]);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    })
    setTasks(newTasks);
  }

  return (
    <> 
    <div className='contenedor'>
      <section>
            <header>
                <div>
                    <p className='title'>Superlist</p>
                </div>
                <div>
                    <p>List</p>
                    <p>Tags</p>
                </div>
            </header>

        </section>
      <TaskList 
        tasks={tasks}
        onComplete={toggleTaskCompletedById} 
        />
        {
            formVisible && (
              <TaskForm onAddTask={addTask} />
            )
          }
          <button onClick={visible}>Add</button>
      </div>
    </>
  )
}

export default App
