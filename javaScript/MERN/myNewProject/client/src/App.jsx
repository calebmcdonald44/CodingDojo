import { useState } from 'react'
import './App.css'
import React from 'react'
import Home from './views/Home'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
