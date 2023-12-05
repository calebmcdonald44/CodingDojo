// import { useState } from 'react'
import { useParams } from "react-router"

const Destination = (props) => {
    const {num_or_string, color1, color2} = useParams()
    return (
        (isNaN(num_or_string) ? (<h2 style={{color: color1, backgroundColor: color2}}>The word is: {num_or_string}</h2>) : (<h2 style={{color: color1, backgroundColor: color2}}>The number is: {num_or_string}</h2>))
    )
}
export default Destination

