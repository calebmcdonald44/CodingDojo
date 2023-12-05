import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Display from './Display.jsx'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
      <Form></Form>
      <Routes>
        <Route path='/:category/:id' element={<Display />}></Route>
      </Routes>
    </>
  )
}

export default App
