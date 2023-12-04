import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './Pokemon.jsx'

function App() {
  const [count, setCount] = useState(0)

  const pokemonFetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        <li>{response}</li>
      }).catch(err => {
        <li>{err}</li>
      })
  }

  return (
    <>
      <Pokemon></Pokemon>
    </>
  )
}

export default App
