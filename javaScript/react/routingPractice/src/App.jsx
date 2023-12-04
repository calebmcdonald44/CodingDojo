import { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
