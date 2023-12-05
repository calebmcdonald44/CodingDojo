import React from "react"
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Destination from "./Destination.jsx"

function App() {
  return (
    <>
      <h1>Type /something after the URL to see it rendered!</h1>
      <Routes>
        <Route path='/:num_or_string' element={<Destination />}></Route>
        <Route path='/:num_or_string/:color1' element={<Destination />}></Route>
        <Route path='/:num_or_string/:color1/:color2' element={<Destination />}></Route>
      </Routes>
    </>
  )
}

export default App
