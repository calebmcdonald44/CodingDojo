import { useState } from 'react'
import './App.css'
import ColorForm from './ColorForm.jsx'
import ColorDisplay from './ColorDisplay.jsx'

function App() {
  const [boxColors, setBoxColors] = useState([])

  const updateColors = (color) => {
    setBoxColors([...boxColors, color])
}

  return (
    <>
      <ColorForm updateColors={updateColors}></ColorForm>
      <ColorDisplay colors={boxColors}></ColorDisplay>
    </>
  )
}

export default App
