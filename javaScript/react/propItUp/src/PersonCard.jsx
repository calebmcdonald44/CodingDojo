import { useState } from 'react'

const People = (props) => {
    const {firstName, lastName, age, hairColor} = props
    let [currentAge, setCurrentAge] = useState(age)
    const birthdayTick = () => setCurrentAge((previousAge) => previousAge+1)

    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthdayTick}>Birthday Button for {firstName} {lastName}</button>
        </>
    );
}

export default People