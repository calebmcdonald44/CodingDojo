import { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home.jsx'
import OneProduct from './views/OneProduct.jsx'
import Update from './views/Update.jsx'
import axios from 'axios'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/api/product/:id' element={<OneProduct />}></Route>
        <Route path='api/product/:id/edit' element={<Update />} ></Route>
      </Routes>
    </>
  )
}

export default App
