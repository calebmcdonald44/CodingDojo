import { useState } from 'react'

function Pokemon() {
    const [pokemon, setPokemon] = useState([])

    const pokemonFetch = () => {
        console.log('clicked')
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                console.log('response: ', response);
                return response.json()
            }).then(response => {
                console.log('response: ', response);
                setPokemon(response.results)
            }).catch(err => {
                console.log('err: ', err);
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