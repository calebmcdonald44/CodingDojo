import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Display from './Display.jsx'


function App() {
  const [list, setList] = useState([
    {task: "Finish assignments", completed: false},
    {task: "Check fluids in car", completed: false},
    {task: "Movie night with Max and Stoney", completed: false},
  ])

  return (
    <>
      <Form list={list} setList={setList}></Form>
    </>
  )
}

export default App
