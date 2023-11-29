import { useState } from 'react'
import './App.css'
import People from './PersonCard.jsx'

function App() {

  return (
    <>
      <People firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"black"} />
      <People firstName={"John"} lastName={"Smith"} age={45} hairColor={"brown"} />
      <People firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"brown"} />
      <People firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"brown"} />
    </>
  )
}

export default App
