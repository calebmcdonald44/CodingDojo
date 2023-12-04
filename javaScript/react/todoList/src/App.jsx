import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'



function App() {
  const [list, setList] = useState([
    {task: "Finish assignments", completed: false},
    {task: "Check fluids in car", completed: false},
    {task: "Eat dinner", completed: false},
  ])

  const changeCompletion = (idx) => {
    let newList = list.map((value, i) => idx != i ? value : {"task": value.task, completed: !value.completed})
    setList(newList)
  }

  const deleteTask = (idx) => {
    setList(list.filter((entry, i) => i != idx))
  }
  const addTask = (newTask) => {
    setList([...list, newTask])
}

  const listMap = list.map(({task, completed}, idx) =>
    <div key={idx} className={completed ? "completed" : "uncompleted"}>
        <label htmlFor="">Task:</label>
        <p>{task}</p>
        <input type="checkbox" checked={completed} onChange={() => changeCompletion(idx)}/>
        <button onClick={() => deleteTask(idx)}>Delete</button>
    </div>
  )

  return (
    <>
      <Form changeCompletion={changeCompletion} deleteTask={deleteTask} listMap={listMap} addTask={addTask}></Form>
    </>
  )
}

export default App
