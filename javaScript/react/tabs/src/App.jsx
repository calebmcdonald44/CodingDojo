import { useState } from 'react'
import './App.css'
import Tabs from './Tabs.jsx'

function App() {
  const tabMessages = ["This is Tab 1", "This is Tab 2", "This is Tab 3"]

  return (
    <>
      <Tabs tabMessages={tabMessages}></Tabs>
    </>
  )
}

export default App
