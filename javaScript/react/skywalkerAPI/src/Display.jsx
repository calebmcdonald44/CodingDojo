import { useState, useEffect } from 'react'
import { useParams } from "react-router"
import axios from "axios"

const Display = (props) => {
    const {category, id} = useParams()
    const [data, setData] = useState()

    const starWarsFetch = (type, id) => {
    
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            }).catch(err => {
                console.log(err)
                setData('error')
            })
        }

    useEffect(() => {
    starWarsFetch(category, id)}, [category, id]
    )
    if(category === 'planets') {
        return (!data ? <h1>Retrieving...</h1> :
            <>
                <h1>{data.name}</h1>
                <h3>Diameter: {data.diameter}</h3>
                <h3>Length of Year: {data.orbital_period} Earth days</h3>
                <h3>Climate: {data.climate}</h3>
                <h3>Gravity: {data.gravity} times Earth gravity</h3>
                <h3>Population: {data.population}</h3>
            </>
        )
    }
    else if(category === 'starships') {
        return (!data ? <h1>Retrieving...</h1> :
            <>
                <h1>{data.name}</h1>
                <h3>Model: {data.model}</h3>
                <h3>Length: {data.length} units</h3>
                <h3>Max Speed: {data.max_atmosphering_speed} units</h3>
                <h3>Crew: {data.crew}</h3>
            </>
        )
    }
    // else if(category === 'vehicles') {
    //     return (!data ? <h1>Retrieving...</h1> :
    //     <>
    //         <h1>{data.name}</h1>
    //         <h3>Height: {data.height}</h3>
    //         <h3>Mass: {data.mass}</h3>
    //         <h3>Birth Year: {data.birth_year}</h3>
    //         <h3>Gender: {data.gender}</h3>
    //     </>
    // )
    // }
    else if(category === 'people') {
        return (!data ? <h1>Retrieving...</h1> :
            <>
                <h1>{data.name}</h1>
                <h3>Height: {data.height}</h3>
                <h3>Mass: {data.mass}</h3>
                <h3>Birth Year: {data.birth_year}</h3>
                <h3>Gender: {data.gender}</h3>
            </>
        )
    }
    else if(category === 'films') {
        return (!data ? <h1>Retrieving...</h1> :
            <>
                <h1>{data.title}</h1>
                <h3>Director: {data.director}</h3>
                <h3>Release Date: {data.release_date}</h3>
                <h3>Episode: {data.episode_id}</h3>
                <h3>Opening Crawl: {data.opening_crawl}</h3>
            </>
        )
    }
    else if(category === 'species') {
        return (!data ? <h1>Retrieving...</h1> :
            <>
                <h1>{data.name}</h1>
                <h3>Classification: {data.classification}</h3>
                <h3>Designation: {data.designation}</h3>
                <h3>Average Lifespan: {data.average_lifespan}</h3>
                <h3>Language: {data.language}</h3>
            </>
        )
    }
    else {
        return (
            <>
                <h1>Error. Reload the page and try again.</h1>
            </>
        )
    }
}
export default Display