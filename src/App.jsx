import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pool from './components/pool';
import Form from './components/form';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('')

  const getTaskArray = () => {
    let initTasks = JSON.parse(localStorage.getItem('tasks'))
    if (initTasks == null) initTasks = []
    return initTasks
  }
  const [tasks, setTasks] = useState(getTaskArray())

  return (
    <>
    <Form
      setNewTask={setNewTask}
      setTasks={setTasks}
      newTask={newTask}
      tasks={tasks}
    />
    <Pool
      tasks={tasks}
      setTasks={setTasks}
    />
    </>
  )
}

export default App
