import { useState } from 'react'
import axios from 'axios'

function Pokemon() {
    const [pokemon, setPokemon] = useState([])

    const pokemonFetch = () => {
        console.log('clicked')
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                setPokemon(response.data.results)
            }).catch(err => {
                console.log('err: ', err)
            })
        }


    return (
        <>
            <button onClick={pokemonFetch}>Fetch Pokemon</button>
            {
                pokemon.map((poke, idx) => (
                    <p key={idx}>{poke.name}</p>
                ))
            }
        </>
    )
}
export default Pokemon